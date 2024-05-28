const forms={
    teto:{
        1:{
            type:'option',
            options:
            { 
                1:'O forro terá revestimento acústico?',
                2:'não',
                3:'lã de vidro',
                4:'lã de rocha',
            }
        },
        2:{
            type:'imput',
            ask:'Qual a altura do rebaixamento? (do teto ao forro)'
        },
        3:{
            type:'imput',
            ask:'Qual a largura do teto?'
        },
        4:{
            type:'imput',
            ask:'Qual o comprimento do teto?'
        },
    },
    parede:{
        1:{
            type:'option',
            options:
            {
                1:'Qual a expessura da ferragem?',
                2:'48mm (parede final com 8cm)',
                3:'70mm (parede final com 10cm)',
                4:'90mm (parede final com 12cm)',
        }
        },
        2:{
            type:'option',
            options:
            { 
                1:'O forro terá revestimento acústico?',
                2:'não',
                3:'lã de vidro',
                4:'lã de rocha',
            }
        },
        3:{
            type:'imput',
            ask:'Qual a altura da parede?'
        },
        4:{
            type:'imput',
            ask:'Qual a largura da parede?'
        }
    }
}
export default forms;