modal = document.getElementById('modal');
img = document.getElementById('modal-image');
text = document.getElementById('modal-text');
images = document.querySelectorAll('.popup');
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    img.src = this.src;
    text.innerHTML=this.alt
    modal.classList.remove('hidden');
  }
}

modal.onclick = function() {
  modal.classList.add('hidden');
}