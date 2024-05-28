type UserData = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<UserData>): UserData {
    const defaultUser: UserData = {
        name: '',
        surname: '',
        email: '',
        password: '',
    };

    return {...defaultUser, ...initialValues}
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});