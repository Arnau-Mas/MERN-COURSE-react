function Login({user, pass}){
    const USER = "arnau"
    const PASS = "12345"
    return (
        <div>
            {user && pass ? user.toLowerCase() === USER && pass.toString().toLowerCase() === PASS ? <p>Endavant</p> : <p>Stop</p> : <p></p>}
        </div>
    )

}

export default Login;