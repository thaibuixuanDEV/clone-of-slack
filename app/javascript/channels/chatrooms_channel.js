import consumer from "./consumer"

consumer.subscriptions.create("ChatroomsChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    var dataBehavior = $(`[data-behavior='messages'][data-chatroom_id='${data.chatroom_id}']`);
    if(dataBehavior.length != 0){
      dataBehavior.append(data.message);
    } else {
      $(`[data-behavior='chatroom-link'][data-chatroom-id='${data.chatroom_id}']`).css('font-weight', 'bold');
    }
  }
});
