export default function Profile(props){
    return(

        <>
        <div className="rounded-lg shadow-lg p-4 max-w-md m-auto bg-white">
        <p>Username : {props.username}</p>
        <p>Full name : {props.fullname}</p>
        <p>Email    : {props.email}</p>
        </div>
        </>
    )
}