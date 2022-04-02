const mieiPokemon = [
    {
        nome: 'Charizard',
        sesso: 'M',
        lv: 62,
        pv: 44,
        descrizione: 'Quando emette le sue lingue di fuoco, la fiamma rossa sulla punta della coda brucia più intensamente.',
        tipi: ['fuoco', 'volante'],
        mosse: [
            'Volo',
            'Fuocobomba',
            'Lanciafiamme',
            'Dragartigli'
        ]
    },
    {
        nome: 'Pikachu',
        sesso: 'M',
        lv: 35,
        pv: 80,
        descrizione: 'Con la coda ritta sonda i dintorni. Se gliela si tira si innervosisce, si gira e cerca di mordere.',
        tipi: ['elettro'],
        mosse: [
            'Attacco Rapido',
            'Fulmine',
            'Colpocoda',
            'Tuonoshock'
        ]
    },
    {
        nome: 'Vulpix',
        sesso: 'F',
        lv: 16,
        pv: 20,
        descrizione: 'Il suo mantello è meraviglioso. Crescendo la sua morbidissima coda si moltiplica formandone altre.',
        tipi: ['fuoco'],
        mosse: [
            'Braciere',
            'Colpocoda',
        ]
    },
    {
        nome: 'Meowth',
        sesso: 'M',
        lv: 41,
        pv: 77,
        descrizione: 'Sembra essere più attivo di notte. Ama gli oggetti lucenti e rotondi e non può evitare di raccoglierli.',
        tipi: ['normale'],
        mosse: [
            'Graffio',
            'Morso',
            'Giornopaga',
            'Ruggito'
        ]
    },
    {
        nome: 'Jigglypuff',
        sesso: 'F',
        lv: 24,
        pv: 100,
        descrizione: 'Usa i suoi enormi occhi per stregare i suoi nemici, poi canta una dolce melodia per addormentarli.',
        tipi: ['normale', 'folletto'],
        mosse: [
            'Botta',
            'Canto',
            'Riposo',
            'Ricciolscudo'
        ]
    },
    {
        nome: 'Ponyta',
        sesso: 'F',
        lv: 17,
        pv: 30,
        descrizione: 'Il suo mantello è meraviglioso. Crescendo la sua morbidissima coda si moltiplica formandone altre.',
        tipi: ['fuoco'],
        mosse: [
            'Azione',
            'Ruggito',
        ]
    },
]

// const app = new Vue({
//     el: '#app',
//     data: {
//         myTeam: mieiPokemon,
//         activePokemon: null,
//     },
//     methods: {
//         setActivePokemon: function(i){
//             this.activePokemon = i;
//         },
//         deletePokemon: function(i){
//             this.myTeam.splice(i, 1);
//             this.setActivePokemon(null);
//         },
//         classPuntiVita: function(pv){
//             if(pv < 25){
//                 return 'red';
//             }else if(pv < 50){
//                 return 'orange';
//             }else{
//                 return 'green';
//             }
//         },
//         sessoPokemon: function(sex){
//             if(sex === 'M'){
//                 return 'fa-mars';
//             }else if(sex === 'F'){
//                 return 'fa-venus';
//             }
//         },
//         imgURLPokemon: function(nome){
//             return `img/pokemon/${nome}.png`;
//         },
//         imgURLTipo: function(nome){
//             return `img/tipi/${nome}.webp`;
//         },
//         randomNumberBetween: function(min, max){
//             return Math.floor(Math.random() * (max - min + 1) + min)
//         },
//         addRandomPokemon: function(){
//             const targetIndex = this.randomNumberBetween(0, mieiPokemon.length-1);
//             const target = {...mieiPokemon[targetIndex]};
//             const sex = this.randomNumberBetween(0,1);
//             target.sesso = sex == 0? 'M' : 'F';
//             target.lv = this.randomNumberBetween(5,100);
//             target.pv = this.randomNumberBetween(1,100);
//             this.myTeam.push(target);
//         }
//     }
// });
