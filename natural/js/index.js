window.onload = function () {
    // part1的轮播图
    var part1 = document.querySelector('#part1');
    var ul = part1.querySelector('#part1-img');
    var ol = part1.querySelector('#part1-dot')
    banner(part1, ul, ol);
    // part2的轮播图
    var part6 = document.querySelector('#part6');
    var ul6 = part6.querySelector('#part6-img');
    var ol6 = part6.querySelector('#part6-dot')
    banner(part6, ul6, ol6);
    // part3点击添加喜爱
    var like = document.querySelectorAll('.like');
    for (let i = 0; i < like.length; i++) {
        var likeFlag = 0;
        like[i].addEventListener('click', function () {
            if (likeFlag == 0) {
                this.children[0].style.color = '#d04257';
                likeFlag = 1;
                alert("添加成功");
            } else {
                this.children[0].style.color = '#ffffff';
                likeFlag = 0;
                alert("已取消");
            }
        })
    }

    var ul3 = document.querySelector('.part3-img');
    var part3Mask = document.querySelector('.part3-mask');
    var part3MaskImg = part3Mask.children[0];
    for (let i = 0; i < ul3.children.length; i++) {
        var li3 = ul3.children[i];
        li3.addEventListener('click', function () {
            part3Mask.style.display = 'block';
            part3MaskImg.src = this.children[0].src;
        })
    }

    part3Mask.addEventListener('click', function () {
        this.style.display = 'none';
    })
}

