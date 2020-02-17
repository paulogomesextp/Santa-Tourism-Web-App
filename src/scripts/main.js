
// Export your custom function for declarative use
export { navActivePage, navbarToggleSidebar, closeMenuBeforeGoingToPage}

// Code your custom function


function navbarToggleSidebar() {
  $('.navbar-toggle').click(function(event){
    event.preventDefault();
    $(".navbar-fullscreen").toggleClass('active');
  });
  $('.close').click(function(event){
    event.preventDefault();
    $(".navbar-fullscreen").toggleClass('active');
  });
}

function navActivePage(){
  $('nav li a[href=".' + location.pathname + '"]').addClass('active');
  if (location.pathname == '/') $('nav li a[href="./index.html"]').addClass('active')
}

function closeMenuBeforeGoingToPage(){
  $('.navbar-fullscreen-links a').click(function(event){
    event.preventDefault();
    var href= $(this).attr('href');
    $('.navbar-fullscreen').removeClass('active');
    setTimeout(function() {
      location.href = href;
    }, 1000);
    
  });
}

function scrollToBottomRemoveArrowDown(){
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.navbar-text').addClass('bottom');
    }else if($('.navbar-text').hasClass('bottom')){
      $('.navbar-text').removeClass('bottom');
    }
  });
}

