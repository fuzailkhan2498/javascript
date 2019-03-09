function calculate(p){
    var x=parseInt(document.calcform.num1.value);
    var y=parseInt(document.calcform.num2.value);
    var z=document.calcform.result;
    if(p.value=="ADD")
    {
         z.value=x+y;
    }
    else if(p.value=="Sub")
    {
        z.value=x-y;
    }
    else if(p.value=="Mul")
    {
        z.value=x*y;
    }
    else if(p.value=="Div")
    {
        z.value=x/y;
    }
    else
    {
        z.value=x%y;
    }
            }