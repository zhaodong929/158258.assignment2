//document.getElementById('loginForm').addEventListener('submit', function(event) {
//    event.preventDefault();
    
//    var username = document.getElementById('username').value;
//    var password = document.getElementById('password').value;
//    var captcha = document.getElementById('captcha').value;
    
//    // 这里可以添加验证或发送数据到服务器的代码
//    alert('用户名: ' + username + '\n密码: ' + password + '\n验证码: ' + captcha);
//});
document.getElementById('showRegisterForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLoginForm').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

