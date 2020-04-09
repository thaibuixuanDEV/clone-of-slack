import consumer from "./consumer"

var lastReadChannel = consumer.subscriptions.create("LastReadChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});
export default lastReadChannel;

$(document).on('turbolinks:load', function(){
  //console.log(lastReadChannel.instanceof);
})
