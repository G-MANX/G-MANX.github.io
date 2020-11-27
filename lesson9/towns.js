const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const towns = jsonObject['towns'];
    var p, f, s;
    for(let j=0; j < towns.length; j++){
       if(towns[j].name == "Preston"){
         p = j;
       }
       else if(towns[j].name == "Fish Haven"){
         f = j;
       }
       else if(towns[j].name == "Soda Springs"){
         s = j;
       }
    }
    var index = [p, f, s];
    for (let i = 0; i < index.length; i++ ) {
        let town = document.createElement('div');
        let data = document.createElement('div');
        data.setAttribute("class","data");
        town.setAttribute("id","town" + i);
        town.setAttribute("class","town");
        let h2 = document.createElement('h2');
        h2.setAttribute("class","townheader")
        let motto = document.createElement('p');
        motto.setAttribute("class","motto")
        let yearfounded = document.createElement('p');
        yearfounded.setAttribute("class","founded");
        let pop = document.createElement('p');
        pop.setAttribute("class", "pop");
        let rain = document.createElement('p');
        rain.setAttribute("class","rain");
        let image = document.createElement('img');

h2.textContent = towns[index[i]].name;
motto.textContent = "'" + towns[index[i]].motto + "'";
yearfounded.textContent = "Established: " + towns[index[i]].yearFounded; 
pop.textContent = "Population: " + towns[index[i]].currentPopulation;
rain.textContent = "Average Rainfall: " + towns[index[i]].averageRainfall; 
image.setAttribute('src', towns[index[i]].photo);
town.appendChild(data);
data.appendChild(h2);
data.appendChild(motto);
data.appendChild(yearfounded);
data.appendChild(pop);
data.appendChild(rain);
town.appendChild(image);
document.querySelector('section.towns').appendChild(town);
    }
      });
