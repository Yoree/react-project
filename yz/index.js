/**

extensions is an Array and each item has such format:

{firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}

lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".

**/

let  extensions = [
    {
        firstName:'12',
        lastName:'a',
        ext:'',
        extType:'DigitalUser'
    },
    {
        firstName:'1',
        lastName:'b',
        ext:'',
        extType:'VirtualUser'
    },
    {
        firstName:'33',
        lastName:'c',
        ext:'',
        extType:'FaxUser'
    },
    {
        firstName:'44',
        lastName:'a',
        ext:'',
        extType:'Dept'
    },
    {
        firstName:'11',
        lastName:'a',
        ext:'',
        extType:'AO'
    }
]

/**

Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC

**/

function sortFun(){
    return function(a,b){
        
    }
}

function sortExtensionsByName(extensions) {
    let newArr = extensions.map((item,index)=> item.firstName+item.lastName+item.ext).sort((a,b)=>a-b)

    return newArr
}

sortExtensionsByName(extensions);


/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VitrualUser < FaxUser < AO < Dept.
**/
function sortExtensionsByExtType(extensions) {
    let newArr = extensions.map((item,index)=> item.extType).sort((a,b)=>a-b)
    return newArr;
    
}

sortExtensionsByExtType(extensions)