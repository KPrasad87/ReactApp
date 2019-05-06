axios.get(`https://reqres.in/api/users?page=2`)
    .then(res => {
    store.dispatch({type:"Decrement",data:res.data.data});
        
    })