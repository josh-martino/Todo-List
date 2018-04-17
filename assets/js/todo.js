//Click X to remove the list item
$('span').on('click', function(event){
    $(this).parent().fadeOut(500, function(){
        //removes the parent of the span (li)
        $(this).remove();
    });
    //will stop bubbling the click event
    event.stopPropagation();
});

//Cross off todos by clicking.
$('li').on('click', function(){
    $(this).toggleClass('completed');
});

$("input[type='text']").keypress(function(){
    console.log('key press');
});