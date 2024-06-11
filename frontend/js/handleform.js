
document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('dataform');
 
    if (form) {

        form.addEventListener('submit', function(event) {

            event.preventDefault();
 
            const name = document.getElementById('name').value;

            const email = document.getElementById('email').value;
 
            const data = { name, email };
 
            const options = {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json'

                },

                body: JSON.stringify(data)

            };
 
            fetch('http://localhost:3000/client/create/', options)

                .then(response => {

                    if (!response.ok) {

                        throw new Error('Erro na requisição: ' + response.statusText);

                    }

                    return response.json();

                })

                .then(data => {

                    console.log(data)

                })

                .catch(error => {

                    console.log(error)

                });

        });

    } else {

        console.error('Elementos do formulário não encontrados no DOM.');

    }

});