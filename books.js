var imgUrl = 'http://mingmings.qiniudn.com/book/';
/* 1：在看 2：待看 3 归档 */

var books = [
    { name: 'Redis 设计与实现',
        url: imgUrl + 'redis 设计与实现.jpg', type: '后端', reading: 1 },
    { name: 'Redis cookbook',
        url: imgUrl + 'redis cookbook.jpg', type: '后端', reading: 1 },

    { name: '高性能MySQL',
        url: imgUrl + '高性能MySQL.jpg', reading: 2 },
    { name: 'Redis in Action',
        url: imgUrl + 'redis in action.jpg', reading: 2 },
    { name: 'Mongodb in Action',
        url: imgUrl + 'mongodb实战.jpg', reading: 2 },
    { name: 'Mongodb 权威指南',
        url: imgUrl + 'mongodb权威指南.jpg', reading: 2 },
    { name: 'Redis 入门指南',
        url: imgUrl + 'redis 入门指南.jpg', reading: 3 },

    { name: '向前一步',
        url: imgUrl + '向前一步.jpg', type: '人物传记', reading: 3 },
    { name: '史蒂夫·乔布斯传',
        url: imgUrl + '斯蒂文乔布斯传.jpg', type: '人物传记', reading: 3 },
    { name: '看见',
        url: imgUrl + '看见.jpg', type: '人物传记', reading: 3 },

    { name: '不能承受的生命之轻',
        url: imgUrl + '不能承受的生命之轻.jpg', type: '小说', reading: 3 },
    { name: '源泉',
        url: imgUrl + '源泉.jpg', type: '小说', reading: 3 },
    { name: '疯狂的程序员',
        url: imgUrl + '疯狂的程序员.jpg', type: '小说', reading: 3 },

    { name: '轻风茗月品女人',
        url: imgUrl + '轻风茗月品女人.jpg', type: '散文', reading: 3 },

    { name: '波利泰里尼网球手册',
        url: imgUrl + '波利泰里尼网球手册.jpg', type: '运动健身', reading: 3 },
    { name: '肌肉健美图解',
        url: imgUrl + '肌肉健美图解.jpg', type: '运动健身', reading: 3 },

    { name: '罗织经',
        url: imgUrl + '罗织经.jpg', type: '其他', reading: 3 },
    { name: '没有任何借口',
        url: imgUrl + '没有任何借口.jpg', type: '其他', reading: 3 },
    { name: '高效能人士的七个习惯',
        url: imgUrl + '高效能人士的七个习惯.jpg', type: '其他', reading: 3 }
];
