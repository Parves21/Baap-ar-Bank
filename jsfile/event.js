document.getElementById('your-button').addEventListener('click', function(){
    const yourEmail = document.getElementById('your-email');
    const email = yourEmail.value;
    const yourPassword = document.getElementById('your-password');
    const password = yourPassword.value;
    if(email === 'nurislam21@gmail.com' && password === 'parves21'){
        window.location.href= './another-index/newIndex.html';
        yourEmail.value = '';
        yourPassword.value = '';
    }
    else{
        alert('invalid user');
    }
});