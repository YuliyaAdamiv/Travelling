const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {
  _state: {
    profilePage: {
      posts: [
        {message: 'Hi, how are you?', like: '15'},
        {message: 'Hello', like: '20'},
        {message: 'Where do you live?', like: '11'},
        {message: 'Yo! Yo! Yo!', like: '150'},
      ],
      newPostText: 'Hello',
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
      channel: [
        {
          name: 'Relaxing',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0-2Vro_50sC5LwLG2cqqEFQOUGj11f9RaA&usqp=CAU',
        },
        {
          name: 'Travelling',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlDa7v2UlsDcBHBuzEzDwtQxrz3PA6DqeFw&usqp=CAU',
        },
        {
          name: 'Route',
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFWLzxfuVQtvQZfE9s8OYOqMCHjUxNJujyg&usqp=CAU',
        },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changes');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 7,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};
export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default store;
window.store = store;
