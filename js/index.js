const correctCondition = true;
const condition1 = false;
const condition2 = true;
const pr = new Promise((resolve, reject)=>{
    if(correctCondition){
        resolve({message:'correct condition is resolved'});
    }else if(condition1){
        reject({message: `only condition 1 is true`})
    }else{
        reject({message: `none of the conditions is true`})
    }
});
pr.then(data=>console.log(data.message),error=>console.log(error.message));//.catch(error=>console.log(error.message))

const promise1 = new Promise((resolve, reject)=>{
    //resolve('in promise 1')
    //reject('rejected in promise 1')
});

const promise2 = new Promise((resolve, reject)=>{
    resolve('in promise 2')
    //reject('rejected in promise 2')
});

const promise3 = new Promise((resolve, reject)=>{
    resolve('in promise 3')
});

Promise.race([promise1, promise2, promise3]).then(data=>console.log(data)).catch(error=>console.log(error));
