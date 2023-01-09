const storeBtn = document.getElementById('store-btn');
const rtrBtn = document.getElementById('retrieve-btn')


const userId = 'u123';


const user = {
    name: 'Max',
    age: 30, 
    hobbies: ['Sports', 'Cooking']
}





storeBtn.addEventListener('click', () => {
    localStorage.setItem('uid', userId);
    localStorage.setItem('user', JSON.stringify(user));
})








rtrBtn.addEventListener('click', () => {
  const extractedId =  localStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extractedUser);
  if(extractedId) {
      console.log('Got the id - ' + extractedId);
  } else {
      console.log('Could not get the Id');
  }
});
 