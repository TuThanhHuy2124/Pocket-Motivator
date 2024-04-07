import EmailInput from "./EmailInput"

function InfoInput () {
    return (
        <>
            <label htmlFor="first_name">First Name: </label>
            <input name="first_name" id="first_name"></input><br/>
            <label htmlFor="last_name">Last Name: </label>
            <input name="last_name" id="last_name"></input><br/>
            <EmailInput/>
        </>
    )
}

export default InfoInput