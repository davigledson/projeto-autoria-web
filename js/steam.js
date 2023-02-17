const mudartema = document.querySelector('#temaSteam')



    //Não altere o nome 'change'
    //toggle = alterna

    //Toggle dark mode

function toggleDarkMode(){
    document.body.classList.toggle('steamColors')
}

    //Load steamColors or dark mode

    function CarregarTema(){
        const darkmode =localStorage.getItem('steamColors')
        if(darkmode){
            toggleDarkMode()
        }
    }

CarregarTema()



mudartema.addEventListener('change',function(){
    toggleDarkMode()
    //Save or remove Dark mode
    localStorage.removeItem('steamColors')

    if(document.body.classList.contains('steamColors')){
        localStorage.setItem('steamColors',1)
    }
})
    