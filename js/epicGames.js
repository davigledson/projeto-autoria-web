
const mudarTemaEpic = document.querySelector('#temaEpic')



    //Não altere o nome 'change'
    //toggle = alterna

    //Toggle dark mode

function toggleEpicMode(){
    document.body.classList.toggle('epicColors')
}

    //Load epicColors or dark mode

    function CarregarTema(){
        const epicmode =localStorage.getItem('epicColors')
        if(epicmode){
            toggleEpicMode()
        }
    }

CarregarTema()



mudarTemaEpic.addEventListener('change',function(){
    toggleEpicMode()
    //Save or remove Dark mode
    localStorage.removeItem('epicColors')
    

    if(document.body.classList.contains('epicColors')){
        localStorage.setItem('epicColors',1)
    }
})
   