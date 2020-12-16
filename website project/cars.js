const requestURL = 'https://github.com/G-MANX/G-MANX.github.io/blob/master/website%20project/.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const cars = jsonObject['cars'];
    var p, f, s;
    for(let j=0; j < carss.length; j++){
       if(carss[j].name == "Honda Pioneer.jpeg"){
         p = j;
       }
       else if(cars[j].name == "Honda scooter.jpeg"){
         f = j;
       }
       else if(cars[j].name == "Jeep wrangler.jpeg"){
         s = j;
       }
    }
    var index = [p, f, s];
    for (let i = 0; i < index.length; i++ ) {
        let cars = document.createElement('div');
        let data = document.createElement('div');
        data.setAttribute("class","data");
        car.setAttribute("id","town" + i);
        car.setAttribute("class","town");
        let h2 = document.createElement('h2');
        h2.setAttribute("class","townheader")
        let price = document.createElement('p');
        motto.setAttribute("class","motto")
        let yearfounded = document.createElement('p');
        yearfounded.setAttribute("class","founded");
        let pop = document.createElement('p');
        pop.setAttribute("class", "pop");
        let rain = document.createElement('p');
        rain.setAttribute("class","rain");
        let image = document.createElement('img');

h2.textContent = towns[index[i]].name;
car.textContent = "'" + cars[index[i]].car + "'";
yearfounded.textContent = "Established: " + cars[index[i]].yearFounded; 
pop.textContent = "Population: " + cars[index[i]].currentPopulation;
rain.textContent = "Average Rainfall: " + cars[index[i]].averageRainfall; 
image.setAttribute('src', cars[index[i]].photo);
car.appendChild(data);
data.appendChild(h2);
data.appendChild(motto);
data.appendChild(yearfounded);
data.appendChild(pop);
data.appendChild(rain);
car.appendChild(image);
document.querySelector('section.towns').appendChild(car);
    }
      });
