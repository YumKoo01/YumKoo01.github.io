let body = document.querySelector('body')
let arr = [
    {
        name : 'nini'
    },
    {
        name : 'baltazari'
    }
]
function getContent(){
    arr.map((item)=>{
        prepareDivToAppend(item)
    })
}
// getContent()
function prepareDivToAppend(item){
    item.is_active = false
    let newDiv= document.createElement('div')
    newDiv.innerText=item.name
    newDiv.setAttribute(
        'class',
        `card p-4 m-3 text-white ${(item.is_active)?'bg-success' : 'bg-danger'}`
    )
    body.appendChild(newDiv)
}

//div.innerText = '123'
//div.innerHTML =
// query.appendChild(newElement)

// let buttons = document.querySelectorAll('.calculator-buttons')
//
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', (e)=>{
//         console.log(e.target.innerText)
//     })
// }

function outputCalculatorNumbers(output_innerText, event_innerText){
    let total = output_innerText + event_innerText
    if (output_innerText === '0'){
        return event_innerText
    }
    if (total.includes('=')){
        let regex = /(?=[+\-=])|(?<=[+\-=])/g
        let output = total.split(regex)
        if(output[1] === '+'){
            return parseFloat(output[0]) + parseFloat(output[2])
        }else if (output[1] === '-'){
            return parseFloat(output[0]) - parseFloat(output[2])
        }
    }
    return total
}

function writeInnerText(e){
    let output_div = document.getElementById('calculator-output')
    output_div.innerText = outputCalculatorNumbers(
        output_div.innerText,
        e.target.innerText
    )
}