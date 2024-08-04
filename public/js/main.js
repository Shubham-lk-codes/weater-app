 const sbtn  = document.querySelector('#subbtn')
 const cityName = document.querySelector("#cityName")
 const city_name = document.querySelector("#city_name")
 const temp = document.querySelector("#temp")
 const temp_status = document.querySelector("#temp_status")

const getinfo = async (event)=>{
  event.preventDefault()
  let cityval = cityName.value
   if(cityval === ""){
    city_name.innerText =`please weite the name before search`

   }else{
     try{
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&lang=en&appid=a907dd7a15fd8af18b6fb9738e226352`
      const respond = await  fetch(url)
      const data = await respond.json()
      const arrData =  [data]

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
      temp.innerText = arrData[0].main.temp
      const tempMood = arrData[0].weather[0].main

      if(tempMood === "Clear"){
        temp_status.innerHTML=`<i class="fas fa-cloud-sun weather-icon"></i>`
      }else if(tempMood === "Clouds"){
        temp_status.innerHTML = `<i class="fas fa-cloud-sun-rain weather-icon"></i>`

      }else if(tempMood=== "Rain"){
        temp_status.innerHTML = `<i class="fas fa-cloud-rain weather-icon"></i>`
      }else{
        temp_status.innerHTML = `<i class="fas fa-cloud-sun weather-icon"></i>`
      }
  
     }catch(err){
        city_name.innerText =`please enter valid name`
     }
   }

}

sbtn.addEventListener("click",getinfo)

// a907dd7a15fd8af18b6fb9738e226352