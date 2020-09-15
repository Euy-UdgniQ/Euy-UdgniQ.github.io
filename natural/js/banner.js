
function banner(part1, ul, ol) {
    // part1轮播图底部小长方形dot
    for (let i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
    }
    ol.children[0].className = 'choice';

    //part1轮播图图片划动+控制轮播图底部小正方形变化
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var dot = 0;
    var imgwidth = part1.offsetWidth;
    var timer = setInterval(function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * imgwidth);
        dot++;
        if (dot == 5) {
            dot = 0;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';

        }

        ol.children[dot].className = 'choice';
    }, 2000);

}

