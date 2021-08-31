var fs = require("fs");
var path = require("path");
var request = require("request");
let fonts = [
    {
      label: '思源黑体',
      value: 'SourceHanSansSC-Regular',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源黑体Heavy',
      value: 'SourceHanSansSC-Heavy',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源黑体Bold',
      value: 'SourceHanSansSC-Bold',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源黑体medium',
      value: 'SourceHanSansSC-Medium',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源黑体Light',
      value: 'SourceHanSansSC-Light',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源黑体ExtraLight',
      value: 'SourceHanSansSC-ExtraLight',
      picUrl: '',
      type: 'woff'
    },
    {
      value: 'FZHei-B01',
      label: '方正黑体',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'FZKai-Z03',
      label: '方正楷体',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'FZShuSong-Z01',
      label: '方正书宋',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'DFPHaiBaoW12-GB',
      label: '华康海报体',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'DFPLiJinHeiW8-GB',
      label: '华康俪金黑',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'DFPShouJinW3-GB',
      label: '华康瘦金体',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'DFPWaWaW5-GB',
      label: '华康娃娃体',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'DFPYaSongW9-GB',
      label: '华康雅宋体',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'DFPYuanW3-GB',
      label: '华康圆体',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'PangMenZhengDao',
      label: '庞门正道标题体',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'zcool-gdh',
      label: '站酷高端黑',
      picUrl: '',
      type: 'ttf'
    },
    {
      value: 'HappyZcool',
      label: '站酷快乐体',
      picUrl: '',
      type: 'ttf'
    },
    {
      label: 'Impact',
      value: 'impact',
      picUrl: '',
      type: 'ttf'
    },
    {
      label: '苹方ExtraLight',
      value: 'PINGFANGEXTRALIGHTflj',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '苹方Bold',
      value: 'PINGFANGBOLDflj',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '苹方Heavy',
      value: 'PINGFANGHEAVYflj',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '苹方Light',
      value: 'PINGFANGLIGHTflj',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '苹方Medium',
      value: 'PINGFANGMEDIUMflj',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '苹方Regular',
      value: 'PINGFANGREGULAR',
      picUrl: '',
      type: 'woff'
    },
    {
      label: 'DINCondRegular',
      value: 'DINCond-Regular',
      picUrl: '',
      type: 'woff'
    },
    {
      label: 'DINCondBold',
      value: 'DINOT-Bold',
      picUrl: '',
      type: 'woff'
    },
    {
      label: 'DINCondLight',
      value: 'DINCond-Light',
      picUrl: '',
      type: 'woff'
    },
    {
      label: 'DINCondBold',
      value: 'DINCond-Bold',
      picUrl: '',
      type: 'woff'
    },
    {
      label: 'DINCondBlack',
      value: 'DINCond-Black',
      picUrl: '',
      type: 'woff'
    },
    {
      label: 'DidotRoman',
      value: 'DidotRoman',
      picUrl: '',
      type: 'woff'
    },
    {
      label: 'DidotLtStd',
      value: 'DidotLTStd',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪趣黑',
      value: 'HYQuHeiW-1',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪黑方',
      value: 'HYHeiFangJ-2',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪晓波敦黑',
      value: 'HYDunHeiW',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪字研卡通',
      value: 'HYZYKTJ',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪晓波美妍',
      value: 'HYXBMYTJ',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪力量黑',
      value: 'HYLLHJ',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪劲楷黑',
      value: 'HYJKJ',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪润圆75w',
      value: 'HYRunYuan-75W-1',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪润圆65w',
      value: 'HanYiRunYuanZiTiXiLie65W-2',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪润圆55w',
      value: 'HanYiRunYuanZiTiXiLie55W-3',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪润圆45w',
      value: 'HanYiRunYuanZiTiXiLie45W-4',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '汉仪润圆35w',
      value: 'HanYiRunYuanZiTiXiLie35W-5',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '阿里普惠Regular',
      value: 'Alibaba-PuHuiTi-Regular',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '阿里普惠Medium',
      value: 'Alibaba-PuHuiTi-Medium',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '阿里普惠Bold',
      value: 'Alibaba-PuHuiTi-Bold',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '阿里普惠Heavy',
      value: 'Alibaba-PuHuiTi-Heavy',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '阿里普惠Light',
      value: 'Alibaba-PuHuiTi-Light',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '锐字云字库粗圆',
      value: 'RZYZKCYT-GBK',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '锐字云字库细圆',
      value: 'RZYZKXYT-GBK',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '锐字云字库准圆',
      value: 'RZYZKZYT-GBK',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '锐字钧线大黑',
      value: 'REEJI-JunXian-BlackGB-Regular',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源宋体Heavy',
      value: 'SourceHanSerifCN-Heavy',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源宋体Light',
      value: 'SourceHanSerifCN-Light',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源宋体Medium',
      value: 'SourceHanSerifCN-Medium',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源宋体Regular',
      value: 'SourceHanSerifCN-Regular',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源宋体SemiBold',
      value: 'SourceHanSerifCN-SemiBold',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源宋体Extralight',
      value: 'SourceHanSerifCN-ExtraLight',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '思源宋体Bold',
      value: 'SourceHanSerifCN-Bold',
      picUrl: '',
      type: 'woff'
    },
    {
      label: '仿宋',
      value: 'FS',
      picUrl: '',
      type: 'woff'
    }
  ]

// https://material.baobeituan.com/font/SourceHanSansSC-Regular/SourceHanSansSC-Regular.woff
// https://material.baobeituan.com/font/SourceHanSansSC-Regular/SourceHanSansSC-Regular.png
// https://material.baobeituan.com/font/zcool-gdh/zcool-gdh.ttf

function getfileByUrl(url,fileName,dir){
        // let fileName = item.value+'.'+ type?'png':item.type
        // let url = "https://material.baobeituan.com/font/SourceHanSansSC-Regular/SourceHanSansSC-Regular."+ type?'png':item.type
        console.log('------------------------------------------------------------------------------')
        console.log(url)
        console.log(fileName)
        console.log(dir)
        let stream = fs.createWriteStream(path.join(dir, fileName));
        request(url).pipe(stream).on("close", function (err) {
            console.log("文件" + fileName + "下载完毕");
        });
}
function makeDir(dirpath) {
    if (!fs.existsSync(dirpath)) {
        var pathtmp;
        dirpath.split("/").forEach(function(dirname) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            }
            else {　　　　　　　　　 //如果在linux系统中，第一个dirname的值为空，所以赋值为"/"
                if(dirname){
                    pathtmp = dirname;
                }else{
                    pathtmp = "/"; 
                }
            }
            if (!fs.existsSync(pathtmp)) {
                if (!fs.mkdirSync(pathtmp)) {
                    return false;
                }
            }
        });
    }else{
        deleteFolderFiles(dirpath);
    }
    return true;
}

    
for (let i = 0; i < fonts.length; i++) {
    let item = fonts[i]
    let picUrl = 'https://material.baobeituan.com/font/'+item.value+'/'+item.value+'.png'
    let fontUrl = 'https://material.baobeituan.com/font/'+item.value+'/'+item.value+'.'+item.type
    let dir = 'test12138/'+item.value
    makeDir(dir)
    getfileByUrl(picUrl, item.value+'.png', dir)
    getfileByUrl(fontUrl, item.value+'.'+item.type, dir)
}


