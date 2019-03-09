      function validate()
      {
        var student=document.myform.student_name.value;
        var father=document.myform.father_name.value;
        var mother=document.myform.mother_name.value;
        var mail=document.myform.email.value;
        var mno=document.myform.mo_no.value;
        var add=document.myform.address.value;
        if(student=="")
        {
          alert("enter the student name");
          return false;
        }
        else if(father=="")
        {
          alert("enter the father name");
          return false;
        }
        else if(mother=="")
        {
          alert("enter the  name");
          return false;
        }
        else if(mail=="")
        {
          alert("enter the email name");
          return false;
        }
        else if(mno=="")
        {
          alert("enter the mobile number name");
          return false;
        } 
        else if(add=="")
        {
          alert("enter the mobile number name");
          return false;
        } 
        else{
          alert("form submitted succesfully..");
          return true;
        }
      }