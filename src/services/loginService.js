
const weblink = process.env["REACT_APP_WEB_LINk"];
const url= process.env["REACT_APP_API_URL"] + "/api/users/login";

const makeLogin = async ({email, password}) => {
    const creds = {username:email, password:password};
    const opts = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body: JSON.stringify(creds)
    }
    
     const resp = await fetch(url, opts)
         .then(e => e.json());

    return resp;
}

const isAdminLoged = ()=>{
    let userToken = window.localStorage.getItem("logedAdmin")

    return userToken !== null;
}



export default {makeLogin, isAdminLoged}