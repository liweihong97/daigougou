// 引入类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');

// 引入views

require('./views/car.js');
require('./views/center.js');
require('./views/classify.js');
require('./views/guide.js');
require('./views/home.js');
require('./views/index.js');
require('./views/login.js');


// SPA设置
SPA.config({
indexView: 'guide'
});
