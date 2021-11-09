import './newUser.css'

export default function NewUser() {
    return (
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form action="" className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="John_Doe" />
          </div>
          <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="johndoe@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="text" placeholder="Password" />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+123-456-2345" />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="London | Uk" />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label For="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label For="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label For="other">Other</label>
            </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserbutton">Create</button>
        </form>
      </div>
    );
}
