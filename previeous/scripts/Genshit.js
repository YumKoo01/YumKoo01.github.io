document.body.onload = function(){
    let items = [
        {
            name: 'Arlecchino',
            description:'123',
            image:'./images/arl.jpg',
            backgroundColor : 'red',
        },
        {
            name:'eula',
            description: '1212',
            image: './images/eula.jpg',
            backgroundColor : 'brown',
        },
        {
            name:'mavuika',
            description:'123',
            image:'./images/mavuika.jpg',
            backgroundColor : '',
        },
        {
            name:'hu tao',
            description: '123',
            image:'./images/hutao.jpg',
            backgroundColor : '',
        },
        {
            name:'navia',
            description:'123',
            image:'./images/navia.jpg',
            backgroundColor : '',
        },
        {
            name:'raiden',
            description: '123',
            image:'./images/raiden.jpg',
            backgroundColor : '',
        },
        {
            name:'clorinde',
            description:'123',
            image:'./images/clorinde.jpg',
            backgroundColor : '',
        },
        {
            name:'xilonen',
            description:'123',
            image:'./images/xilonen.jpg',
            backgroundColor : '',
        },
        {
            name:'yaemiko',
            description: '123',
            image:'./images/yae_miko.jpg',
            backgroundColor : '',
        }
    ]
    let div = document.getElementById('row')
    items.map((item, index)=>{
        let newElement = document.createElement('div')
        newElement.setAttribute('class', 'd-flex flex-column justify-content-between card col-md-4 p-4')
        newElement.setAttribute('style', `background:${item.backgroundColor}`)
        newElement.innerHTML = `
            <div>
                <div style="background-image: url(${item.image})" class="image rounded"></div>
                <h3>${item.name}</h3>
                <div>
                    <h5>${item.description}</h5>
                </div>
            </div>
            <div>
                <button class="btn btn-danger">See More</button>
            </div>
        `
        div.appendChild(newElement)
    })
}

let items2=[ //array
    { // object
        name: 'Arlecchino',
        age: 22, //number
        region: 'Snezhnaya', //string
        gender : true, //boolean
    },
    {
        name: 'Eula',
        age: 21,
        region: 'Monstandt',
        gender : true,
    },
    {
        name: 'Mavuika',
        age: 500,
        region: 'Natlan',
        gender : true,
    },
    {
        name: "HuTao",
        age: 18,
        region: 'Liyue',
        gender : true,
    },
    {
        name: 'Navia',
        age: 26,
        region: 'Fontain',
        gender : true,
    },
    {
        name: 'Raiden',
        age: 26,
        region: 'Inazuma',
        gender : true,
    },
    {
        name: 'Zhongli',
        age: 500,
        region: 'Liyue',
        gender: false
    }


]
/* items2.forEach((character)=>{
    console.log(
        character.name,
        (character.region==='Fontain')? 'from luxury region':'',
        (character.age<21)? 'young': 'mature',
        (character.gender)? 'woman': 'man',
    )
})*/

let characters=[
    {
        name:'asuka',
        age: 14,
        category:'',
        birth_year:'',
        lastname:'Langley Soryu',
        gender: true
    },
    {
        name:'rei',
        age: 14,
        category:'',
        birth_year:'',
        lastname:'ayanami',
        gender: true
    },
    {
        name:'misato',
        age: 29,
        category:'',
        birth_year:'',
        lastname:'katsuragi',
        gender:true
    },
    {
        name:'shinji',
        age:14,
        category:'',
        birth_year:'',
        lastname:'ikari',
        gender: false
    },
    {
        name:'kaworu',
        age: 15,
        category:'',
        birth_year:'',
        lastname:'nagisa',
        gender: false
    }
]
characters.forEach((character)=>{
    character.birth_year= 2025-character.age
    character.category= character.age>=18? 'adult' : 'minor'
    console.log(character)
})