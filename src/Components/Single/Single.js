import "./Single.css"

const Single = ({
    
    id,
    first_name,
    last_name,
    email,
    avatar,
}) => {
    return (
        <div className="details">
            <img src={ `${avatar}` } alt="profile_image"/>
            <b>Name = {first_name} {last_name}</b>
            <span>Email = {email}</span>
        </div>
    )

       
   
};

export default Single;
