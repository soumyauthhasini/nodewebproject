const submitBtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const country = document.getElementById('country');


const getInfo = async(event) => {
    event.preventDefault();
    

    let cityvall = cityname.value;
    if( cityvall === ''){
        city_name.innerText = 'Write';
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityvall}&appid=4a5de5ddef03c52be9804b239d9b35a6`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = arrData[0].name;
            temp.innerText = arrData[0].main.temp;
            country.innerText = arrData[0].sys.country;

            
            // console.log(data);
            console.log(arrData[0].main.temp);
        }catch{
            city_name.innerText = 'Write2';
        }
        
    }
}
submitBtn.addEventListener('click',getInfo);