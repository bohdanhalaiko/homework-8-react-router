localStorage.setItem('dataUsers', JSON.stringify({}));
export default function dataUsers(user, prop) {
  const dataUsers = JSON.parse(localStorage.getItem('dataUsers'));
  if (prop === 'set') dataUsers[user.email] = user;
  if (prop === 'get') return dataUsers[user.email];
  if (prop === 'check' && !dataUsers[user.email]) dataUsers[user.email] = { email: user.email };
  localStorage.setItem('dataUsers', JSON.stringify(dataUsers));
  console.log(localStorage);
  return dataUsers[user.email];
};