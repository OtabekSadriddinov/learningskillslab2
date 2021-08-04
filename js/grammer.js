let items = document.querySelectorAll('.collection');

items.forEach(item => {
  item.addEventListener('click', () => {
     items.forEach(item => item.classList.remove('active'))
      item.classList.add('active')
    
  })
})
const content_display = document.querySelector('.content_display');
const container_beginner = document.querySelector('.container_beginner');
const beginner = document.querySelector('.Item1');
beginner.addEventListener('click', () =>{
  content_display.style.display = "none";
  container_beginner.style.display = "flex"
});

