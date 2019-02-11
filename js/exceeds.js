
//loop through all li items and hide the ones not matching the search from the input
function myFunction(){
    const input = document.getElementById('search');
    let filter = input.value.toUpperCase();
    const ul = document.getElementById('myUl');
    let li = document.getElementsByTagName('li');
    
    // loop through all list items and hide those who dont match the search query
    for(let i=0; i<li.length; i++){
        let name = li[i].getElementsByTagName('p')[0];
        let txtValue = name.textContent || name.innerText;
        if(txtValue.toUpperCase().indexOf(filter)>-1) {
            li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }
  }
};
$('input').on('keyup', function(){
   myFunction(); 
});

//move back through employee detail window when the popup window is open
$(document).ready(function(){
   $('.popup').on('click',function(){
      alert('bu');
   });
});
