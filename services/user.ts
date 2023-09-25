import UserModel from '../models/user';

// Tạo một đối tượng User
const newUser = new UserModel({
  username: 'john_doe',
  email: 'john@example.com',
  age: 30,
});


const addUser = () =>{
    return  newUser.save().then(e => console.log('user.save')).catch(e => console.log('error',e))
}

export {
    addUser
}
// Lưu đối tượng vào cơ sở dữ liệu
