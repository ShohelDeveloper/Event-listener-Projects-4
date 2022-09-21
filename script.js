// document.querySelector('#football').addEventListener('click',function(e){
//     console.log('Football is Clicked');

//     const target = e.target
//     // console.log(target)

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#basketball').addEventListener('click',function(e){
//     console.log('Basketball is Clicked');

//     const target = e.target
//     // console.log(target)

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// document.querySelector('#boxing').addEventListener('click',function(e){
//     console.log('Boxing is Clicked');

//     const target = e.target
//     // console.log(target)

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#tennis').addEventListener('click',function(e){
//     console.log('Tennis is Clicked');

//     const target = e.target
//     // console.log(target)

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#golf').addEventListener('click',function(e){
//     console.log('Golf is Clicked');

//     const target = e.target
//     // console.log(target)

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// So Easy Way-------

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked')

    const target = e.target

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

// New li create

const sports = document.querySelector('#sports')
const newSport = document.createElement('li')

newSport.innerText = 'rugby'
newSport.setAttribute('id','rugby')

sports.appendChild(newSport)