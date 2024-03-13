const mostre = () => {
    const repositorioID = document.querySelector("#repositorio").value;
    const url = `https://api.github.com/users/${repositorioID}/repos`;

    const mostreThen = () => {
        const fetchUrl = fetch(url);
        fetchUrl
            .then(response => {
                return response.json();
            })
            .then(data => {
                const span = document.querySelector("span");
                span.innerHTML = data[0].name;
                data.forEach(element => {
                    console.log(element)
                });
            })
            .catch(error => {
                console.error('Erro durante a solicitação:', error);
            });
    };
    mostreThen();

  

    const mostreAsync = async () => {
        try {
            const fetchUrl = await fetch(url);
            if (fetchUrl.ok) {
                const data = await fetchUrl.json();
                data.forEach(element => {
                    console.log(element)
                });
            } else {
                throw new Error('Erro ao carregar os dados do repositório.');
            }
        } catch (error) {
            console.error('Erro durante a solicitação:', error);
        }
    };
    mostreAsync();
    
};
