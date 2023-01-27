console.log('**All Good**')
// Home Work Star Wars Planets
//Homework 1
// Task 1
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api.Show ->
// Planet Name
// Population
// Climate
// Gravity
//Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10.

//Html elements for tabele 1
let tableData = document.getElementById('tableResolt')
let btnOne = document.getElementById('btnOne')
let btnTwo = document.getElementById('btnTwo')


console.log(tableData,btnOne,btnTwo)

// First btn function
btnOne.addEventListener('click',function(){
    fetch('https://swapi.dev/api/planets/?page=1')
    .then(function(response){
        return response.json()
     })
     .then(function(data){
        console.log(data)
    
        let newData = `
                    <thead>
                            <tr>
                                <th>Planet Name: </th>
                                <th>Population: </th>
                                <th>Climate:  </th>
                                <th>Gravity:  </th>
                            </tr>
                   </thead>`;
        for (let i=0; i<10; i++){
            newData +=`
                    
                   <tr>
                     <td>${data.results[i].name}:</td>
                     <td>Population:${data.results[i].population} </td>
                     <td>Climate:${data.results[i].climate}  </td>
                     <td>Gravity: ${data.results[i].gravity} </td>
                    </tr>`
                }
       document.getElementById('boddy').innerHTML =newData;
    })
    .catch(function(error){
        console.log(error)
     });
     btnTwo.style.opacity ='1';
})
       
//Html elements for tabele 2
let tableDataTwo = document.getElementById('tableResoltTwo')

btnTwo.addEventListener('click',function(){
    fetch('https://swapi.dev/api/planets/?page=2')
    .then(function(response){
        return response.json()
     })
     .then(function(data){
        console.log(data)
    
        let newDataTwo = `
                    <thead>
                            <tr>
                                <th>Planet Name: </th>
                                <th>Population: </th>
                                <th>Climate:  </th>
                                <th>Gravity:  </th>
                            </tr>
                   </thead>`;
        for (let i=0; i<10; i++){
            newDataTwo +=`
                    
                   <tr>
                     <td>${data.results[i].name}:</td>
                     <td>Population:${data.results[i].population} </td>
                     <td>Climate:${data.results[i].climate}  </td>
                     <td>Gravity: ${data.results[i].gravity} </td>
                    </tr>`
                }
       document.getElementById('boddyTwo').innerHTML =newDataTwo;
    })
    .catch(function(error){
        console.log(error)
     });
    
})
         

