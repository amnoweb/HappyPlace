var scanApp = {
	initialize: function (){
		this.bindEvents();
	},
	
	bindEvents: function (){
		document.addEventListener('devideready', this.onDeviceReady);
	}
	
	onDeviceReady: function(){
		console.log('Received Device Ready Event');
		Log.initialize(app.displayLogLine);
	},
	scan: function (){
		phonegap.plugins.barcodeScanner.scan(
			function (result) {
				alert("Barcode/QR code data\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
			},
			function (err0r) {
				alert("Scanning failed: " + error);
			}
		);
	},
};