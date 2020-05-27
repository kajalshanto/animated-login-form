var input = document.querySelector('.pwd');
var show = document.querySelector('.show');

show.addEventListener('click', active);

function active() {
    if (input.type === 'password') {
        input.type = 'text';
        show.style.color = '#1DA1F2';
        show.innerHTML = '<i class="fas fa-eye"></i>';
    } else {
        input.type = 'password';
        show.innerHTML = '<i class="fas fa-eye-slash"></i>';
        show.style.color = '#111';
    }
}
