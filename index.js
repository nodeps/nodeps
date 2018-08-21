var fs         = require('fs')
var PSD        = require('psd')
var open       = require("open")

var PNG_FOLDER = __dirname + '/www/images/'
var jsonFile   = __dirname+ '/www/js/psd.js'
var imgs       = []

var psdFile    = process.argv.slice(2)[0] || 'node.psd'
var psd        = PSD.fromFile(psdFile)
// console.log('psdFile',psdFile)
psd.parse()
PSD.open(psdFile).then(function (psd) {
  // console.log(psd.tree().descendants())
  var psdTree = psd.tree().descendants().reverse()
  let contractors = psdTree.filter( function(val){
    return !val.isGroup() && val.export().visible
  })
  console.log(contractors.length)
  psd.tree().descendants().reverse().forEach(function (node,i) {
    if (!node.isGroup() && node.export().visible ){
        // console.log(node)
        // console.log(i,node.export())
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
        // console.log(imgs)
        // open(__dirname+ "/www/index.html")
      }
  })
})