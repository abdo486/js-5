

async function sea(s=`cairo`){
    var res= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2d5a719f41e44c5d856125238230408&q=${s}&days=3`)
    var data = await res.json();
    console.log(data)
    displayCurrent(data.current,data.location);
    displayNext(data.forecast.forecastday)
 
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function displayCurrent(cur,loc){
 
    d= new Date(cur.last_updated);
    cart = `<div class="col-md-4 one" id="cur">
    <div class="day-his d-flex justify-content-between " >
    <p>${days[d.getDay()]}</p>
    <p>${d.getDate()+monthes[d.getMonth()]}</p>
  </div>
  <div>
    <p>${loc.name}</p>
    <h2>${cur.temp_c}<sup>o</sup>c</h2>
    <img src="${cur.condition.icon}" alt="">
    <p>${cur.condition.text}</p>
  </div>
  
  </div>

    </div>
    
     `
  
    document.getElementById("next").innerHTML=cart

  
   

}
function displayNext(forec){
  let car = ``
  for(let i =1 ; i<forec.length;i++){
      car+=`<div class="col-md-4  one text-center">
      <p>${days[new Date(forec[i].date).getDay()]}</p>
      <div>
        <img src="${forec[i].day.condition.icon}" alt="">
      <h2>${forec[i].day.maxtemp_c}</h2>
      <p>${forec[i].day.mintemp_c}</p>
      <p>${forec[i].day.condition.text}</p>
      </div>
           

      </div>
      `
     
      
    


    }
    document.getElementById("next").innerHTML+= car

    
}


sea()



