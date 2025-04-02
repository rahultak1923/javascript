// सवाल: एक संख्याओं का ऐरे दिया गया है, filterAndSquareEvens नाम का एक फंक्शन लिखें जो विषम संख्याओं को हटा दे और फिर बची हुई सम संख्याओं का वर्ग करे।

// उदाहरण:

// इनपुट: [1, 2, 3, 4, 5, 6]
// आउटपुट: [4, 16, 36]


function even(number){
    return number
    .filter((num)=> num%2 === 0 )
    .map((evennum)=> evennum * evennum)
}

const arr=[1,2,3,4,5,6]
const result = even(arr)
console.log(result)



// q2 

function namestring(name){
    console.log("hello "+name)
    return name
}

 namestring("rahul")


//  q3

function sum(a,b){
    return a + b 
}
console.log(sum(4,5))

// q4

function ifeven(number){
    return number%2===0
    
}
console.log(ifeven(2));


// q5

function word(wordup){
    return wordup.length;
     
      
}
console.log(word("rahul"))
let word1 = prompt("enter your word")
console.log(word(word1))