//        $(document).ready(function() {  
//         $('#events-popularity').hide();

// $('#popularity-link, #dash-link' ).on('click',
//   function() {
//     $('#main, #events-popularity'  ).toggle()
//   });
// });  

jQuery(function(){
       
   
    // Sidebar-functionalities
        
    $('.showOne').click(function(){
          
          $('.selectDiv').hide();
          $('.div'+$(this).attr('target')).show();
    });

    $('ul li a').click(function(){
      $('li a').removeClass('active');
      $(this).addClass('active');
    });
   
    // Functionality when notification bell is clicked

    $('.notification-bell').click(function(){
       $('#notification-box').toggle();
    });

    // Functionality when saved button is clicked of setting
    $('#savechanges').click(function(){
        $('#saved-box').slideToggle('2000');
     });


     // Functionality when cross button is clicked of setting
    $('#close').click(function(){
        $('#saved-box').slideToggle('1000');
     });


       // Functionality when saved button is clicked of support
    $('#submit').click(function(){
        $('#saved-box-1').slideToggle('1000');
     });


      // Functionality when cross button is clicked of support
    $('#close-1').click(function(){
        $('#saved-box-1').slideToggle('1000');
     });


       // Functionality when photoshoot image is clicked in popular section of dashboard
    $('#ev-1').click(function(){
        $('#photoshoot-info').slideToggle('1000');
     });

       // Functionality when cross button is clicked of photoshoo-section
    $('#close-2').click(function(){
        $('#photoshoot-info').slideToggle('1000');
     });

});