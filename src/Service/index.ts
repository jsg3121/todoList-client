import http from 'axios';


const httpAddUser = async (userInfo: any) => {
  console.log(userInfo);
  console.log(userInfo.id);
  console.log(userInfo.password);
  let result = false;
  await http.post('/api/addUser', {
    id: userInfo.id,
    password: userInfo.password
  }).then(res => {
    if (res.data) {
      result = !result;
    }
  });

  return result;
};

export {
  httpAddUser
};
