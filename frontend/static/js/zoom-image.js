
;(function($) {
    
    $.fn.zoomImage = function(paras) {
        
        var defaultParas = {
            layerW: 100, 
            layerH: 100, 
            layerOpacity: 0.2,
            layerBgc: '#000', 
            showPanelW: 350, 
            showPanelH: 350, 
            marginL: 5, 
            marginT: 0 
        };

        paras = $.extend({}, defaultParas, paras);

        $(this).each(function() {
            var self = $(this).css({position: 'relative'});
            var selfOffset = self.offset();
            var imageW = self.width();
            var imageH = self.height();

            self.find('img').css({
                width: '100%',
                height: '100%'
            });

            
            var wTimes = paras.showPanelW / paras.layerW;
            
            var hTimes = paras.showPanelH / paras.layerH;

            
            var img = $('<img>').attr('src', self.attr("href")).css({
                position: 'absolute',
                left: '0',
                top: '0',
                width: imageW * wTimes,
                height: imageH * hTimes
            }).attr('id', 'big-img');

            
            var layer = $('<div>').css({
                display: 'none',
                position: 'absolute',
                left: '0',
                top: '0',
                backgroundColor: paras.layerBgc,
                width: paras.layerW,
                height: paras.layerH,
                opacity: paras.layerOpacity,
                border: '1px solid #ccc',
                cursor: 'crosshair'
            });

            
            var showPanel = $('<div>').css({
                display: 'none',
                position: 'absolute',
                overflow: 'hidden',
                left: imageW + paras.marginL,
                top: paras.marginT,
                width: paras.showPanelW,
                height: paras.showPanelH
            }).append(img);

            self.append(layer).append(showPanel);

            self.on('mousemove', function(e) {
                
                var x = e.pageX - selfOffset.left;
                var y = e.pageY - selfOffset.top;

                if(x <= paras.layerW / 2) {
                    x = 0;
                }else if(x >= imageW - paras.layerW / 2) {
                    x = imageW - paras.layerW;
                }else {
                    x = x - paras.layerW / 2;
                }

                if(y < paras.layerH / 2) {
                    y = 0;
                } else if(y >= imageH - paras.layerH / 2) {
                    y = imageH - paras.layerH;
                } else {
                    y = y - paras.layerH / 2;
                }

                layer.css({
                    left: x,
                    top: y
                });

                img.css({
                    left: -x * wTimes,
                    top: -y * hTimes
                });
            }).on('mouseenter', function() {
                layer.show();
                showPanel.show();
            }).on('mouseleave', function() {
                layer.hide();
                showPanel.hide();
            });
        });
    }
})(jQuery);

if ($(window).width() >= 992) {
    $('.showimg').zoomImage();
}

$('.show-small-img:first-of-type').css({
    'border': 'solid 1px #ddd',
    'padding': '2px'
});
$('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt');
$('.show-small-img').click(function() {
    $('#show-img').attr('src', $(this).attr('src'));
    $('#big-img').attr('src', $(this).attr('src'));
    $(this).attr('alt', 'now').siblings().removeAttr('alt');
    $(this).css({
        'border': 'solid 1px #ddd',
        'padding': '2px'
    }).siblings().css({
        'border': 'none',
        'padding': '0'
    });
    if ($('#small-img-roll').children().length > 4) {
        if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($(this).index() - 2) * 76 + 'px');
        } else if ($(this).index() == $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px');
        } else {
            $('#small-img-roll').css('left', '0');
        }
    }
});

//main.js
$('#next-img').click(function() {
    $('#show-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'));
    $('#big-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'));
    $(".show-small-img[alt='now']").next().css({
        'border': 'solid 1px #ddd',
        'padding': '2px'
    }).siblings().css({
        'border': 'none',
        'padding': '0'
    });
    $(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt');
    if ($('#small-img-roll').children().length > 4) {
        if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px');
        } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px');
        } else {
            $('#small-img-roll').css('left', '0');
        }
    }
});

$('#prev-img').click(function() {
    $('#show-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'));
    $('#big-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'));
    $(".show-small-img[alt='now']").prev().css({
        'border': 'solid 1px #ddd',
        'padding': '2px'
    }).siblings().css({
        'border': 'none',
        'padding': '0'
    });
    $(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt');
    if ($('#small-img-roll').children().length > 4) {
        if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px');
        } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px');
        } else {
            $('#small-img-roll').css('left', '0');
        }
    }
});