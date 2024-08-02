

document.addEventListener('DOMContentLoaded', function () {
    const titles = document.querySelectorAll('.titre');
    
    titles.forEach(title => {
     title.addEventListener('click', function () {
         const description = this.nextElementSibling;
 
         if (description.style.display === 'block') {
             description.style.display = 'none';
         } else {
             description.style.display = 'block';
         }
     });
    });
 });