
let countBtn = document.querySelector(".count")

let resetBtn = document.querySelector(".reset") 

let inputStr = document.querySelector(".paragraph-input")

let results = document.querySelector(".results")


resetBtn.addEventListener(
    "click" , ()=>{
        window.location.reload()
    }
)

//vowel count 

function vowelCounter(baseStr){

    count  = 0 

    for(let i = 0 ; i < baseStr.length ; i++){

        if(baseStr[i] === "a" || baseStr[i] === "A"||
        baseStr[i] === "e"|| baseStr[i] === "E"||
        baseStr[i] === "o"|| baseStr[i] === "O"||
        baseStr[i] === "i" || baseStr[i] === "I"||
        baseStr[i] === "u" || baseStr[i] === "U"){
            count +=1 
        }
    }
    return count 
}


//vowel count 




// sentence count 

function sentenceCountFinder(baseStr){
    let count = 0
    for(let i = 0 ; i < baseStr.length ; i++){
       
        if(baseStr[i] === "." || baseStr[i] === "!" || baseStr[i] ==="?"){
            count +=1 
        }

    }
    return count 
}

//sentence count 



//wordcount

function wordCountFinder(baseStr){

    let arr = baseStr.split(" ")
    
    let count = 0 
    
    arr.forEach(element => {
       if(element !== " "){

        count +=1;

       } 
    });

    arr.forEach(
        e =>{
            if(e === "," || e=== ":" || e===";" || e==="!" || e==="." ||e==="?"){
                count -=1
            }
        }
    )
    return count
}

//wordcount 



countBtn.addEventListener(
    "click" , ()=>{
        // for counting words 
        let inputValue = inputStr.textContent

        let wordCountResult = document.createElement("h2")

        let sentenceCountResult = document.createElement("h2")

        let vowelCounterResult = document.createElement("h2")

        wordCountResult.classList.add("word-count-result")

        sentenceCountResult.classList.add("sentence-count-result")

        vowelCounterResult.classList.add("vowel-counter-result")

        wordCountResult.textContent = `Word count: ${wordCountFinder(inputValue)}`

        sentenceCountResult.textContent = `Sentence count: ${sentenceCountFinder(inputValue)}`

        vowelCounterResult.textContent = `Vowel count: ${vowelCounter(inputValue)}`


        results.appendChild(wordCountResult)

        results.appendChild(sentenceCountResult)

        results.appendChild(vowelCounterResult)

        inputStr.textContent = ""
        //for counting words
        
    }
)