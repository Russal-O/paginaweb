//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    // console.log('test');

    //Get API
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "<h2><center>Datos De Usuario</center></h2>";

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Nombre: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Numero De Contacto: ${lists.cell}</li>
                            <li class="list-group-item">Edad: ${lists.dob.age}</li>
                            <li class="list-group-item">Email: ${lists.email}</li>
                            <li class="list-group-item">Genero: ${lists.gender}</li>
                            <li class="list-group-item">Pais: ${lists.location.country}</li>
                            <li class="list-group-item">Ciudad: ${lists.location.city}</li>
                            <li class="list-group-item">Codigo Postal: ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output;

        });
};

