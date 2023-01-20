// Exercise 2
// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:
// Height
// Birth year
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1

let dataBtn = document.getElementById('data-btn')
console.log(dataBtn)



dataBtn.addEventListener('click',function(e){
    e.preventDefault();
    // console.log(e)
    
    //Fetch Api
    fetch('https://swapi.dev/api/people/1')
    .then(function(resoult){
        return resoult.json()
    })
    .then(function(data){
        console.log('Data', data)
        let firstPerson = document.getElementById('personName')
        firstPerson.innerText = data.name
        let htmls='';

        htmls=`
        <thead></thead>
        <tbody>
        <tr><td>Height: ${data.height} </td></tr>
        <tr><td>Birth year: ${data.birth_year} </td></tr>
        <tr><td>Eye color: ${data.eye_color} </td></tr>
        <tr><td>Hair color: ${data.hair_color} </td></tr>
        </tbody>`
    
        document.getElementById('table').innerHTML=htmls

    
    
    })
    .catch(function(err){
        console.log('Error', err)
    })
});