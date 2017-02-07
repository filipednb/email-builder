<!doctype html>
<html>
<head>
	<script type="text/javascript" src="js/jquery-3.1.1.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
    <link href="css/main.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div id="canvas"></div>
    <div style="display:none">
    	<img id="imgPreview" src="#"/>
    </div>
    <div id="controls-container">
    	<div id="controls">
    		<h2>Imagem:</h2>
    		<input type="file" id="inputImage" />
    		<h2>Email alvo:</h2>
    		<input type="text" id="targetEmail" placeholder="Email alvo" value="" />

			<h2>HTML</h2>
			<textarea></textarea>
    	</div>
    </div>
   
</body>
</html>