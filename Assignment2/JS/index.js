//实现模糊查询==============
let keywords = document.querySelector('.keywords');//获取输入框
let searchHelper = document.querySelector('.search-helper');//获取搜索的下拉框

//定义数组，存储搜索的内容
let searchArr = ['Asia', 'America', 'China', 'Canada', 'Japan', 'Franch', 'English', 'German'];

//给输入框绑定内容改变事件
keywords.oninput = function(){
    searchHelper.innerHTML = '';
    for(let i = 0; i < searchArr.length; i++){
        if(searchArr[i].indexOf(keywords.value)!=-1){
            searchHelper.innerHTML += '<p>'+searchArr[i]+'</p>'
            searchHelper.style.display = 'block';
        }
    }
}

keywords.onblur = function(){
    searchHelper.style.display = 'none';


}
//实现轮播图的轮换============================
let img = document.querySelector('.img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let imgArr = ['/images/background1.png', '/images/background2.png', '/images/background3.png', '/images/background4.png', '/images/background5.png','/images/background6.png'];
let count = 0;
let lis = document.querySelectorAll('.banner-btn li')
//定义函数，实现轮播器的切换
function cutimg(){
    img.src = imgArr[count];
    for(let i = 0; i < lis.length; i++){
        lis[i].className = '';

    }
    lis[count].className = 'active';

}
//定时器自动切换，实现轮播功能
let timer = setInterval(function(){
    count++;
    
    if(count > imgArr.length-1){
        count = 0;
    }
    cutimg();

},2000)
//点击下一张切换
next.onclick = function(){
    count++;
    if(count > imgArr.length-1){
        count = 0;
    }
    cutimg();

}
//点击上一张切换
prev.onclick = function(){
    count--;
    if(count < 0){
        count = imgArr.length-1;
    }
    cutimg();

}
//鼠标划入图片，则定时器功能取消
slide.onmouseover = function(){
    clearInterval(timer);

}
//鼠标划出图片，则定时器功能重新开始
slide.onmouseout = function(){
    timer = setInterval(function(){
        count++;
        
        if(count > imgArr.length-1){
            count = 0;
        }
        cutimg();
    
    },2000)
}
//给li绑定事件
for(let i = 0; i < lis.length; i++){
    lis[i].onclick = () =>{
        count = i;
        cutimg();

    };

}

// Assuming your slides are all the same width and there's an element with class 'current-slide'
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const slideWidth = slides[0].getBoundingClientRect().width;

document.querySelectorAll('.carousel-slide').forEach(slide => {
    // 创建爱心图标元素
    const heartIcon = document.createElement('div');
    heartIcon.classList.add('heart-icon');
    heartIcon.innerHTML = '❤'; // 可以使用实体字符或图标字体
    heartIcon.onclick = function () {
        this.classList.toggle('active'); // 切换激活状态
    };
    slide.appendChild(heartIcon);

    // 创建评分点元素
    const ratingDots = document.createElement('div');
    ratingDots.classList.add('rating-dots');
    for (let i = 0; i < 5; i++) { // 假设满分为5点
        const dot = document.createElement('span');
        dot.classList.add('dot');
        // 假设每个评分点都是激活的，你可以根据实际评分来设置
        dot.classList.add('active');
        ratingDots.appendChild(dot);
    }
    slide.appendChild(ratingDots);
});



// Arrange the slides next to one another
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

let currentIndex = 0; // Initialize current index

// Function to move slides with loop back logic
const moveToSlide = (track, currentIndex) => {
    // If we have gone past the last slide, loop back to the start
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    // If we have gone before the first slide, loop to the end
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    const newLeft = slideWidth * currentIndex * -1;
    track.style.transform = `translateX(${newLeft}px)`;
};

// Function to update button visibility - no longer necessary if we loop
// You can remove updateButtonVisibility function and calls to it if you want to loop infinitely

// Event listeners for buttons with loop back logic
prevButton.addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Loop to the last slide
    }
    moveToSlide(track, currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Loop back to the first slide
    }
    moveToSlide(track, currentIndex);
});

// Move to the first slide initially
moveToSlide(track, currentIndex);


function initDestinationCarousel() {
    const track = document.querySelector('.destination-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.destination-button-right');
    const prevButton = document.querySelector('.destination-button-left');
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    let currentIndex = 0;

    const moveToSlide = (track, currentIndex) => {
        const newLeft = slideWidth * currentIndex * -1;
        track.style.transform = `translateX(${newLeft}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        moveToSlide(track, currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex += 1;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        moveToSlide(track, currentIndex);
    });

    // Move to the first slide initially
    moveToSlide(track, currentIndex);
}

document.addEventListener('DOMContentLoaded', initDestinationCarousel);



function redirectToUrl(url) {
    window.location.href = url; // 将页面重定向到指定的URL
}

// 当鼠标悬停在卡片上时，放大卡片
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)'; // 放大卡片
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)'; // 恢复原始大小
    });
});











//实现楼层的定位切换======================
let header = document.querySelector('.header');
let banner = document.querySelector('.banner');
let elevator = document.querySelector('.elevator');

//实现楼层滚动文字变色的效果
let items = document.querySelectorAll('.content.item');
let elevatorA = document.querySelectorAll('.elevator a');

let elevatorArr = [];
//基础高度
let base = header.offsetHeight + banner.offsetHeight;
for(let i = 0; i < items.length; i++){
    base = base + items[i].offsetHeight;
    elevatorArr.push(base);
}

function clearcolor(){
    elevatorA.forEach(a => {
        a.style.color = ""; 
    });
}
let search = document.querySelector('.search');
let searchM = document.querySelector('.search-m');
let form = document.querySelector('.form');
let searchLogo = document.querySelector('.search-logo');
document.onscroll = function(){
    //获取滚动条垂直方向滚动了多少
    let top = document.documentElement.scrollTop||document.body.scrollTop;
    //获取header的高度
    let headerHeight = header.offsetHeight; // including height,padding,border
    //获取banner的高度
    let bannerHeight = banner.offsetHeight;
    //当滚动条滚动到一定高度，将楼层定位改成固定地位
    if(top >= headerHeight+bannerHeight){
        elevator.className = "elevator elevator-fix";
        search.className = "search search-fix"
        searchM.style.height = '50px';
        form.style.top = '10px';
        searchLogo.style.display = 'block';

    }else{
        elevator.className = "elevator";
        search.className = "search"
        searchM.style.height = '60px';
        form.style.top = '40px';
        searchLogo.style.display = 'none';
    }



    if(top < header.offsetHeight + banner.offsetHeight){
        clearcolor();
    }else if(top >= header.offsetHeight + banner.offsetHeight && top < elevatorArr[0]){
        clearcolor();
        elevatorA[0].style.color = 'red';
    }else if (top >= elevatorArr[0] && top < elevatorArr[1]){
        clearcolor();
        elevatorA[1].style.color = 'red';
    }else if (top >= elevatorArr[1] && top < elevatorArr[2]){
        clearcolor();
        elevatorA[2].style.color = 'red';
    }else if(top >= elevatorArr[2]){
        clearcolor();
        elevatorA[3].style.color = 'red';

    }


}


// 获取相关元素
const imageContainer = document.getElementById('imageContainer');
const imageSlider = document.getElementById('imageSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let imageIndex = 0; // 当前显示的图片索引

// 点击“下一张”按钮
nextBtn.addEventListener('click', function () {
    imageIndex++;
    if (imageIndex >= imageSlider.children.length) {
        imageIndex = 0;
    }
    updateSliderPosition();
});

// 点击“上一张”按钮
prevBtn.addEventListener('click', function () {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = imageSlider.children.length - 1;
    }
    updateSliderPosition();
});

// 更新滚动位置
function updateSliderPosition() {
    const imageWidth = imageContainer.offsetWidth;
    const newPosition = -imageIndex * imageWidth;
    imageSlider.style.transform = `translateX(${newPosition}px)`;
}

// 自动滚动图片
const autoScroll = setInterval(function () {
    imageIndex++;
    if (imageIndex >= imageSlider.children.length) {
        imageIndex = 0;
    }
    updateSliderPosition();
}, 800); // 3秒滚动一次，可以根据需要调整

// 停止自动滚动
imageContainer.addEventListener('mouseenter', function () {
    clearInterval(autoScroll);
});

// 恢复自动滚动
imageContainer.addEventListener('mouseleave', function () {
    autoScroll = setInterval(function () {
        imageIndex++;
        if (imageIndex >= imageSlider.children.length) {
            imageIndex = 0;
        }
        updateSliderPosition();
    }, 3000);
});

