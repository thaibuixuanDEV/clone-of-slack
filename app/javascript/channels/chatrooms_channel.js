import consumer from "./consumer"
import lastReadChannel from "./last_read_channel"
const chatroomChannel = consumer.subscriptions.create("ChatroomsChannel", {
//App.chatrooms_channel = App.cable.subscriptions.create("ChatroomsChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    var dataBehavior = $(`[data-behavior='messages'][data-chatroom_id='${data.chatroom_id}']`);
    if(dataBehavior.length != 0){
      var newMessageComponent = $(`<div class="unread-message"><strong>${data.message.username}</strong>: ${data.message.body}</div>`);
      if(document.hidden){
        if($('.strike').length == 0){
          dataBehavior.append('<div class="strike"><span>Unread Messages</span></div>')
        }
        dataBehavior.append(newMessageComponent);

        if(Notification.permission == 'granted'){
        new Notification(`${data.message.username}`, { body: `${data.message.body}`});
        }
        newMessageComponent.css({"background":"#afe3bd", "opacity": "0.8"});
      } else{
        dataBehavior.append(newMessageComponent);
        lastReadChannel.send({ chatroom_id: data.chatroom_id });
      }
    } else {
      $(`[data-behavior='chatroom-link'][data-chatroom-id='${data.chatroom_id}']`).css('font-weight', 'bold');
    }
  }
});

$(document).on('turbolinks:load', function(){
  var newMessage = $("#new_message");
  var messages = $("[data-behavior='messages']");
  var chatroomId = messages.attr('data-chatroom_id');
  var textArea = $('#message_body')
  $('body').on("click", function(e){
    lastReadChannel.send({ chatroom_id: chatroomId });

  });
  newMessage.keypress( function(e){
    if(e.keyCode == 13 && textArea.val().replace(/\s+/, "").length != 0){
      chatroomChannel.send({ chatroom_id: chatroomId , message: newMessage.serialize()});
      textArea.val('');
      if($('.strike').length != 0){
        $('.strike').remove();
        $('.unread-message').css({'background': 'none', 'opacity': '1'});
      }
    }
  })
});

