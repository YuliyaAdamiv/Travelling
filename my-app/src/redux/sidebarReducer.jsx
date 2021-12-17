let initialState = {
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
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};
export default sidebarReducer;
