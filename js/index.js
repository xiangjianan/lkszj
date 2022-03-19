let disclaimer = `<div class="confirms container"><div class="col-md-8 offset-md-2"><p class="confirm-title">活动信息</p><div class="confirm-text"><p>2020年至今人们的生活发生了很多改变，但不变的是仍有许多人在创造着美好的事物，如果你愿意与大家分享你的作品，欢迎大力投稿参与这次活动:D</p><p>详情请见 - <a class="bilibili-video" href="https://www.bilibili.com/video/BVXXXXXXXXX/" target="_blank">BVXXXXXXXXX</a></p><p class="little-title">【基本规则】</p><p>1. 可以投稿任何类型的作品，音乐、绘画、摄影、文字、有实体的手工/雕塑/模型、甚至某个天马行空的想法等等。</p><p>2. 作品需要上传到网盘或视频平台(实物作品可以拍照/拍视频后上传)。</p><p>3. 这件作品需要由你本人独立/主要完成，不能为别人代投。</p><p>4. 这件作品的完成时间需要在2020年以后。</p><p>5. 这件作品不能存在版权/知识产权/著作权/原创性等方面的争议。</p><p>6. 公司/企业性质的投稿可能无法参与评奖，已经在其他大赛得过大奖的作品可能无法参与评奖。</p><p>7. 请准确填写投稿信息，以便获奖后我可以联系到你。</p><p class="little-title">【活动信息】</p><p>1. 征集从2022年3月21日开始持续到2022年4月11日，此后投稿功能会被关闭。</p><p>2. 征集将选出金奖、银奖和铜奖以及10个优秀提名，奖品分别是：</p><p>&nbsp;&nbsp;&nbsp;&nbsp;金奖 - 人民币5000元+海蓝宝石 & 人民币5000元+徕芬高速吹风机×5</p><p><img class="gift-img" src="img/blue-gift.jpeg" alt="blue-gift"><img style="margin-left:50px;" src="img/5.png" alt="wind"></p><p>&nbsp;&nbsp;&nbsp;&nbsp;银奖 - 人民币3000元+连晶黄铁矿 & 人民币3000元+徕芬高速吹风机×3</p><p><img class="gift-img" src="img/gold-gift.jpeg" alt="gold-gift"><img style="margin-left:65px;" src="img/3.png" alt="wind"></p><p>&nbsp;&nbsp;&nbsp;&nbsp;铜奖 - 人民币2000元+荧光方解石 & 人民币2000元+徕芬高速吹风机×2</p><p><img class="gift-img" src="img/white-gift.jpeg" alt="white-gift"><img style="margin-left:78px;" src="img/2.png" alt="wind"></p><p>&nbsp;&nbsp;&nbsp;&nbsp;优秀提名 - 人民币100元 & 人民币500元+徕芬高速吹风</p><p><img id="wind-1" style="margin-left:293px;" src="img/1.png" alt="wind"></p><p>*特别鸣谢：部份奖金和奖品由【laifen 徕芬】赞助</p><p style="text-align: center;"><img class="logo2" src="img/logo2.png" alt="logo2"></p><p class="little-title">【免责声明】</p><p>投稿作品即表示你已经阅读并同意以下说明：</p><p>1. 你清楚并同意上传的作品可能会被公开分享。</p><p>2. 全程遵守国家法律与政策，请勿上传各类违规/敏感内容，即使上传也会被人工筛选和删除。</p><p>3. 避免上传非原创、未经创作者本人许可、存在大量参考借鉴的内容，对作品的原创性负责。</p><p>4. 如活动期间遇到不可抗力或其他意外因素，征集可能会被迫中止。</p></div><div class="row"><div class="col-md-6"><span class="btn not col-md-12">再想想</span></div><div class="col-md-6"><span class="btn sure col-md-12">确认同意</span></div></div></div></div>`;

// 获取弹窗元素
let notice_modal = document.getElementsByClassName("notice-modal")[0];
let notice_msg = document.getElementById('notice-msg');
let alert_modal = document.getElementsByClassName("alert-modal")[0];
let alert_title = document.getElementById('alert-title');
// 弹窗事件
function noticeModal(msg, time) {
    notice_msg.innerHTML = msg;
    notice_modal.style.display = 'block';
    notice_modal.classList.remove('animate__fadeOutDown');
    notice_modal.classList.add('animate__fadeInDown');
    document.getElementsByClassName('center-notice-modal')[0].style.zIndex = 2000;
    setTimeout(() => {
        notice_modal.classList.remove('animate__fadeInDown');
        notice_modal.classList.add('animate__fadeOutDown');
        setTimeout(() => {
            document.getElementsByClassName('center-notice-modal')[0].style.zIndex = -1;
        }, 300);
    }, time);
}
function alertModal(msg) {
    let author = document.getElementById('author').value;
    let opus = document.getElementById('opus').value;
    let tel = document.getElementById('tel').value;
    let link = document.getElementById('link').value;
    let about = document.getElementById('about').value;
    alert_title.innerHTML = msg;
    alert_modal.style.display = 'block';
    document.getElementsByClassName('alert-author')[0].innerHTML = author;
    document.getElementsByClassName('alert-opus')[0].innerHTML = opus;
    document.getElementsByClassName('alert-tel')[0].innerHTML = tel;
    document.getElementsByClassName('alert-link')[0].innerHTML = link;
    document.getElementsByClassName('alert-about')[0].innerHTML = about.replace(/\n/g, '<br>');
    alert_modal.classList.remove('animate__fadeOutDown');
    alert_modal.classList.add('animate__fadeInDown');
    document.getElementsByClassName('center-alert-modal')[0].style.zIndex = 2000;
    document.getElementsByClassName('alert-no')[0].onclick = function () {
        alert_modal.classList.remove('animate__fadeInDown');
        alert_modal.classList.add('animate__fadeOutDown');
        setTimeout(() => {
            document.getElementsByClassName('center-alert-modal')[0].style.zIndex = -1;
        }, 300);
    }
    document.getElementsByClassName('alert-yes')[0].onclick = function () {
        document.getElementById('send').disabled = true;
        let request = new XMLHttpRequest();
        request.open('POST', "https://api.lks.helloxjn.com/share/v1", true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify({
            "author": author,
            "opus": opus,
            "tel": tel,
            "link": link,
            "about": about,
        }));
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.responseText) {
                    let res = JSON.parse(request.responseText);
                    if (res.code == 1000) {
                        document.getElementById('author').value = '';
                        document.getElementById('opus').value = '';
                        document.getElementById('tel').value = '';
                        document.getElementById('link').value = '';
                        document.getElementById('about').value = '';
                        localStorage.setItem('is_sign_up', 1);
                        document.getElementsByClassName('go-page-home')[0].onclick();
                        noticeModal('已发送：感谢投稿 (゜-゜)つロ', 3000);
                    } else if (res.code == 429) {
                        noticeModal('发送失败：您已超出投稿次数限制 (｡･ω･｡)ﾉ', 3000);
                    } else {
                        noticeModal('发送失败：服务器在摸鱼！', 3000);
                    }
                } else {
                    noticeModal('发送失败：您已超出投稿次数限制 (｡･ω･｡)ﾉ', 3000);
                }
                document.getElementById('send').disabled = false;
            }
        }
        alert_modal.classList.remove('animate__fadeInDown');
        alert_modal.classList.add('animate__fadeOutDown');
        setTimeout(() => {
            document.getElementsByClassName('center-alert-modal')[0].style.zIndex = -1;
        }, 300);
    }
}

// 页面切换
let $go_page_home = document.getElementsByClassName('go-page-home')[0];
let $page_input = document.getElementsByClassName('page-input')[0];
let $page_home = document.getElementsByClassName('page-home')[0];
$go_page_input.onclick = function () {
    if (localStorage.getItem('is_over')) {
        noticeModal('活动已结束', 1200);
    } else if (!localStorage.getItem('is_sign_up')) {
        confirm(disclaimer);
    } else {
        noticeModal('您已报名成功', 1200);
    }
};
$go_page_home.onclick = function () {
    $page_home.classList.remove('animate__fadeOutLeft');
    $page_home.classList.add('animate__fadeInLeft');
    $page_home.style.zIndex = 999;
    $page_input.style.zIndex = 0;
    setTimeout(() => {
        $page_input.style.display = 'none';
    }, 1000);
    $page_input.classList.remove('animate__fadeInRight');
    $page_input.classList.add('animate__fadeOutRight');
};

/*页面弹出的提示信息*/
function confirm(msg, okCallback, cancleCallback) {
    if (document.getElementById('confirm')) return false;
    let div = document.createElement('div');
    div.id = 'confirm';
    div.innerHTML = msg;
    document.body.appendChild(div);
    let $confirm = document.getElementById('confirm');
    $confirm.classList.add('animate__animated');
    $confirm.classList.add('animate__fadeInRight');
    $confirm.classList.remove('animate__fadeOutRight');
    $confirm.classList.remove('animate__fadeOutLeft');
    document.getElementById('confirm').style.zIndex = 2000;
    document.getElementsByClassName('sure')[0].onclick = function (e) {
        setTimeout(() => {
            document.getElementById('confirm') && document.body.removeChild(document.getElementById('confirm'));
        }, 300);
        $confirm.classList.remove('animate__fadeInRight');
        $confirm.classList.add('animate__fadeOutLeft');
        $page_input.style.display = 'block';
        $page_input.classList.remove('animate__fadeOutRight');
        $page_input.classList.add('animate__fadeInRight');
        $page_input.style.zIndex = 999;
        $page_home.style.zIndex = 0;
        $page_home.classList.remove('animate__fadeInLeft');
        $page_home.classList.add('animate__fadeOutLeft');
        document.getElementById('confirm').style.zIndex = 0;
        e.stopPropagation();
    };
    document.getElementsByClassName('not')[0].onclick = function (e) {
        setTimeout(() => {
            document.getElementById('confirm') && document.body.removeChild(document.getElementById('confirm'));
        }, 300);
        $confirm.classList.remove('animate__fadeInRight');
        $confirm.classList.add('animate__fadeOutRight');
        document.getElementById('confirm').style.zIndex = 0;
        e.stopPropagation();
    };
}
function confirm_disclaimer(msg, okCallback, cancleCallback) {
    if (document.getElementById('confirm')) return false;
    let div = document.createElement('div');
    div.id = 'confirm';
    div.innerHTML = msg;
    document.body.appendChild(div);
    let $confirm = document.getElementById('confirm');
    $confirm.classList.add('animate__animated');
    $confirm.classList.add('animate__fadeIn');
    $confirm.classList.remove('animate__fadeOut');
    document.getElementById('confirm').style.zIndex = 2000;
    document.getElementsByClassName('close-disclaimer')[0].onclick = function (e) {
        setTimeout(() => {
            document.getElementById('confirm') && document.body.removeChild(document.getElementById('confirm'));
        }, 800);
        $confirm.classList.remove('animate__fadeIn');
        $confirm.classList.add('animate__fadeOut');
        document.getElementById('confirm').style.zIndex = 0;
        e.stopPropagation();
    };
}
// 投稿
let send = document.getElementById('send');
send.onclick = function (e) {
    let author = document.getElementById('author').value;
    let opus = document.getElementById('opus').value;
    let tel = document.getElementById('tel').value;
    let link = document.getElementById('link').value;
    let about = document.getElementById('about').value;
    if (!author || !opus || !tel || !link || !about) {
        if (notice_modal.classList.contains('animate__fadeOutDown')) {
            noticeModal('请完整填写作品信息', 1200);
        }
    } else if (author.length > 128) {
        noticeModal('作品名过长，已超出128个字符的限制', 1200);
    } else if (opus.length > 128) {
        noticeModal('作品名过长，已超出128个字符的限制', 1200);
    } else if (tel.length > 128) {
        noticeModal('联系方式过长，已超出128个字符的限制', 1200);
    } else if (link.length > 256) {
        noticeModal('作品链接过长，已超出256个字符的限制', 1200);
    } else if (about.length > 1024) {
        noticeModal('作品说明过长，已超出1024个字符的限制', 1200);
    } else if (!notice_modal.classList.contains('animate__fadeInDown')) {
        alertModal('是否确认发送');
    }
    e.stopPropagation();
};

// 免责声明
let disclaimer_footer = `<div class="confirms container"><div class="col-md-8 offset-md-2"><p class="confirm-title">活动信息</p><div class="confirm-text confirm-disclaimer-text"><p>2020年至今人们的生活发生了很多改变，但不变的是仍有许多人在创造着美好的事物，如果你愿意与大家分享你的作品，欢迎大力投稿参与这次活动:D</p><p>详情请见 - <a class="bilibili-video" href="https://www.bilibili.com/video/BVXXXXXXXXX/" target="_blank">BVXXXXXXXXX</a></p><p class="little-title">【基本规则】</p><p>1. 可以投稿任何类型的作品，音乐、绘画、摄影、文字、有实体的手工/雕塑/模型、甚至某个天马行空的想法等等。</p><p>2. 作品需要上传到网盘或视频平台(实物作品可以拍照/拍视频后上传)。</p><p>3. 这件作品需要由你本人独立/主要完成，不能为别人代投。</p><p>4. 这件作品的完成时间需要在2020年以后。</p><p>5. 这件作品不能存在版权/知识产权/著作权/原创性等方面的争议。</p><p>6. 公司/企业性质的投稿可能无法参与评奖，已经在其他大赛得过大奖的作品可能无法参与评奖。</p><p>7. 请准确填写投稿信息，以便获奖后我可以联系到你。</p><p class="little-title">【活动信息】</p><p>1. 征集从2022年3月21日开始持续到2022年4月11日，此后投稿功能会被关闭。</p><p>2. 征集将选出金奖、银奖和铜奖以及10个优秀提名，奖品分别是：</p><p>&nbsp;&nbsp;&nbsp;&nbsp;金奖 - 人民币5000元+海蓝宝石 & 人民币5000元+徕芬高速吹风机×5</p><p><img class="gift-img" src="img/blue-gift.jpeg" alt="blue-gift"><img style="margin-left:50px;" src="img/5.png" alt="wind"></p><p>&nbsp;&nbsp;&nbsp;&nbsp;银奖 - 人民币3000元+连晶黄铁矿 & 人民币3000元+徕芬高速吹风机×3</p><p><img class="gift-img" src="img/gold-gift.jpeg" alt="gold-gift"><img style="margin-left:65px;" src="img/3.png" alt="wind"></p><p>&nbsp;&nbsp;&nbsp;&nbsp;铜奖 - 人民币2000元+荧光方解石 & 人民币2000元+徕芬高速吹风机×2</p><p><img class="gift-img" src="img/white-gift.jpeg" alt="white-gift"><img style="margin-left:78px;" src="img/2.png" alt="wind"></p><p>&nbsp;&nbsp;&nbsp;&nbsp;优秀提名 - 人民币100元 & 人民币500元+徕芬高速吹风</p><p><img id="wind-1" style="margin-left:293px;" src="img/1.png" alt="wind"></p><p>*特别鸣谢：部份奖金和奖品由【laifen 徕芬】赞助</p><p style="text-align: center;"><img class="logo2" src="img/logo2.png" alt="logo2"></p><p class="little-title">【免责声明】</p><p>投稿作品即表示你已经阅读并同意以下说明：</p><p>1. 你清楚并同意上传的作品可能会被公开分享。</p><p>2. 全程遵守国家法律与政策，请勿上传各类违规/敏感内容，即使上传也会被人工筛选和删除。</p><p>3. 避免上传非原创、未经创作者本人许可、存在大量参考借鉴的内容，对作品的原创性负责。</p><p>4. 如活动期间遇到不可抗力或其他意外因素，征集可能会被迫中止。</p></div><div class="row"><div class="col-md-12"><span class="btn close-disclaimer col-md-12">返回</span></div></div></div></div>`;
document.getElementsByClassName('disclaimer-btn')[0].onclick = function () {
    confirm_disclaimer(disclaimer_footer);
}
