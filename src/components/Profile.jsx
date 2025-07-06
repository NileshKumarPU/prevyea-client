export default function Profile(props){
    return(

        <>
        <div>
        <p>Username: {props.username}</p>
        <p>Fullname:{props.fullname}</p>
        <p>Email:{props.email}</p>
        </div>
        </>
    )
}