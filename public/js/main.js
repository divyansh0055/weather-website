const { response } = require("express");

const city_Name=document.getElementById('cityName');
const submitBtn =document.getElementById('submitBtn');

const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementId('temp_status');


const datahide=document.querySelector('middle_layer');
const getinfo=async(event)=>{
    event.preventDefault();
    let cityVal=city_Name.value;



    if(cityVal===""){
        city_name.innerText=`plz write a city name before search`;
        datahide.classList.add('data_hide');

    }
    else{
        try{

            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1fbe56a44fe737c0128b2edf5d3fa594`;
            const responce=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            const tempMood=arrData[0].weather[0].main;
            
            if(tempMood=="Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun'style='color :#eccc68;'></i>;"
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i> ";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style=color:#a4b0be;'></i>";

            }
            else{
                temp_status.innerHTML=
                "<i class='fas fa-sun' style=color:#eaa6a6;'></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText=`plz write correct city name`;
            datahide.classList.add('data_hide');
        }


    }
}

submitBtn.addEventListener('click',getInfo);