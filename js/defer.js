// 获取弹窗元素
let alert_modal = document.getElementsByClassName("alert-modal")[0];
let alert_msg = document.getElementById('alert-msg');
// 弹窗事件
function alertModal(msg, time) {
    alert_msg.innerHTML = msg;
    alert_modal.style.display = 'block';
    alert_modal.classList.remove('animate__fadeOutDown');
    alert_modal.classList.add('animate__fadeInDown');
    setTimeout(() => {
        alert_modal.classList.remove('animate__fadeInDown');
        alert_modal.classList.add('animate__fadeOutDown');
    }, time);
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
        if (alert_modal.classList.contains('animate__fadeOutDown')) {
            alertModal('请完整填写作品信息', 1200);
        }
    } else if (author.length > 32) {
        alertModal('作品名过长，已超出128个字符的限制', 1200);
    } else if (opus.length > 32) {
        alertModal('作品名过长，已超出128个字符的限制', 1200);
    } else if (tel.length > 64) {
        alertModal('联系方式过长，已超出128个字符的限制', 1200);
    } else if (link.length > 32) {
        alertModal('作品链接过长，已超出256个字符的限制', 1200);
    } else if (about.length > 1024) {
        alertModal('作品说明过长，已超出1024个字符的限制', 1200);
    } else if (!alert_modal.classList.contains('animate__fadeInDown')) {
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
                let res = JSON.parse(request.responseText);
                if (res.code == 1040) {
                    alertModal('发送失败：你的请求已被过滤 (￣^￣)ゞ', 3000);
                } else if (res.code == 1000) {
                    document.getElementById('author').value = '';
                    document.getElementById('opus').value = '';
                    document.getElementById('tel').value = '';
                    document.getElementById('link').value = '';
                    document.getElementById('about').value = '';
                    localStorage.setItem('is_sign_up', 1);
                    document.getElementsByClassName('go-page-input')[0].style.display = 'none';
                    document.getElementsByClassName('is-sign-up')[0].style.display = 'block';
                    document.getElementsByClassName('go-page-home')[0].onclick();
                    alertModal('已发送：感谢投稿 (゜-゜)つロ', 3000);
                } else if (res.status == 429) {
                    alertModal('发送失败：发送频率过高，请稍后再试！', 3000);
                } else {
                    alertModal('发送失败：服务器在摸鱼！', 3000);
                }
            }
        }
    }
    e.stopPropagation();
};





