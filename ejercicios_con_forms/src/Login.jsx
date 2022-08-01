function Login({form}){
    console.log(form)
    const USER = "arnau@gmail.com"
    const PASS = "12345"
    let {user, password} = form;
    return (
        <div>
            {user && password ? user.toLowerCase() === USER && password.toLowerCase() === PASS ? <p>Endavant</p> : <p>Stop</p> : <p></p>}
        </div>
    )

}

export default Login;