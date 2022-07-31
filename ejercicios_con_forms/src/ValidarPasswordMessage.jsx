function ValidarPasswordMessage({nom, pass1, pass2}){
    let message = "";
    if(nom.length>3 && pass1 === pass2 && pass1.length>0 && pass2.length>0){
        message="Correcte"
    }
    return (
        <p>{message}</p>
    )

}

export default ValidarPasswordMessage;