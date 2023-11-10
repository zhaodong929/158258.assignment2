window.addEventListener('DOMContentLoaded', (event) => {
    // �ϲ��� DOMContentLoaded �¼�����
    const posts = document.querySelectorAll('.forum-post');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const overlay = document.querySelector('.overlay');

    // ͼƬ����Ŵ���
    posts.forEach(post => {
        post.addEventListener('click', function () {
            const img = this.querySelector('img');
            fullscreenImg.src = img.src; // ���ô�ͼ��srcΪ�����ͼƬ��src
            fullscreenImg.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    // �رշŴ�ͼƬ
    overlay.addEventListener('click', function () {
        fullscreenImg.style.display = 'none';
        this.style.display = 'none';
    });

    fullscreenImg.addEventListener('click', function () {
        this.style.display = 'none';
        overlay.style.display = 'none';
    });
});
// ���ϴ���ť�����ʱ��ģ̬
document.getElementById('upload-btn').addEventListener('click', function () {
    document.getElementById('upload-modal').style.display = 'block';
});



