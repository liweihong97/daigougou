
var tplIndex = require('../templates/index.string');
var util = require('../utils/fn.js');
var util = require('../utils/fn.js');
SPA.defineView('index', {
  html: tplIndex,
  plugins: ['delegated'],
  init: {
     setFocus: function (e) {
       $(e.el).addClass('active').siblings().removeClass('active');
     }
  },
  modules: [{
    name: 'content', 
    views: ['home','car', 'center', 'classify','login'], 
    defaultTag: 'home', 
    container: '.l-container' // 子视图的容器
  }],

  bindActions: {
    'switch.tabs': function (e, data) {
      util.setFocus(e.el);
      this.modules.content.launch(data.tag);
      
    },

    'exit': function (e, data) {
      util.setFocus(e.el);
      this.hide();
    }
//  'tap.my': function () {
//    SPA.open('my', {
//      ani: {
//        name: 'actionSheet',
//        distance: 300
//      }
//    });
//  }
  
  
  },

  
  bindEvents: {
	  beforeShow: function () {
	   
	 },

    show: function () {
     
    }
  }
});
