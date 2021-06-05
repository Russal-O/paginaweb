document.getElementById('myBtn').addEventListener('click', getData);
function getData() {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => {
            let author = data.results;
            let output = "<h2><center>Datos De Usuario</center></h2>";
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">            
                            <li class="list-group-item"><h2> Nicolas Valenzuela</h2><img class="img-fluid" src="assets/img/nicolasv.jpg" alt="Imagen height="100px" width="100px"></li>
                            <li class="list-group-item">Numero de telefono: ${lists.cell}</li>
                            <li class="list-group-item">Edad: 18</li>
                            <li class="list-group-item">Email : ${lists.email}</li>
                            <li class="list-group-item">Genero: Masculino</li>
                            <li class="list-group-item">Pais: Chile </li>
                            <li class="list-group-item">Ciudad:Santiago</li>
                            <li class="list-group-item">Codigo Postal: ${lists.location.postcode}</li>
                                                        <li class="list-group-item">Sobre Nosotros: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia tortor et magna pretium posuere. Integer mollis, leo ac laoreet posuere, enim metus ullamcorper purus, eget varius sem diam sed urna. Fusce ligula lectus, finibus non mollis eu, pharetra at tortor. Proin non nulla venenatis sem ornare aliquet mattis vel nulla. Ut vitae tincidunt lorem, in consectetur turpis. Praesent sit amet ipsum sagittis arcu cursus lobortis. Donec et tincidunt leo, vitae posuere odio. Integer tincidunt lorem non elit convallis lacinia. Duis faucibus leo eu interdum vestibulum. Etiam quis risus in lacus pulvinar laoreet. Etiam imperdiet leo enim, at tincidunt ex mattis id.</li>

                        </ul>
                    </div>
                </div>
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">            
                            <li class="list-group-item"><h2> Russal Olave</h2><img class="img-fluid" src="assets/img/russal.jpg" alt="Imagen height="100px" width="100px"></li>
                            <li class="list-group-item">Numero de telefono: ${lists.cell}</li>
                            <li class="list-group-item">Edad: 23</li>
                            <li class="list-group-item">Email: ${lists.email}</li>
                            <li class="list-group-item">Genero: Femenino</li>
                            <li class="list-group-item">Pais: Chile </li>
                            <li class="list-group-item">Ciudad: Santiago</li>
                            <li class="list-group-item">Codigo Postal: ${lists.location.postcode}</li>
                            <li class="list-group-item">Sobre Nosotros: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia tortor et magna pretium posuere. Integer mollis, leo ac laoreet posuere, enim metus ullamcorper purus, eget varius sem diam sed urna. Fusce ligula lectus, finibus non mollis eu, pharetra at tortor. Proin non nulla venenatis sem ornare aliquet mattis vel nulla. Ut vitae tincidunt lorem, in consectetur turpis. Praesent sit amet ipsum sagittis arcu cursus lobortis. Donec et tincidunt leo, vitae posuere odio. Integer tincidunt lorem non elit convallis lacinia. Duis faucibus leo eu interdum vestibulum. Etiam quis risus in lacus pulvinar laoreet. Etiam imperdiet leo enim, at tincidunt ex mattis id.</li>

                        </ul>
                    </div>
                </div> `;
            });
            document.getElementById('output').innerHTML = output;
        });
};

