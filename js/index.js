$(function(){
    // var oL = $('#wrap ul li').size();
    var oL = 8;
    var Deg = 360/oL;
    var xDeg = 0,yDeg = -10,xs,ys,p=null;

    for (var i=oL-1;i>=0;i--)
    {
        
        $('#wrap ul li').eq(i).css({
            transition:"1s "+(oL-i)*0.15+"s transform,.5s "+(1+oL*0.15)+"s opacity",
            'transform':'rotateY('+Deg*i+'deg) translateZ(350px)'
        });
    }
        
    
    $(document).mousedown(function(e){
        clearInterval(p);
        var x1 = e.clientX;
        var y1 = e.clientY;
        $(this).bind('mousemove',function(e){
            xs = e.clientX - x1;
            ys = e.clientY - y1;
            x1 = e.clientX;
            y1 = e.clientY;
            xDeg += xs*0.3;
            yDeg -= ys*0.1;
            $('#wrap').css('transform',"perspective(800px) rotateX("+yDeg+"deg) rotateY("+xDeg+"deg)");
        });
    }).mouseup(function(){
        $(this).unbind('mousemove');
        p = setInterval(function(){
            if(Math.abs(xs)<0.5&&Math.abs(ys)<0.5){clearInterval(p)};
            xs = xs*0.95;
            ys = ys*0.95
            xDeg += xs*0.3;
            yDeg -= ys*0.1;
            $('#wrap').css('transform',"perspective(800px) rotateX("+yDeg+"deg) rotateY("+xDeg+"deg)");
        },30);
    });

});
$('.close').click(function() {
    $('#mask-kk,.popup-kk').css('display', 'none');
    $("body").css({overflow:""})
})

function show(index){
    $('#mask-kk').css({
        display: 'block',
        height: $(document).height()
    })
    var $Popup = $('.popup-kk');
    $Popup.css({
    left: ($('body').width() - $Popup.width()) / 2+ 'px',
    top: ($(window).height() - $Popup.height()) / 2 + $(window).scrollTop() + 'px',
    display: 'block'
    })
    $("body").css({overflow:"hidden"})
    $("#show").html("<img src='../test.github.io/imgs/"+index+".jpg'/>");
}