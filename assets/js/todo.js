//Click X to remove the list item
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        //removes the parent of the span (li)
        $(this).remove();
    });
    //will stop bubbling the click event
    event.stopPropagation();
});

//Cross off todos by clicking.
//when an li is clicked inside a ul run this code
//li that may or may not be on the page when it loaded but the ul
//was definitely on the page when it loaded.
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

$("input[type='text']").keypress(function(event){
    //check for character code 13 (enter key)
    if(event.which === 13){
        //takes new todo from input
      var todo = $(this).val();
      $(this).val('');
      //create new li and add to ul
      $('ul').append('<li><span><i class="fas fa-minus-circle"></i></span> ' + todo + '</li>');
    }
});

$('#toggle-form').click(function(){
    $("input[type='text']").fadeToggle();
});