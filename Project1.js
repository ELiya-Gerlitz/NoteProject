let taskArr=[]
window.onload = LoadReprint()

function LoadReprint(){

    let checkLocal= localStorage.getItem("Single Object")
    if(checkLocal){
       checkLocal= JSON.parse(checkLocal)
        for (let i=0; i<checkLocal.length; i++){
            taskArr.push(checkLocal[i])
        }
       console.log(taskArr)
       printNote()
    }
   
}

function addNewObj(){
let textareaBox=document.getElementById("textarea")
let textareaV=textareaBox.value 
let dateBox=document.getElementById("date")
let dateV=dateBox.value 
let timeBox=document.getElementById("time")
let timeV=timeBox.value 
let count=0
let index=count

if(textareaV&&dateV&&timeV){
    let objectSingleTask={
        noteTaskContent: textareaV,
        date: dateV,
        time: timeV,
        index: index
    }

    taskArr.push(objectSingleTask)

for(let objectSingleTask of taskArr){
    objectSingleTask.index=count
    count+=1
}

let stringObj=JSON.stringify(taskArr)
let storedObj=localStorage.setItem("Single Object", stringObj)       
       
localStorage.clear("Single Object")
let strAfterErasing=stringObj=JSON.stringify(taskArr)
localStorage.setItem( "Single Object", strAfterErasing)

textareaBox.value =''
dateBox.value=''
timeBox.value=''

printNote()
}
else{
    event.preventDefault
}
}


// function LoadReprint(){
// //local storage retrieve (get) 
//  //if local storage is full
//     let retrievedObj=localStorage.getItem("Single Object")
//     // console.log(localStorage.getItem[i].date)
//     if(localStorage.length>0){// if(!retrievedObj=="")זה לא היה קביל משום מה ???
//     let parsedObj=JSON.parse(retrievedObj)
//     parsedObj=[]
//     taskArr=parsedObj
//     let objectSingleTask
//     for (let i=0; i<taskArr.length;i++){
//        objectSingleTask= taskArr[i]
//     }
    // console.log(parsedObj)
    // taskArr.push(parsedObj)
    // let indexID=0
    // for (let obj of taskArr){
    //     indexID+=1
    // }
//     printNote()
// }
// }


function clearSpecificNote(counter){
    // let spObj=JSON.parse(localStorage.getItem("Single Object"[i])).removeItem()
    // let spObj=JSON.parse(localStorage.getItem("Single Object"))
    console.log(taskArr)
    taskArr.splice(counter,1)
    let stringified=JSON.stringify(taskArr)
    localStorage.setItem("Single Object", stringified)
    console.log(taskArr)
    // localStorage.removeItem("Single Object".i)
    // // let parsed =JSON.parse(spObj)
    // // for (let i=0; i<parsed.length; i++){
    // // }
//  clear the div property
// document.getElementById(counter).remove()????????
    // overwrite old arr & reload new array
    changePrintedCardCounterClearStorage()
 }

 function changePrintedCardCounterClearStorage(){
    taskArr=[]
    let checkLocal= localStorage.getItem("Single Object")
       checkLocal= JSON.parse(checkLocal)
        for (let i=0; i<checkLocal.length; i++){
            taskArr.push(checkLocal[i])
        }
       console.log(taskArr)
       printNote()
    }
   

function printNote(){
// print note
    let MainDIV=document.getElementById("WhereTheHell")
    let counter=0;
    let html="" 
        for(let object of taskArr){ 
            html+=`           
            <div class="noteWrapper" id="${object.index}" "name="wrapperDiv">
            <button class="XclearBtn " onclick="clearSpecificNote(${counter})" id="btnID${object.index}" name="Xbtn"><span class="glyphicon glyphicon-remove"></span></button>
            <img class="img" src="JB/note.png" width="200px"/>
            <span class="noteSpan" name="noteSpan">${object.noteTaskContent} </span>
            <span class="dateSpan" name="dateSpan">${object.date} </span>
            <span class="timeSpan" name="timeSpan">${object.time} </span>
            </div>`
            counter++
         }
        MainDIV.innerHTML= html 
     }






















// function addNewObj(){

// let textareaBox=document.getElementById("textarea")
// let textareaV=textareaBox.value 
// let dateBox=document.getElementById("date")
// let dateV=dateBox.value 
// let timeBox=document.getElementById("time")
// let timeV=timeBox.value 

// if(textareaV&&dateV&&timeV){
//      let objectSingleTask={
//         noteTaskContent: textareaV,
//         date: dateV,
//          time: timeV,
//         }


//     taskArr.push(objectSingleTask)
//     localStorage.clear("Single Object")
   
//     let stringObj=JSON.stringify(taskArr)
   
    
//    localStorage.setItem("Single Object", stringObj)
//     textareaBox.value =''
//     dateBox.value=''
//     timeBox.value=''


       
// }




// else{
//         console.log("some empty")
//     }
// }