const mudarTemaSteam = document.querySelector('#temaSteam')



    //Não altere o nome 'change'
    //toggle = alterna

    //Toggle dark mode

function toggleSteamMode(){
    document.body.classList.toggle('steamColors')
}

    //Load steamColors or dark mode

    function CarregarTema(){
        const steamMode =localStorage.getItem('steamColors')
        if(steamMode){
            toggleSteamMode()
            
        }
    }

CarregarTema()



mudarTemaSteam.addEventListener('change',function(){
    toggleSteamMode()
    //Save or remove Dark mode
    localStorage.removeItem('steamColors')
    

    if(document.body.classList.contains('steamColors')){
        localStorage.setItem('steamColors',1)
    }
})
    