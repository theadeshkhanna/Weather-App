var somePromise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve('bad Code');
        reject('Promise is Fulfilled');
    },2500);
});

somePromise.then((Msg) => {
    console.log(`Success: ${Msg}`);
}, (error) => {
    console.log(`${error}`);
})