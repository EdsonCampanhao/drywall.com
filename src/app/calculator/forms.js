const forms={
    teto:{
        1:{
            type:'option',
            ask:'O forro terá revestimento acústico?' ,
            options:
            { 
                1:'não',
                2:'lã de vidro',
                3:'lã de rocha',
            }
        },
        2:{
            type:'input',
            ask:'Qual a altura do rebaixamento? (do teto ao forro)'
        },
        3:{
            type:'input',
            ask:'Qual a largura do teto?'
        },
        4:{
            type:'input',
            ask:'Qual o comprimento do teto?'
        },
    },
    parede:{
        1:{
            type:'option',
            ask: 'Qual a expessura da ferragem?',
            options:
            {
   
                1:'48mm (parede final com 8cm)',
                2:'70mm (parede final com 10cm)',
                3:'90mm (parede final com 12cm)',
        }
        },
        2:{
            type:'option',
            ask: 'O forro terá revestimento acústico?',
            options:
            { 
                1:'não',
                2:'lã de vidro',
                3:'lã de rocha',
            }
        },
        3:{
            type:'input',
            ask:'Qual a altura da parede?'
        },
        4:{
            type:'input',
            ask:'Qual a largura da parede?'
        }
    }
}
export default forms;