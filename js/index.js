$(document).ready(function(){
	initDraw(document.getElementById('canvas'));
	$("#inputImage").change(function(){
		loadImage(this);
	});
});

function loadImage(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			//$('#imgPreview').attr('src', e.target.result);
			$('#canvas').css({ 
				"background-image" : 'url(' + e.target.result + ')',
				"background-repeat" : 'no-repeat',
			});
		}

		reader.readAsDataURL(input.files[0]);
	}
}

function getImageSize() {
    var $img = $('#imgPreview');

    var wait = setInterval(function() {
        var w = $img[0].naturalWidth,
            h = $img[0].naturalHeight;
        if (w && h) {
            clearInterval(wait);
            $("#imgWidth").val(w);
            $("#imgHeight").val(h);
            //createCanvas(w,h);
            initDraw($('#canvas'));
        }
    }, 30);
}

function initDraw(canvas) 
    {
    	function setMousePosition(e) 
    	{
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
    };
    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    
    var element = null;
	canvas.onmousedown = function e() 
	{
		setMousePosition();
		mouse.startX = mouse.x;
        mouse.startY = mouse.y;
        element = document.createElement('div');
        element.className = 'rectangle'
        element.style.left = mouse.x + 'px';
        element.style.top = mouse.y + 'px';
        canvas.appendChild(element)
    	canvas.style.cursor="crosshair";
	}
	
	canvas.onmouseup = function e() 
	{
	  canvas.style.cursor="default";
      element = null;
      createMap(mouse);
	}
	
	canvas.onmousemove = function (e) 
	{
        setMousePosition();
        if (element !== null) 
        {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? (mouse.y - document.body.scrollTop ) + 'px' : (mouse.startY - document.body.scrollTop) + 'px';        }
    }
}

function createMap(mousePos) {
	
	console.log('mouse:', mousePos );
	var x1 = mousePos.startX;
	var x2 = mousePos.x;
	var y1 = mousePos.startY;
	var y2 = mousePos.y;

	$("<h2>").html("Url:").appendTo("#controls");
	$("<input>").attr('type', 'text').appendTo("#controls");
	
}






