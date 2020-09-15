window.onload = function () {
    var choicebtn = document.querySelector("#choicebtn");
    var arr = [0, 1, 2, 5, 8, 7, 6, 3];//按这个下标依次旋转
    var ols = document.querySelector('#ols');
    var lis = ols.children;
    var num = 0;  //定义初识下标
    var flag = 0;
    choicebtn.onclick = function () {
        if (flag == 0) {
            time = setInterval(function () {
                lis[arr[num]].className = "";
                num++;
                if (num > 7) {
                    num = 0;
                }
                lis[arr[num]].className = "light";
                console.log(lis[arr[num]].className);
            }, 25);
            flag = 1;
        } else {
            setTimeout(function () { clearInterval(time); }, 0);
            flag = 0;
        }


    };


}