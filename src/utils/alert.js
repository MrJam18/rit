export function alert(message, type = 'primary')
{
    document.querySelector('#alert-container').querySelectorAll('div').forEach(function (el) {
        if(el.id === 'alert-' + type) {
            el.classList.remove('d-none');
        } else {
            el.classList.add('d-none');
        }
        el.innerText = message;
    });
}