$(function() {
  $(".btnclick").click(function() {
    $(".divpopup").dialog({
      // title: "title",
      position: "absolute",
      padding: 0,
      margin: 0,
      width: 800,
      height: 380,
      modal: true,
      effect: {toggle:'blind', direction: 'up'},
      hide: {effect: 'up', duration: 5000},
      buttons: [
          {
          text: "CLOSE",
            // className: 'btnPopUp',
            click: function() { 
              $(this).dialog("close")
            }
          },
          {
          text: "SEE EVENT PAGE",
            // className: 'btnPopUp',
            click: function() { 
              $(this).dialog("close")
          }     
        }
      ],
    });
  });
})

$(document).off('click', '.button')
$(document).on('click', '.button', function(event){
  event.preventDefault();
  var btnEffect = $(this).data('effect')

  $(this).modalAnimate({
    modalTarget:'modal-container',
    effect:$(this).data('effect'),
    autoEffect:true
  });
})

(function ($) {

    $.fn.modalAnimate = function(options) {
        var modal = $(this);
        
        //Defaults
        var settings = $.extend({
            modalTarget:'modal-container',
            effect:'revealing',
            buttons: [
              {
              text: "CLOSE",
                // className: 'btnPopUp',
                click: function() { 
                  $(this).dialog("close")
                }
              },
              {
              text: "SEE EVENT PAGE",
                // className: 'btnPopUp',
                click: function() { 
                  $(this).dialog("close")
              }     
            }
          ],
            autoEffect:false,
            // Callbacks
            modalClose: function() {}
        }, options);

        var closeBt = $('#'+settings.modalTarget);

        if(settings.autoEffect === true){
            var effect = $(modal).attr('data-effect')
            closeBt.removeAttr('class').addClass(effect)
            $('body').addClass('modal-active')
        }else{
           modal.click(function(event) {
              event.preventDefault();
              var effect = $(modal).attr('data-effect')
              closeBt.removeAttr('class').addClass(effect)
              $('body').addClass('modal-active')
          });
        }



        closeBt.click(function(event) {
            event.preventDefault();
            $(this).addClass('out');
            $('body').removeClass('modal-active');

        });

        function modalClose () {
          $('#'+settings.modalTarget).addClass('out');
          $('body').removeClass('modal-active');//modal close
        }


    }; // End modalAnimate.js

}(jQuery));
