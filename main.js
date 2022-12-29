function myCalculation()
{
    let p_height=parseInt(document.getElementById('height').value);
    let p_width=parseInt(document.getElementById('weight').value);
    let convert_height=p_height/100;
    let p_bmi=p_width/(convert_height*convert_height);
    if(p_bmi<18)
    {
    document.getElementById('ans').style.color="#FFC300"; 
    document.getElementById('ans').innerText="Under Weight and Your BMI Was : "+p_bmi;
    }
    else if(p_bmi>18 && p_bmi<25)
    {
    document.getElementById('ans').style.color="green"; 
    document.getElementById('ans').innerText="Correct Weight and Your BMI Was :"+p_bmi;
    }
    else if(p_bmi>25)
    {
        document.getElementById('ans').style.color="red"; 
        document.getElementById('ans').innerText="Over Weight and Your BMI Was :"+p_bmi;
    }
}