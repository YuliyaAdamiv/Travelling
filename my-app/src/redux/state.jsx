let state = {
  profilePage: {
    posts: [
      {message: 'Hi, how are you?', like:'15'},
      {message: 'Hello', like:'20'},
      {message: 'Where do you live?', like:'11'},
      {message: 'Yo! Yo! Yo!', like:'150'}
  ],
},
  messagePage: {
    dialog: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Sasha'},
      {id: 5, name: 'Viktor'},
      {id: 6, name: 'Valera'},
    ],
    message: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Yo?'},
      {id: 4, message: 'Yo!'},
      {id: 5, message: 'Yo3'},
      {id: 6, message: 'Yo%'},
    ],
  },
  sidebarPage: {
    friend: [
      {id: 1, name: 'Sveta'},
      {id: 2, name: 'Viktor'},
      {id: 3, name: 'Sasha'},
    ],
  },
};
export default state;
