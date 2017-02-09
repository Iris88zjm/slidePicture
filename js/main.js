var slide = document.getElementById('slide');
var banner = document.getElementById('banner');
slide.style.marginLeft = -(slide.clientWidth - banner.clientWidth )/2 + 'px';
slide.style.marginTop = -(slide.clientHeight - banner.clientHeight )/2 + 'px';
function mousePosition(event){
    var bannerLeft = banner.offsetLeft; // banner 离窗口最左边的距离
    var bannerTop = banner.offsetTop - document.body.scrollTop; // banner 离窗口最上边的距离
    var bannerX = event.clientX - bannerLeft; // 获取当前鼠标在banner里X的坐标
    var bannerY = event.clientY - bannerTop; // 获取当前鼠标在banner里Y的坐标
    // console.log(bannerX + ', ' + bannerY);
    var bannerWidth = banner.clientWidth; //当前banner的实际宽度
    var bannerHeight = banner.clientHeight; //当前banner的实际高度
    var slideWidth = slide.clientWidth-55;  //当前slide的实际宽度
    var slideHeight = slide.clientHeight; //当前slide的实际高度

    var slideClientWidth = bannerX / (bannerWidth / slideWidth); //计算出当前banner的坐标在相对于slide来说，slide坐标X
    var slideClientHeight = bannerY / (bannerHeight / slideHeight); //计算出当前banner的坐标在相对于slide来说，slide坐标Y
    //console.log(slideClientWidth + ', ' + slideClientHeight);
    slide.style.marginLeft = -banner.offsetLeft+'px';
    slide.style.marginTop= -bannerTop + 'px';
    slide.style.transform = "translate(" + (event.clientX - slideClientWidth) + "px," + (event.clientY - slideClientHeight) + "px)"; //slide移动的比例 ，X移动速度为(event.clientX - slideClientWidth) ，Y移动速度为(event.clientY - slideClientHeight)
}
banner.onmousemove = mousePosition;