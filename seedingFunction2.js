// let title = ['red', 'purple'];
// let imgurl = {
//   'red' : ['https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/redOne.jpg', 'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/redTwo.jpg', 'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/HNS_GF68Y06145_TeamRedScarlet_Side.jpg', 'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/redFour.jpg'],
//   'purple': ['https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/purpleOne.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/purpleTwo.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/purpleThree.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/purpleFour.jpg']
// };
let db = require('./database');
let data = [{
  title: 'red',
  imgurl: ['https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/redOne.jpg', 'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/redTwo.jpg', 'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/HNS_GF68Y06145_TeamRedScarlet_Side.jpg', 'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/redFour.jpg']
},
 {
   title: 'purple',
   imgurl: ['https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/purpleOne.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/purpleTwo.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/purpleThree.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/purpleFour.jpg']
 },
 {
  title: 'dark-khaki',
  imgurl: ['https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/dark+Khaki+One.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/Dark+Khaki+Two.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/Dark+Khaki+Three.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/Dark+Khaki+Four.jpg']
}
// {
//   title: 'black',
//   imgurl: ['https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/blackOne.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/Black2.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/black3.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/blackfour.jpg']
// },
// {
//   title: 'CGold',
//   imgurl: ['https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/CGoldOne.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/CGoldTwo.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/CGoldThree.jpg','https://bechampions-assets.s3.us-east-2.amazonaws.com/images/topDisplay/colors/CGoldFour.jpg']
// }
];
db.db2.create(data);