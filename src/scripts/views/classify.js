var tplClassify = require('../templates/classify.string');
var util = require('../utils/fn.js');


SPA.defineView('classify', {
  html: tplClassify,
  plugins: ['delegated', {
  name: 'avalon',
  options: function (vm) {
//    vm.livelist1 = [];
//    vm.livelist2 = [];
//    vm.livelist3 = [];
//    vm.livelist4 = [];
  }
     }],
init: {
    vm: null,
    //livelist1Array: [],
    
   },



bindActions: {
	  'tap.slide': function (e, data) {
     // this.mySwiper.slideTo($(e.el).index())
   }
   
},

bindEvents: {
	  'beforeShow': function () {},
	
	 'show': function () {}
}

});
