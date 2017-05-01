					/*判断用户输入的邮箱和电话格式是否正确*/
					$("#user").blur(function(){
						var myreg =/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
						var ihphone = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
						var eamil = $(this).val();
						var reg = eamil.match(myreg);
						var reg01 = eamil.match(ihphone);
						if(eamil.constructor===String && reg!=null || reg01!=null){
							$(".error").css("display","none");
							$(".inputuser").css("border-color","#dedede");
						}
						else{
							$(".error").text("请输入正确的用户名");
							$(".error").css("display","block");
							$(".inputuser").css("border-color","red");
						}
					});
			
					/*密码判断*/
					$("#pwd").blur(function(){
						console.log($(this).val());
						var pwd = /^[\\p{Punct}a-zA-Z0-9]{6,14}$/;
						if(!pwd.test($(this).val())){
							$(".error").text("请输入正确的密码");
							$(".error").css("display","block");
							$(".inputpwd").css("border-color","red");
							
						}else{
							$(".error").css("display","none");
							$(".inputpwd").css("border-color","#dedede");
						}
					})
		
				
			
				
		
		
				/*加入购车计划弹框*/
				var y=$(document).height(); 
				$(".addCars").click(function(){
					 
				    $(".black_overlay").css("height",y);
					$(".black_overlay").css("display","block");
					$(".pop").css("display","block");
				})
				$(".closeBtn").click(function(){
					$(".black_overlay").css("display","none");
					$(".pop").css("display","none");
				})
				
				/*未登录直接购买判断*/
				$(".xgyx_inp").blur(function(){
					var inp = $(".xgyx_inp").val();
					var prose1=/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
					if(prose1.test(inp)){
						//$(".xgyx_ts").css("display","none")
						$(".email .yx").val(inp);
						$(".main_Submit_email input").val(inp);
						//$(".black_overlay").css("display","none");
						//$(".xgyx").css("display","none");
					}else{
						$(".xgyx_ts").css("display","block")
					}
				})
				/*未登录直接购买*/
				$(".addXun").click(function(){
					$(".black_overlay").css("height",y);
					$(".black_overlay").css("display","block");
					$(".pop_xun").css("display","block");
					$(".xgyx_inp").removeAttr('value');
				})
				$(".pop_close").click(function(){
					$(".black_overlay").css("display","none");
					$(".pop_xun").css("display","none");
					//$(".xgyx_ts").css("display","none")
				})
			
				/*输入框文字颜色改变*/
				$(".colorA").focus(function(){
					if($(".colorA").val()=='输入你喜欢的颜色'){
						$(".colorA").val('');
						$(".colorA").css("color","#666666");
					}
				})
				$(".colorA").blur(function(){
								if($(".colorA").val()==''){
									$(".colorA").val('输入你喜欢的颜色');
									$(".colorA").css("color","#c8c8c8");
								}
				})
				/*点击？弹出框*/
				$(".clickAlert").mouseover(function(){
					$(".alertFont").css("display","block");
				})
	
				$(".clickAlert").mouseout(function(){
					$(".alertFont").css("display","none");
				});
				/*咨询城市下拉框点击边框变色*/
			
				$(".cho").each(function(){

					$(this).click(function(){
						
						$(".cho").removeClass("active");							
						$(".nth01 a em").text($(this).text());
						$(this).addClass("active");
						
					})
					
				})
				$(".cho01").each(function(){
					$(this).click(function(){
						$(".cho01").removeClass("active");
					
						$(".nth02 a em").text($(this).text());
						$(this).addClass("active");
					})
					
				})
				$(".cho02").each(function(){
					$(this).click(function(){
						$(".cho02").removeClass("active");
						$(".nth03 a em").text($(this).text());
						$(this).addClass("active");
					})
					
				})
				
//				$(".simNth").each(function(){
//							$(".simNth").addClass("selectionActive");
//				})
				$(".nth01 a").click(function(){
					$("#sheng").css("display","block");
					$("#shi").css("display","none");
					$("#qu").css("display","none");
					$(this).addClass("current");
					$(".nth02 a").removeClass("current");
					$(".nth03 a").removeClass("current");
				})
				$(".nth02 a").click(function(){
					$("#sheng").css("display","none");
					$("#shi").css("display","block");
					$("#qu").css("display","none");
					$(this).addClass("current");
					$(".nth01 a").removeClass("current");
					$(".nth03 a").removeClass("current");
				})
				$(".nth03 a").click(function(){
					$("#sheng").css("display","none");
					$("#shi").css("display","none");
					$("#qu").css("display","block");
					$(this).addClass("current");
					$(".nth01 a").removeClass("current");
					$(".nth02 a").removeClass("current");
				})
				/*咨询城市下拉框是否存在*/
				$(".cityZ").each(function(i){
					$(this).mouseover(function(){
						$(".selectCity").eq(i).css("display","block");
					})
					$(".selectCity").eq(i).mouseover(function(){
					$(this).css("display","block");
				})
				$(".selectCity").eq(i).mouseout(function(){
					$(this).css("display","none");
				})
					$(this).mouseout(function(){
						$(".selectCity").eq(i).css("display","none");
				    })
					
				})
//				$(".cityZ").mouseover(function(){
//					$(".selectCity").css("display","block");
//				})
//				$(".selectCity").mouseover(function(){
//					$(this).css("display","block");
//				})
//				$(".selectCity").mouseout(function(){
//					$(this).css("display","none");
//				})
//				$(".cityZ").mouseout(function(){
//					$(".selectCity").css("display","none");
//				})
				
				
				/*选择下拉框mouseover and mouseout*/
				$(".carC").mouseover(function(){
					$(".selectCarOne").css("display","block");
				})
				$(".selectCarOne").mouseover(function(){
					$(this).css("display","block");
				})
				$(".selectCarOne").mouseout(function(){
					$(this).css("display","none");
				})
				$(".carC").mouseout(function(){
					$(".selectCarOne").css("display","none");
				})
				/*选择车型下拉框*/
				$(".left01").each(function(){
					$(this).click(function(){
						$(".left01").removeClass("active");
						$(this).addClass("active");
					})
				})
				/*选择车型中下拉框中右侧内容*/
				$(".car-type-ul li").each(function(){
					
					$(this).click(function(){
						$(".car-type-ul li a").removeClass("current");
						$(".car-type-ul li a span").removeClass("current");
						$(".car-type-ul li a i").css("display","none");;
						$(this).find("a i").css("display","block");
						$(this).find("a").addClass("current");
						$(this).find("a span").addClass("current");
						$(".cXuan").text($(this).find("a p").text());
						$(".right_content h3").text($(this).find("a p").text());
						$(".selectCarOne").css("display","none");
					})
				})
			
				//参数配置表中头部显示左右滑动

				if($("#tb_Paramhead th").length<=5){
					$(".leftThUp").css("display","none");
				}else{
					$(".leftThUp").css("display","block");
				}
				var interTime = $("#tb_Paramhead th:first").width();
				var curIndex01 = 0;
			
				$('.simBtn').click(function(){
					//if( $(this).hasClass('disabled') ) return false;
					
					if ($(this).hasClass('leftThUp')) {
						if(curIndex01>0){
							--curIndex01;
						}else{curIndex01=0;}
					}else{
						if(curIndex01<=$("#tb_Paramhead li").length){
							++curIndex01;
						}
					}
						$("#tb_Paramhead th").eq(0).css({"marginLeft" : -curIndex01*interTime + "px"}, 600);
						
				});	

				
				// 图片左右滚动
				var count = $("#imageMenu li").length - 4; /* 显示 6 个 li标签内容 */
				var interval = $("#imageMenu li:first").width();
				var curIndex = 0;
				
				$('.scrollbutton').click(function(){
					if( $(this).hasClass('disabled') ) return false;
					
					if ($(this).hasClass('smallImgUp')) --curIndex;
					else ++curIndex;
					
					$('.scrollbutton').removeClass('disabled');
					if (curIndex == 0) $('.smallImgUp').addClass('disabled');
					if (curIndex == count-1) $('.smallImgDown').addClass('disabled');
					
					$("#imageMenu ul").stop(false, true).animate({"marginLeft" : -curIndex*interval + "px"}, 600);
				});	
				// 解决 ie6 select框 问题
				$.fn.decorateIframe = function(options) {
			        if ($.browser.msie && $.browser.version < 7) {
			            var opts = $.extend({}, $.fn.decorateIframe.defaults, options);
			            $(this).each(function() {
			                var $myThis = $(this);
			                //创建一个IFRAME
			                var divIframe = $("<iframe />");
			                divIframe.attr("id", opts.iframeId);
			                divIframe.css("position", "absolute");
			                divIframe.css("display", "none");
			                divIframe.css("display", "block");
			                divIframe.css("z-index", opts.iframeZIndex);
			                divIframe.css("border");
			                divIframe.css("top", "0");
			                divIframe.css("left", "0");
			                if (opts.width == 0) {
			                    divIframe.css("width", $myThis.width() + parseInt($myThis.css("padding")) * 2 + "px");
			                }
			                if (opts.height == 0) {
			                    divIframe.css("height", $myThis.height() + parseInt($myThis.css("padding")) * 2 + "px");
			                }
			                divIframe.css("filter", "mask(color=#fff)");
			                $myThis.append(divIframe);
			            });
			        }
			    }
			    $.fn.decorateIframe.defaults = {
			        iframeId: "decorateIframe1",
			        iframeZIndex: -1,
			        width: 0,
			        height: 0
			    }
			    //放大镜视窗
			    $("#bigView").decorateIframe();
			    //点击到中图
			    var midChangeHandler = null;
				
			    $("#imageMenu li img").bind("click", function(){
					if ($(this).attr("id") != "onlickImg") {
						midChange($(this).attr("src").replace("jpg", "png"));
						$("#imageMenu li").removeAttr("id");
						$(this).parent().attr("id", "onlickImg");
					}
				}).bind("mouseover", function(){
					if ($(this).attr("id") != "onlickImg") {
						window.clearTimeout(midChangeHandler);
						midChange($(this).attr("src").replace("jpg", "png"));
						
					}
				})/*.bind("mouseout", function(){
					if($(this).attr("id") != "onlickImg"){
						$(this).removeAttr("style");
						midChangeHandler = window.setTimeout(function(){
							midChange($("#onlickImg img").attr("src").replace("jpg", "png"));
						}, 1000);
					}
				})*/;
			    function midChange(src) {
			        $("#midimg").attr("src", src).load(function() {
			            changeViewImg();
			        });
			    }
			    //大视窗看图
			    function mouseover(e) {
			        if ($("#winSelector").css("display") == "none") {
			            $("#winSelector,#bigView").show();
			        }
			        $("#winSelector").css(fixedPosition(e));
			        e.stopPropagation();
			    }
			    function mouseOut(e) {
			        if ($("#winSelector").css("display") != "none") {
			            $("#winSelector,#bigView").hide();
			        }
			        e.stopPropagation();
			    }
			    $("#midimg").mouseover(mouseover); //中图事件
			    $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件
			
			    var $divWidth = $("#winSelector").width(); //选择器宽度
			    var $divHeight = $("#winSelector").height(); //选择器高度
			    var $imgWidth = $("#midimg").width(); //中图宽度
			    var $imgHeight = $("#midimg").height(); //中图高度
			    var $viewImgWidth = $viewImgHeight = $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度
			
			    function changeViewImg() {
			        $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));
			    }
			    changeViewImg();
			  
			    $("#bigView").scrollLeft(0).scrollTop(0);
			    function fixedPosition(e) {
			        if (e == null) {
			            return;
			        }
			        var $imgLeft = $("#midimg").offset().left; //中图左边距
			        var $imgTop = $("#midimg").offset().top; //中图上边距
			        X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X
			        Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y
			        X = X < 0 ? 0 : X;
			        Y = Y < 0 ? 0 : Y;
			        X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;
			        Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;
			
			        if ($viewImgWidth == null) {
			            $viewImgWidth = $("#bigView img").outerWidth();
			            $viewImgHeight = $("#bigView img").height();
			            if ($viewImgWidth < 200 || $viewImgHeight < 200) {
			                $viewImgWidth = $viewImgHeight = 800;
			            }
			            $height = $divHeight * $viewImgHeight / $imgHeight;
			            $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);
			            $("#bigView").height($height);
			        }
			        var scrollX = X * $viewImgWidth / $imgWidth;
			        var scrollY = Y * $viewImgHeight / $imgHeight;
			        $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });
			        $("#bigView").css({ "top": 75, "left": $(".preview").offset().left + $(".preview").width() + 15 });
			
			        return { left: X, top: Y };
			    }
			    
			    
		