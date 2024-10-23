//synchronous nature of js

//task 1 =>2s;
//task 2 =>4s;
//task 3 =>5s;

//time taken will be -->11s;



console.log('Task 1');       //sync
console.log('Task 2');       //sync
setTimeout(()=>{console.log('Task 3')},0);      //async
console.log('Task 4');   //sync
console.log('Task 5');      //sync



//Asynchronous is running all the tasks in one shot.
//time taken max to max 5-6s;


//Event loop is the communication between main stack and side stack . basically sync tasks area and async tasks area.

//Callback --> called automatically
//    fetch some data (data){
//          we got data in 3satisfies.
//         }.then()


//Promises

const demoPromise = new Promise((res,rej)=>{    //res-->completed rej-->rejected
    rej('task completed');
})
demoPromise.then((d)=>{      //task to do if promise is completed.
    console.log('not');
}).catch((d)=>{          //catching the value of res/rej.
    console.log(d);
})

//Fetch  ---> async code
//fetch is used to fetch the data from the API

// fetch('api key').then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// })

// async await

// async fn abcd (){
//     let data = await fetch('api key');
//     let q = await data.json();
//     console.log(q);

// }

// async function fetchQuotes(){
//     let data =await  fetch('https://api.api-ninjas.com/v1/quotes');
//     let quotes = await data.json();
//     let random = Math.floor(Math.random()*quotes.length);
//     let quote = quotes[random];
//     document.getElementById('quote').innerText = quote.text;
//     document.getElementById('author').innerText = quote.author;
// }
// fetchQuotes()