var tplHome = require('../templates/home.string');

   //引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('home', {
  html: tplHome,

  
  
  plugins: ['delegated', {
    name: 'avalon',
    options: function (vm) {
      vm.livelist1 = [];
      vm.livelist2 = [];
      vm.livelist3 = [];
      vm.livelist4 = [];
    }
  }],

  


 init: {
    vm: null,
    livelist1Array: [],
    livelist2Array: [],
    livelist3Array: [],
    livelist4Array: [],
    homeSwiper: null,
    homeHotSwiper: null,
   
    formatData: function (arr) {
      var tempArr = [];
      for (var i = 0; i < Math.ceil(arr.length/2); i++) {
        tempArr[i] = [];
        tempArr[i].push(arr[2*i]);
        tempArr[i].push(arr[2*i+1]);
      }
      return tempArr;
    }
    
  },





bindActions: {
	'tap.slide': function (e, data) {
      this.mySwiper.slideTo($(e.el).index())
   },
//  'tap.homehot.slide': function (e, data) {
//    this.homeHotSwiper.slideTo($(e.el).index());
//  },
//
//  'tap.home.slide': function (e, data) {
//    this.homeSwiper.slideTo($(e.el).index());
//  },

    'goto.detail': function (e, data) {
      SPA.open('detail', {
        param: {
          data: data
        }
      });
    }
  },



bindEvents: {
    'beforeShow': function () {
      var that = this;
      that.vm = that.getVM();

      $.ajax({
        url: '/api/getLivelist.php',
        type: 'get',
        data:{
          rtype: 'origin1'
        },
        success: function (rs) {
        	//console.log(rs.data[0].title);
          that.livelist1Array = rs.data;
        that.vm.livelist1= rs.data;
         
         }
      });
  

    $.ajax({
        url: '/api/getLivelist.php',
        type: 'get',
        data:{
          rtype: 'origin2'
        },
        success: function (rs) {
        	
	      that.livelist2Array = rs.data;
	      that.vm.livelist2= rs.data;

         }
      });
    


//    $.ajax({
//      url: '/api/getLivelist.php',
//      type: 'get',
//      data:{
//        rtype: 'origin3'
//      },
//      success: function (rs) {
//      	
//         that.livelist3Array = rs.data;
//         that.vm.livelist3= rs.data;
//       }
//    });
    
    $.ajax({
        url: '/api/getLivelist.php',
        type: 'get',
        data:{
          rtype: 'origin3'
        },
        success: function (rs) {
          that.livelist3Array = rs.data;
          that.vm.livelist3 = that.formatData(rs.data);//二维图片
          
          //that.vm.livelist3 = rs.data;//转为一维图片
        }
      });
    
    
    
    
    $.ajax({
        url: '/api/getLivelist.php',
        type: 'get',
        data:{
          rtype: 'origin4'
        },
        success: function (rs) {
        	
           that.livelist4Array = rs.data;
           that.vm.livelist4= rs.data;
         }
      });
    },



    'show': function () {
      this.mySwiper = new Swiper('#home-swiper', {
        loop: false,
        onSlideChangeStart: function (swiper) {
          var index = swiper.activeIndex;
          var $lis = $('.m-home nav li');
          util.setFocus($lis.eq(index));
        }
      });
    }
 }
});





 

