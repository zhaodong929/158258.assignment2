window.addEventListener('DOMContentLoaded', (event) => {
    // 合并的 DOMContentLoaded 事件处理
    const posts = document.querySelectorAll('.forum-post');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const overlay = document.querySelector('.overlay');

    // 图片点击放大功能
    posts.forEach(post => {
        post.addEventListener('click', function () {
            const img = this.querySelector('img');
            fullscreenImg.src = img.src; // 设置大图的src为点击的图片的src
            fullscreenImg.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    // 关闭放大图片
    overlay.addEventListener('click', function () {
        fullscreenImg.style.display = 'none';
        this.style.display = 'none';
    });

    fullscreenImg.addEventListener('click', function () {
        this.style.display = 'none';
        overlay.style.display = 'none';
    });
});
// 当上传按钮被点击时打开模态
document.getElementById('upload-btn').addEventListener('click', function () {
    document.getElementById('upload-modal').style.display = 'block';
});



