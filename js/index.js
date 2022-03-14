let $go_page_input = document.getElementsByClassName('go-page-input')[0]
let $go_page_home = document.getElementsByClassName('go-page-home')[0]
let $page_input = document.getElementsByClassName('page-input')[0]
let $page_home = document.getElementsByClassName('page-home')[0]
setTimeout(() => {
    $go_page_input.style.display = 'block';
    $go_page_input.classList.add('animate__zoomInDown');
}, 80);
setTimeout(() => {
    document.documentElement.style.setProperty('--animate-duration', '0.6s');
}, 1200);
// 页面切换
$go_page_input.onclick = function () {
    $page_input.style.display = 'block';
    $page_input.classList.remove('animate__fadeOutRight');
    $page_input.classList.add('animate__fadeInRight');
    $page_input.style.zIndex = 999;
    $page_home.style.zIndex = 0;
    $page_home.classList.remove('animate__fadeInLeft');
    $page_home.classList.add('animate__fadeOutLeft');
};
$go_page_home.onclick = function () {
    $page_home.classList.remove('animate__fadeOutLeft');
    $page_home.classList.add('animate__fadeInLeft');
    $page_home.style.zIndex = 999;
    $page_input.style.zIndex = 0;
    $page_input.classList.remove('animate__fadeInRight');
    $page_input.classList.add('animate__fadeOutRight');
};

// 倒计时
function PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

function getRTime() {
    let EndTime = new Date('2022/4/1 10:00:00');
    let NowTime = new Date();
    let t = EndTime.getTime() - NowTime.getTime();
    let d = Math.floor(t / 1000 / 60 / 60 / 24);
    let h = PrefixInteger(Math.floor(t / 1000 / 60 / 60 % 24), 2);
    let m = PrefixInteger(Math.floor(t / 1000 / 60 % 60), 2);
    let s = PrefixInteger(Math.floor(t / 1000 % 60), 2);
    document.getElementById("t_d").innerHTML = d + "天";
    document.getElementById("t_h").innerHTML = h + "时";
    document.getElementById("t_m").innerHTML = m + "分";
    document.getElementById("t_s").innerHTML = s + "秒";
}
getRTime();
setInterval(getRTime, 1000);