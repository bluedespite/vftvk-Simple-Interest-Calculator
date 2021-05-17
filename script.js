function compute()
{
    var principal=document.getElementById("principal");
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=principal.value*years*rate/100;
    var year=new Date().getFullYear()+parseInt(years);
    var s=document.getElementById("result");
   if (principal.value<=0)
    {alert("Enter a positive numer");
    principal.focus;
    }
    else{
    s.innerHTML="<br> If you Deposit <mark>"+principal.value+ "</mark>,<br> at an interest rate of <mark>"+rate+"%</mark>, <br> You receive an amount of <mark>"+interest+"</mark>, <br> in the year <mark>"+year+"</mark>";
} }

function updateRate()
{
    var rateval=document.getElementById("rate").value;
    var m=document.getElementById("rate_val");
    m.innerText=rateval+"%";
}
function Validation()
{
    var prin=document.getElementById("principal");
    if (prin.value<=0)
    {alert("Enter a positive numer");
    prin.focus;
    }
}
        