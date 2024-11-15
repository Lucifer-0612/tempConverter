
const textbox = document.getElementById("textbox");
const tofarhe = document.getElementById("ctof");
const tocelsius = document.getElementById("ftoc");
const result = document.getElementById("result");
let temp;


function convert()
{
    if(tofarhe.checked)
    {
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=temp+"°F"; //adding tofixed to get more precise value
        


    }
    else if(tocelsius.checked)
    {
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"°C";  //adding tofixed to get more precise value
        

    }
    else
    {
        result.textContent="Select a Unit";
    }
}