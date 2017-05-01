	/*移动端适配*/
	/*屏幕与字体适配*/
	 	var docEl = document.documentElement;
		var dpr = window.devicePixelRatio;
		var metaEl = document.querySelector('meta[name="viewport"]');
		var dpr = window.devicePixelRatio || 1;
		var scale = 1 / dpr;
		
		// 设置viewport，进行缩放，达到高清效果
//		metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
//		
		function getSize() {// 获取屏幕的宽度
			//font-size 20px
			var screenWidth = docEl.clientWidth; 
			
			//docEl.style.fontSize =  screenWidth / 414 + 'px';
			docEl.style.fontSize =  screenWidth / (1242/ 100)  + 'px';
//			console.log(docEl.style.fontSize)
			
//			console.log(docEl.style.fontSize);
		}
		getSize();// 页面加载完执行一次
		window.onresize = function() {
			getSize();
	}
			

$(".header_center").click(function(){
	$(this).addClass("headerAcitive");
	$(".header_right01").removeClass("headerAcitive");
	$(".main").eq(0).show();
	$(".main01").hide();
	$(".showTab01").show();
	$(".showTab02").hide();
	$(".showTab01 li a").removeClass("activeAs");
	$(".showTab01 li a").eq(0).addClass("activeAs");
})
$(".header_right01").click(function(){
	$(this).addClass("headerAcitive");
	$(".header_center").removeClass("headerAcitive");
	$(".main").hide();
	$(".main01").eq(0).show();
	$(".showTab02").show();
	$(".showTab01").hide();
	$(".showTab02 li a").removeClass("activeAs");
	$(".showTab02 li a").eq(0).addClass("activeAs");
	var my04Content ='<div class="swiper-slide"><ul class="orderList"><li class="firstLi"><span class="leftSpan">2017-02-10 15:30</span><span class="rightSpan">待确定&nbsp;<a class="rightIcon" href="#"><i class="iconfont icon-xiangyou" style="font-size: 0.5rem;color:#BFBFBF;"></i></a></span></li><li class="secondLi"><ol class="showAdressOl"><li><a class="leftIcon" href="#"><i class="iconfont icon-qidian" style="font-size: 0.7rem;color:#00a05a;"></i></a><span class="rightSpan">中国中国中国中国加</span></li><li><a class="leftIcon" href="#"><i class="iconfont icon-zhongdian" style="font-size: 0.7rem;color:#e60032;"></i></a><span class="rightSpan">中国中国中国中国</span></li></ol></li></ul></div>';
var mySwiper04 = new Swiper('.swiper-container04',{
		      direction: 'vertical',
		      slidesPerView: 'auto',
		      autoplayDisableOnInteraction : false,
		      mousewheelControl: true,
		      freeMode: true,
		       onTouchMove: function(swiper,even){
			     	if(swiper.translate>60){
			     		$('.preloaderDown').addClass('visible');
			       		$('.preloaderDown span').text("释放立即刷新");
			       	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				       		$('.preloaderUp01').addClass('visible');
				       		$('.preloaderUp01 span').text("上拉加载");
			       		}
				    }
			    },
			    onTouchEnd: function(swiper){
			    	if(swiper.translate>60){
			    		console.log("下拉刷新")
			    		$('.preloaderDown').addClass('visible');
			    		$('.preloaderDown span').text("正在刷新");
			        	loadNewSlides(mySwiper04,my04Content);
			    	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				    		//alert("最末尾");
				    		console.log("上拉加载");
				    		$('.preloaderUp01').addClass('visible');
				    		$('.preloaderUp01 span').text("正在加载");
				    		loadNewSildeUp(mySwiper04,my04Content,swiper.isEnd,".swiper-container04");
				    	}
			    	}
			    }
   })
})
$(".showTab01 li a").each(function(index){
	$(this).click(function(){
		console.log(index);
		$(".main").css("display","none");
		$(".main").eq(index).show();
		$(".showTab01 li a").removeClass("activeAs");
		$(this).addClass("activeAs");
		if(index == 1){
			 var sss = '<div class="swiper-slide"><ul class="orderList"><li class="firstLi"><span class="leftSpan">2017-02-10 15:30</span><span class="rightSpan">待接单&nbsp;<a class="rightIcon" href="#"><i class="iconfont icon-xiangyou" style="font-size: 0.5rem;color:#BFBFBF;"></i></a></span></li><li class="secondLi"><ol class="showAdressOl"><li><a class="leftIcon" href="#"><i class="iconfont icon-qidian" style="font-size: 0.7rem;color:#00a05a;"></i></a><span class="rightSpan">中国中国中国中国</span></li><li><a class="leftIcon" href="#"><i class="iconfont icon-zhongdian" style="font-size: 0.7rem;color:#e60032;"></i></a><span class="rightSpan">中国中国中国中国</span></li></ol></li></ul></div>';
			 var mySwiper02 = new Swiper('.swiper-container02',{
		      direction: 'vertical',
		      slidesPerView: 'auto',
		      autoplayDisableOnInteraction : false,
		      mousewheelControl: true,
		      freeMode: true,
		    onTouchMove: function(swiper,even){
			     	if(swiper.translate>60){
			     		$('.preloaderDown').addClass('visible');
			       		$('.preloaderDown span').text("释放立即刷新");
			       	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				       		$('.preloaderUp01').addClass('visible');
				       		$('.preloaderUp01 span').text("上拉加载");
			       		}
				    }
			    },
			    onTouchEnd: function(swiper){
			    	if(swiper.translate>60){
			    		console.log("下拉刷新")
			    		$('.preloaderDown').addClass('visible');
			    		$('.preloaderDown span').text("正在刷新");
			        	loadNewSlides(mySwiper02,sss);
			    	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				    		//alert("最末尾");
				    		console.log("上拉加载");
				    		$('.preloaderUp01').addClass('visible');
				    		$('.preloaderUp01 span').text("正在加载");
				    		loadNewSildeUp(mySwiper02,sss,swiper.isEnd,".swiper-container02");
				    	}
			    	}
			    }
		  })
		}else if(index == 2){
			 var sss ='<div class="swiper-slide"><ul class="orderList"><li class="firstLi"><span class="leftSpan">2017-02-10 15:30</span><span class="rightSpan">待接单&nbsp;<a class="rightIcon" href="#"><i class="iconfont icon-xiangyou" style="font-size: 0.5rem;color:#BFBFBF;"></i></a></span></li><li class="secondLi"><ol class="showAdressOl"><li><a class="leftIcon" href="#"><i class="iconfont icon-qidian" style="font-size: 0.7rem;color:#00a05a;"></i></a><span class="rightSpan">中国中国中国中国</span></li><li><a class="leftIcon" href="#"><i class="iconfont icon-zhongdian" style="font-size: 0.7rem;color:#e60032;"></i></a><span class="rightSpan">中国中国中国中国</span></li></ol></li></ul></div>';
			 var mySwiper03 = new Swiper('.swiper-container03',{
		      direction: 'vertical',
		      slidesPerView: 'auto',
		      autoplayDisableOnInteraction : false,
		      mousewheelControl: true,
		      freeMode: true,
		     onTouchMove: function(swiper,even){
			     	if(swiper.translate>60){
			     		$('.preloaderDown').addClass('visible');
			       		$('.preloaderDown span').text("释放立即刷新");
			       	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				       		$('.preloaderUp01').addClass('visible');
				       		$('.preloaderUp01 span').text("上拉加载");
			       		}
				    }
			    },
			    onTouchEnd: function(swiper){
			    	if(swiper.translate>60){
			    		console.log("下拉刷新")
			    		$('.preloaderDown01').addClass('visible');
			    		$('.preloaderDown01 span').text("正在刷新");
			        	loadNewSlides(mySwiper03,sss);
			    	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				    		//alert("最末尾");
				    		console.log("上拉加载");
				    		$('.preloaderUp01').addClass('visible');
				    		$('.preloaderUp01 span').text("正在加载");
				    		loadNewSildeUp(mySwiper03,sss,swiper.isEnd,".swiper-container03");
				    	}
			    	}
			    }
		  })
		}
	})
})
$(".showTab02 li a").each(function(index){
	$(this).click(function(){
		$(".main01").hide();
		$(".main01").eq(index).show();
		$(".showTab02 li a").removeClass("activeAs");
		$(this).addClass("activeAs");
		if(index == 1){
			 var sss ='<div class="swiper-slide"><ul class="orderList"><li class="firstLi"><span class="leftSpan">2017-02-10 15:30</span><span class="rightSpan">待接单&nbsp;<a class="rightIcon" href="#"><i class="iconfont icon-xiangyou" style="font-size: 0.5rem;color:#BFBFBF;"></i></a></span></li><li class="secondLi"><ol class="showAdressOl"><li><a class="leftIcon" href="#"><i class="iconfont icon-qidian" style="font-size: 0.7rem;color:#00a05a;"></i></a><span class="rightSpan">中国中国中国中国</span></li><li><a class="leftIcon" href="#"><i class="iconfont icon-zhongdian" style="font-size: 0.7rem;color:#e60032;"></i></a><span class="rightSpan">中国中国中国中国</span></li></ol></li></ul></div>';
			 var mySwiper05 = new Swiper('.swiper-container05',{
		      direction: 'vertical',
		      slidesPerView: 'auto',
		      autoplayDisableOnInteraction : false,
		      mousewheelControl: true,
		      freeMode: true,
		        onTouchMove: function(swiper,even){
			     	if(swiper.translate>60){
			     		$('.preloaderDown').addClass('visible');
			       		$('.preloaderDown span').text("释放立即刷新");
			       	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				       		$('.preloaderUp01').addClass('visible');
				       		$('.preloaderUp01 span').text("上拉加载");
			       		}
				    }
			    },
			    onTouchEnd: function(swiper){
			    	if(swiper.translate>60){
			    		console.log("下拉刷新")
			    		$('.preloaderDown01').addClass('visible');
			    		$('.preloaderDown01 span').text("正在刷新");
			        	loadNewSlides(mySwiper05,sss);
			    	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				    		//alert("最末尾");
				    		console.log("上拉加载");
				    		$('.preloaderUp01').addClass('visible');
				    		$('.preloaderUp01 span').text("正在加载");
				    		loadNewSildeUp(mySwiper01,sss,swiper.isEnd,".swiper-container05");
				    	}
			    	}
			    }
		  })
		}else if(index == 2){
			 var sss ='<div class="swiper-slide"><ul class="orderList"><li class="firstLi"><span class="leftSpan">2017-02-10 15:30</span><span class="rightSpan">待接单&nbsp;<a class="rightIcon" href="#"><i class="iconfont icon-xiangyou" style="font-size: 0.5rem;color:#BFBFBF;"></i></a></span></li><li class="secondLi"><ol class="showAdressOl"><li><a class="leftIcon" href="#"><i class="iconfont icon-qidian" style="font-size: 0.7rem;color:#00a05a;"></i></a><span class="rightSpan">中国中国中国中国</span></li><li><a class="leftIcon" href="#"><i class="iconfont icon-zhongdian" style="font-size: 0.7rem;color:#e60032;"></i></a><span class="rightSpan">中国中国中国中国</span></li></ol></li></ul></div>';
			 var mySwiper06 = new Swiper('.swiper-container06',{
		      direction: 'vertical',
		      slidesPerView: 'auto',
		      autoplayDisableOnInteraction : false,
		      mousewheelControl: true,
		      freeMode: true,
		           onTouchMove: function(swiper,even){
			     	if(swiper.translate>60){
			     		$('.preloaderDown').addClass('visible');
			       		$('.preloaderDown span').text("释放立即刷新");
			       	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				       		$('.swiper-container06 .preloaderUp01').addClass('visible');
				       		$('.swiper-container06 .preloaderUp01 span').text("上拉加载");
			       		}
				    }
			    },
			    onTouchEnd: function(swiper){
			    	if(swiper.translate>60){
			    		console.log("下拉刷新")
			    		$('.preloaderDown').addClass('visible');
			    		$('.preloaderDown span').text("正在刷新");
			        	loadNewSlides(mySwiper06,sss);
			    	}else if(swiper.translate<-40){
				    	if(swiper.isEnd){
				    		//alert("最末尾");
				    		console.log("上拉加载");
				    		$('.swiper-container06 .preloaderUp01').addClass('visible');
				    		$('.swiper-container06 .preloaderUp01 span').text("正在加载");
				    		loadNewSildeUp(mySwiper06,sss,swiper.isEnd,".swiper-container06");
				    	}
			    	}
			    }
		  })
		}
	})
})

var my01Content = '<div class="swiper-slide"><ul class="orderList"><li class="firstLi"><span class="leftSpan">2017-02-10 15:30</span><span class="rightSpan">待接单&nbsp;<a class="rightIcon" href="#"><i class="iconfont icon-xiangyou" style="font-size: 0.5rem;color:#BFBFBF;"></i></a></span></li><li class="secondLi"><ol class="showAdressOl"><li><a class="leftIcon" href="#"><i class="iconfont icon-qidian" style="font-size: 0.7rem;color:#00a05a;"></i></a><span class="rightSpan">中国中国中国中国</span></li><li><a class="leftIcon" href="#"><i class="iconfont icon-zhongdian" style="font-size: 0.7rem;color:#e60032;"></i></a><span class="rightSpan">中国中国中国中国</span></li></ol></li></ul></div>';
  var mySwiper01 = new Swiper('.swiper-container01',{
      direction: 'vertical',
      slidesPerView: 'auto',
      autoplayDisableOnInteraction : false,
      mousewheelControl: true,
      freeMode: true,
     onTouchMove: function(swiper,even){
     	if(swiper.translate>60){
     		$('.preloaderDown').addClass('visible');
       		$('.preloaderDown span').text("释放立即刷新");
       	}else if(swiper.translate<-40){
	    	if(swiper.isEnd){
	       		$('.swiper-container01 .preloaderUp01').addClass('visible');
	       		$('.swiper-container01 .preloaderUp01 span').text("上拉加载");
       		}
	    }
    },
    onTouchEnd: function(swiper){
    	if(swiper.translate>60){
    		console.log("下拉刷新")
    		$('.preloaderDown').addClass('visible');
    		$('.preloaderDown span').text("正在刷新");
        	loadNewSlides(mySwiper01,my01Content);
    	}else if(swiper.translate<-40){
	    	if(swiper.isEnd){
	    		//alert("最末尾");
	    		console.log("上拉加载");
	    		$('.swiper-container01 .preloaderUp01').addClass('visible');
	    		$('.swiper-container01 .preloaderUp01 span').text("正在加载");
	    		loadNewSildeUp(mySwiper01,my01Content,swiper.isEnd,".swiper-container01");
	    	}
    	}
    }
  })
  function loadNewSlides(swiperObj,contentString){
    setTimeout(function(){
      //Prepend new slide
      swiperObj.prependSlide(contentString);
      //Release interactions and set wrapper
      swiperObj.setWrapperTranslate(0,0,0);
      swiperObj.params.onlyExternal=false;
      //Update active slide
      //mySwiper.updateActiveSlide(0)
      //Hide loader
      $('.preloaderDown').removeClass('visible');
      $('.preloaderUp').removeClass('visible');
    },1000)
  }
  function loadNewSildeUp(swiperObj,contentString,isEnd,contentClass){
  	   setTimeout(function(){
      swiperObj.appendSlide(contentString);
        if(isEnd){
        	var className = contentClass+" .preloaderUp01";
        	//alert(isEnd);
        	console.log(className);
        	  $(className).css("display","none");
  	   		  swiperObj.appendSlide('<div class="preloaderUp preloaderUp01"><img src="img/refresh.gif" /> <span>上拉加载...</span> </div>');
  	   	}

      swiperObj.params.onlyExternal=false;
      $('.preloaderDown').removeClass('visible');
      $('.preloaderUp').removeClass('visible');
    },1000)
  }
  $(".title").click(function(){
  	alert("ss");
  })
  /*上面是刷新功能代码，下面是页面效果和弹框*/
 $(".evalListLi .starIcon").each(function(){
			$(this).click(function(){
				$(".popup01").css("display","block");
				$(".black_overlay").css("display","block");
				$(".main").css({ "position":"fixed"});
			})
		})
			$(".knowBtn").click(function(){
				$(".popup01").css("display","none");
				$(".black_overlay").css("display","none");
				$(".main").css({ "position":"absolute"});
			})
		var curr = 0;
		$(".poppup03 .simI").each(function(){
			$(this).click(function(){
				curr++;
				if(curr%2==1){
					$(this).removeClass("notcheckedIcon");
					$(this).addClass("checkedIcon");
				}else{
					$(this).removeClass("checkedIcon");
					$(this).addClass("notcheckedIcon");
				}
					/*点击几颗星星评价不一样*/
				var leng = $(".poppup03 .checkedIcon").length;
				if(leng == 1){
					$(".poppup03 .notP span").text("超级不满意");
				}else if(leng == 2){
					$(".poppup03 .notP span").text("非常不满意，各方面都很差");
				}else if(leng == 3){
					$(".poppup03 .notP span").text("还行");
				}else if(leng == 4){
					$(".poppup03 .notP span").text("满意");
				}else if(leng == 5){
					$(".poppup03 .notP span").text("超级满意，点个赞");
				}
			})
		})
		
		/*选中原因*/
		var curr01 = 0;
		$(".poppup03 .qiIcon").each(function(){
			$(this).click(function(){
				curr01++;
				if(curr01%2==1){
					$(this).addClass("activeLi");
				}else{
					$(this).removeClass("activeLi");
				}
				if($(".activeLi").length > 0){
					$(".niNameBtn").addClass("niNameBtnActive");
					$(".niNameBtn").removeAttr("disabled");
					$(".niNameBtn").click(function(){
						$(".poppup03").css("display","none");
						$(".main").css({ "position":"fixed"});
						$(".alreadyPoppup04").css("display","block");
						$(".black_overlay").css("display","block");
					})
				}else{
					$(".niNameBtn").removeClass("niNameBtnActive");
					$(".niNameBtn").attr("disabled","true");
				}
				if($(".activeLi").length>0){
					$(".otherInput").css("display","none");
					$(".textArea").css("display","block");
					$(".digital").css("display","block");
					$(".poppup03").css("height","14.8rem");
				}else{
					$(".otherInput").css("display","block");
					$(".textArea").css("display","none");
					$(".digital").css("display","none");
					$(".poppup03").css("height","13.5rem");
				}
			})
			
		})
			/*文本框中文字变化*/	
		function size(par) { 
			var max = 50; 
			if (par.value.length <= max)
			var str =par.value.length; 
			$("#span").html(str.toString())
		}
		$(".closePop02").click(function(){
				$(".poppup02").css("display","none");
				$(".black_overlay").css("display","none");
				$(".main").css({ "position":"absolute"});
		})
		$(".closePop03").click(function(){
				$(".poppup03").css("display","none");
				$(".black_overlay").css("display","none");
				$(".main").css({ "position":"absolute"});
		})
		$(".closePop04").click(function(){
				$(".alreadyPoppup04").css("display","none");
				$(".black_overlay").css("display","none");
				$(".main").css({ "position":"absolute"});
		})
		$(".merchantsBtn").each(function(){
			$(this).click(function(){
				$(".poppup02").css("display","block");
				$(".black_overlay").css("display","block");
				$(".main").css({ "position":"fixed"});
			})
		})
		$(".poppup02 .qiIcon").each(function(){
			$(this).click(function(){
				$(".poppup02").css("display","none");
				$(".poppup03").css("display","block");
				$(".black_overlay").css("display","block");
				$(".main").css({ "position":"fixed"});
			})
		})
		$(".waitSure").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_carInform.html";
			})
		})
		$(".notPay").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_carInform.html";
			})
		})
		$(".completed").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_carInform04.html";
			})
		})
		$(".simCarInform01").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_carInform01.html";
			})
		})
		$(".requireWaitOrder").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_freeSuccess02.html";
			})
		})
		$(".requireWaitSure").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_checkMerchant01.html";
			})
		})
		$(".requireCancle").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_carInform03.html";
			})
		})
		$(".requireNoPay").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_sLcDetails06.html";
			})
		})
		$(".requirePay").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_sLcDetails07.html";
			})
		})
		$(".showMapImg").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_map01.html";
			})
		})
		$(".showMapPay").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_map02.html";
			})
		})
		$(".smsIcon").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_complaints.html";
			})
		})
		$(".shouHuoBtn").each(function(){
			$(this).click(function(){
				location.href="../zsft_owner/owner_submitReceipt.html";
			})
		})
