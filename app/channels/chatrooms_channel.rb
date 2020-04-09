class ChatroomsChannel < ApplicationCable::Channel
  def subscribed
    current_user.chatrooms.each do |chatroom|
      stream_from "chatrooms:#{chatroom.id}"
    end
  end

  def unsubscribed
    stop_all_streams
  end

  def receive(data)
    chatroom_id = data["chatroom_id"]
    form_info = Rack::Utils.parse_nested_query(data["message"])
    message_body = form_info["message"]["body"]
    @chatroom = Chatroom.find(chatroom_id)
    message = @chatroom.messages.create(body: message_body, user: current_user)
    MessageRelayJob.perform_later(message)
  end
end
