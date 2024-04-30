  
function newItem(){
     
    //  adding a new item to the list of items
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === ''){
      alert('You must write something');
    }else{
        $('#list').append(li);
    }

    // crossing an item out
    function crossOut(){
        li.toggleClass("strike");
    } 
    li.on("dblclick",function crossOut(){
        li.toggleClass("strike");
    });

    // adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click',deleteListitem);
    function deleteListitem(){
        li.addClass('delete');
    }
    

}
