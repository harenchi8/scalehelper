(function($) {
    $.fn.scaleAnm = function(options)
    {
		var defaults = {
				scale:1,
				point:"CC",
				duration:1000,
				delay:0,
				ease:null,
				callback:function(){}
			};
		var setting = $.extend(defaults, options);
		
		//引数の値チェック
		var _scale = setting.scale;
		var _point = setting.point;
		var _duration = setting.duration;
		var _delay = setting.delay;
		var _easeing = setting.ease;
		var _callback = setting.callback;

		var targetWidth = this.width();
		var targetHeight = this.height();
		var _w = targetWidth * _scale;
		var _h = targetHeight * _scale;

		_scale = _scale * 100;

		var points = getPoint([targetWidth, targetHeight, _w, _h], _point);
		var py = parseInt(this.css("top").split("px")[0], 10);
		py = (py)?py:0;
		var px = parseInt(this.css("left").split("px")[0], 10)
		px = (px)?px:0;
		var posY = py + points[0];
		var posX = px + points[1];

		this.delay(_delay).animate({width:_w + "px", height:_h + "px", top:posY + "px", left:posX + "px" }, _duration, _easeing, _callback);
		
		
		return(this);
    }
    
    function getPoint(arr, _point)
	{
		var targetWidth = arr[0];
		var targetHeight = arr[1];
		var _w = arr[2];
		var _h = arr[3];
		var posY = 0;
		var posX = 0;
		var results = [];

		switch(_point)
		{
			case "TL"://左上
				posY = 0;
				posX = 0;
				break;
			case "TC"://中央上
				posY = 0;
				posX = (targetWidth - _w) / 2;
				break;
			case "TR"://右上
				posY = 0;
				posX = targetWidth - _w;
				break;
			case "CL"://左中央
				posY = (targetHeight - _h) / 2;
				posX = 0;
				break;
			case "CC"://中央
				posY = (targetHeight - _h) / 2;
				posX = (targetWidth - _w) / 2;
				break;
			case "CR"://右中央
				posY = (targetHeight - _h) / 2;
				posX = targetWidth - _w;
				break;
			case "BL"://左下
				posY = targetHeight - _h;
				posX = 0;
				break;
			case "BC"://中央下
				posY = targetHeight - _h;
				posX = (targetWidth - _w) / 2;
				break;
			case "BR"://右下
				posY = targetHeight - _h;
				posX = targetWidth - _w;
				break;
			default:
				break;
		}

		results = [posY, posX];
		return results;
	}
    
})(jQuery);
