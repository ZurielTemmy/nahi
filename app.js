let preveiwContainer = document.querySelector('.photo-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.photo-gallery .photo').forEach(photo =>{
  photo.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = photo.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});