var fs         = require('fs')
var PSD        = require('psd')
var open       = require("open")
var psd        = PSD.fromFile("node.psd")
var PNG_FOLDER = 'www/images/'
var jsonFile   = 'www/js/psd.js'
var imgs       = []
psd.parse()
PSD.open("node.psd").then(function (psd) {
  psd.tree().descendants().reverse().forEach(function (node,i) {
    if (!node.isGroup() && node.export().visible){
        var item = {}  
        var imgStruct=[]   
        imgStruct[i] = node.export()
        item={
          width  : imgStruct[i].width,
          height : imgStruct[i].height,
          left   : imgStruct[i].left,
          top    : imgStruct[i].top,
          index  : i
        }
        imgs[i]=item
    }
    node.saveAsPng(PNG_FOLDER + i + ".png")
  })
}).then(function () {
  fs.writeFile(jsonFile, 'var psdJSON =' + JSON.stringify(imgs, null, 4), function(err) {
      if(err) {
        console.log(err)
      } else {
        open("index.html")
      }
  })
})