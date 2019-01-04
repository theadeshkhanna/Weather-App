var getUser = (id, callbacks) => {
    var user = {
        id: id,
        name: 'Vikram'
    }

    setTimeout(() => {
        callbacks(user);
    },3000);
};






getUser(31, (userObject) => {
    console.log(userObject);
});