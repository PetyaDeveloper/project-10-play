function displayInfo(data){
    var personList = '<ul id="myUl">';
    $.each(data.results, function(i, item){
      let date = item.dob.date.substring(5,7);
      let month = item.dob.date.substring(8,10);
      let year = item.dob.date.substring(0,4);

      personList += `<li class="person"><img src = "${item.picture.large}"/>
      <span><p class="name"> ${item.name.first} ${item.name.last}</p>
      <p class="email">${item.email}</p>
      <p class="location">${item.location.city}</p>
      </span><div class="personExtraData" style="display:none">
      <p>${item.cell}</p>
      <p class="address">${item.location.street}, ${item.location.state}</p>
      <p> ${item.location.postcode}</p>
      <p>Birthday: ${date}/${month}/${year}</p>
      
      <div class = "arrows">
        <div class = "bwd">BWD</div><div class="fwd">FWD</div>
      </div>
      </div></li>`;
    });
    //personList += '<ul>';
    $('.js').html(personList);
    
    // POP UP WINDOW
    const person = document.querySelectorAll('.person');
    const close = document.getElementById('close');
    const popup = document.querySelector('.popup');
    const popupContentText = document.querySelector('.popup-content-text');

    $.each(person,function(i){
        person[i].addEventListener('click',(e)=>{
            popup.style.display = "block";

          let personHTML = $(this).clone();
          $(popupContentText).html(personHTML);
            $(personHTML).removeClass('person').addClass('personFull');
            $(personHTML).children('div').show();
        //   make the body behind the popup window darker
            $('ul, .person').css('opacity', '.5');
            $('ul, .person, body').css('background-color', '#527a7a');
            $('.personFull').css('opacity', '1');
      });
    });
    $('#close').on('click',function(){
        $(popup).hide();
        $('.person').css('background-color', 'white');
        $('body, ul').css('background-color', '#e0ebeb');
        $('ul, .person, body').css('opacity', '1');
    });
    // search bar:
    // function searchEmployee(){
    //   //.person is li, p is .name
    //
    //   const input = document.getElementById('search');
    //   let filter = input.value.toLowerCase();
    //   const ul = document.getElementById('myUl');
    //   let li = ul.getElementsByTagName('li');
    //   console.log(li[0]);
    // }
}

$.ajax({
  url: 'https://randomuser.me/api/?nat=au,ca,ch,fr,gb,nl,nz,us&results=12&inc=picture,name,email,location,cell,dob',
  dataType: 'json',
  success: function(data) {
      displayInfo(data);
    console.log(data);
  }
});
//s
// function searchEmployee(){
//   //.person is li, p is .name
//
//   const input = document.getElementById('search');
//   let filter = input.value.toLowerCase();
//   const ul = document.getElementById('myUl');
//   let li = ul.querySelector('.person')[0];
//   console.log(li);
// }
// searchEmployee();
$('img').on('click', function(){
  displayInfo(data);
    alert('bu');
});