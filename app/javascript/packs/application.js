// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//import $ from 'jquery';
//window.jQuery = $;
//window.$ = $;
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("packs/notification")
import 'bootstrap'
import '../stylesheets/application'
import '../stylesheets/unread-line'
document.addEventListener("turbolinks:load", () => {
  $('[data_toggle="tooltip"]').tooltip()
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//

//$(document).on('turbolinks:load',function(){

  //var newMessage = $("#new_message");

  //newMessage.keypress( function(e) {
    //if (e.keyCode == 13){
      //console.log(`message: ${newMessage.serialize()}`)
      //$.ajax({
        //type: "post",
        //url: newMessage.attr("action"),
        //data: newMessage.serialize(),
        //dataType: "script"
      //});
    //}
  //});
//})


//$(document).on('turbolinks:load', function(){
//})



