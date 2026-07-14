const Profile = ({data, setData}) => {

    const {name, age, email } = data;
    const handelDataChange = (e,item) =>{
        setData(prevState => ({
            ...prevState, 
            [item]: e.target.value,
        }));
    };

  return (
    <div>
        <div>
            <label>Name : </label>
            <input type="text" value={name} onChange={(e)=> handelDataChange(e, "name")}/>
        </div>
        <div>
            <label>Age : </label>
            <input type="text" value={age} onChange={(e)=> handelDataChange(e, "age")}/>
        </div>
        <div>
            <label>Email : </label>
            <input type="text" value={email} onChange={(e)=> handelDataChange(e, "email")}/>
        </div>
    </div>
  )
};

export default Profile;
