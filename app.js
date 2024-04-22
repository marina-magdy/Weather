
let button= document.querySelector('.Button');
let inputValue= document.querySelector('.inputValue');
let temp=document.querySelector('.temp');
let desc=document.querySelector('.desc');
let pos;
	
function success(position) {
    console.log(position);
    pos= position;
  }
  
  navigator.geolocation.getCurrentPosition(success);

  

button.addEventListener('click',function(){fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=869e536ef9aecb59c774ee4115748612`)
.then(response=>response.json())
.then(displayData)
.catch(err=>alert('Wrong City Name'));
})
const displayData= (weather)=>{
    temp.innerHTML=`${weather.main.temp}°C`
    desc.innerHTML=`${weather.weather[0].main}`
}

