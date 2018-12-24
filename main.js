    function displayInfo(data){
        var personList = '<ul>';
        $.each(data.results, function(i, item){
          personList += `<li class="person"><img src = "${item.picture.large}"/><span><p class="name"> ${item.name.first} ${item.name.last}</p><p class="email">${item.email}</p><p class="location">${item.location.city}</p></span><div class="personExtraData" style="display:none"><p>${item.phone}</p><p>${item.location.city}</p><div></li>`;
        });
        personList += '<ul>';
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
           });
        });
    }


    $.ajax({
      url: 'https://randomuser.me/api/?results=12&inc=picture,name,email,location',
      dataType: 'json',
      success: function(data) {
          displayInfo(data);
        console.log(data);
      }
    });

