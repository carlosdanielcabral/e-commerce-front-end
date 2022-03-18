export const getUser = (email, password) => {
  const users = localStorage.getItem('users');
  if (users) {
    const user = JSON.parse(users)
      .find(data => data.email === email && data.password === password);
    return user;
  }
  return false;
};

export const saveUser = (name, email, password) => {
  const hasUser = getUser(email, password);
  if (hasUser) return false;
  const hasUsers = localStorage.getItem('users');
  if (hasUsers) {
    const users = JSON.parse(hasUsers);
    users.push({ id: users.length, name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    const user = [{ id: 0, name, email, password }];
    localStorage.setItem('users', JSON.stringify(user));
  }
};
