var QRCode = require('qrcode')

QRCode.toDataURL('https://one-shore.com', function (err, url) {
  console.log(url)
})


QRCode.toFile('qrcode.png', 'https://one-shore.com', function(err, file) {
	console.log("qrcode.png generated");
})
