function compute()
{
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=principal*years*rate/100;
    var year=new Date().getFullYear()+parseInt(years);
    var s=document.getElementById("result");
    s.innerHTML="<br> If you Deposit <mark>"+principal+ "</mark>,<br> at an interest rate of <mark>"+rate+"%</mark>, <br> You receive an amount of <mark>"+interest+"</mark>, <br> in the year <mark>"+year+"</mark>";
} 

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
        