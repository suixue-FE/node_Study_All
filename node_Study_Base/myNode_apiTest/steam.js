const fs = require('fs')
const rs = fs.createReadStream('./imgs/u=2534506313,1688529724&fm=26&gp=0.jpg')
const es = fs.createWriteStream('./imgs/01.jpg')
rs.pipe(es)