import bcrypt from 'bcryptjs';
const users = {};
var token=""

const checkPassword = () =>{bcrypt.compare(password, hash, function(err, result) {
    if (result) {
       // password is valid
       return result
   }
});
}

export const Register = (username, password) => {
  // TODO: implement logic to create a user object with hashed password
  // add it to "the users" if not already a user with the identifier
  // return the user object { username, password }
  if (users.hasOwnProperty(username)) {
    return 'username already exists';
  } else {
    users[username] = { username, password: bcrypt.hashSync(password, 8) };
    return users[username];
  }
};
export const Login = (username, password) => {
  // TODO: if user with these credentials exist, return a token
  // otherwise return an error ("could not login")

    if (username.hasOwnProperty(username) && password.hasOwnProperty( checkPassword(password))  ) {
        token = 'this is a token';
        return token
    }else {
        token = 'could not login';
        return  token
    }
};

export const Delete = (username) => {
  // TODO: delete a user from "the users", return ok
};

export default {
  Delete,
  Login,
  Register,
};
