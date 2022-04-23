interface IUser {
  id: string;
  email: string;
  post: 'staff' | 'manager' | 'coordinator' | 'supervisor';
}

function redirect(user: IUser | IAdmin)
  if(user.post) {
    //redirect(user.post);
  }
  //redirect to the user area

}
