window.addEventListener('load',()=> {
    tabledata = JSON.parse(localStorage.getItem('tabledata')) || [];
    
    let formdata = document.querySelector('#form-data');

    formdata.addEventListener('submit',(e)=>{
        e.preventDefault();

        var email = document.querySelector('#emailbox').value;
        let mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        var lang = document.querySelectorAll('input[type = "checkbox"]:checked');
        if(email.match(mailformat) && lang.length != 0)
        {
            var name = document.querySelector('#namebox');
            var mobile = document.querySelector('#mobilebox');
            var gender = document.querySelector('input[type="radio"]:checked').value;
            var country = document.querySelector('#country').value;
            var checkboxes = document.querySelectorAll('input[type="checkbox"]');
            var language='';

            const getcheckdata = () =>{
             
                checkboxes.forEach((item)=>{
                    if(item.checked )
                    {
                        
                         language += `${item.value},` 
                    } 
                });
            }
            getcheckdata();

            tabledatas = {
             names : name.value,
             emails : email,
             mobileno : mobile.value,
             languages : language,
             genders : gender,
             countrys : country,
           }
           console.log(tabledatas);
     
           tabledata.push(tabledatas);
           localStorage.setItem('tabledata',JSON.stringify(tabledata));
           e.target.reset();
            displayTable();
        }
        else{
           alert('All fields are required to add data!')
        }
    })
    displayTable();
}) 

const displayTable = () => {
    let tableitem = document.querySelector('#table-list');
    tabhtml = "";

    tabledata.map((item,index)=> {
        tabhtml +=`<tr>
                         <td>${index+1}</td>
                         <td>${item.names}</td>
                         <td>${item.emails}</td>
                         <td>${item.mobileno}</td>
                         <td>${item.languages}</td>
                         <td>${item.genders}</td>
                         <td>${item.countrys}</td>
                        
                     </tr>`
    })
    
    tableitem.innerHTML = tabhtml;
}

const mobNumber = ((evt) => {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) ) {
      alert("Please enter only Numbers.");
      if(mobile.length != 10 )
        alert('Enter 10 numbers')
      return false;
    }
  
    return true;
  })

  