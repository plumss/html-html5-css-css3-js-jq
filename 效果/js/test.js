			//关闭按钮
			$(".closeBtn").click(function(){
				$(".black_overlay").css("display","none");
				$(".showBigImg").css("display","none");
				classIndex = "";
				$(".prevBtn").css("display","block");
				$(".nextBtn").css("display","block");
			})
			//点击表格中的图片弹出图片放大
			$("#tb tr td img").each(function(){
				$(this).click(function(){
					$(".simBigImg").css("display","none");
					classIndex = $(this).attr("class").split("smallImg ");//这空格必须有
					$(".black_overlay").css("display","block");
					$(".showBigImg").css("display","block");
					$(".showImg").attr("src",$(this).attr("src"));
					$(this).addClass("selectImg");
					
					
				})
			})
	
			//根据不同的行数给img加class(后面有用)
			$("#tb tr").each(function(i){
				$(this).find(".smallImg").addClass("img"+i);
			
			})
			
			$(".prevBtn").click(function(){
				console.log(classIndex[1]);
				$("."+classIndex[1]).each(function(i){
					
					var hasClass = $(this).hasClass("selectImg");
					console.log(hasClass);

					if(hasClass){
						if(i==0){
							$(".prevBtn").css("display","none");
						}else{
							$(".nextBtn").css("display","block");
							$(this).removeClass("selectImg");
							$(this).parent().prev().find("img").addClass("selectImg");
							var src = $(this).parent().prev().find("img").attr("src");
							console.log(src)
							$(".showImg").attr("src",src);
						}
						return false;
					}
				})
			})
			$(".nextBtn").click(function(){
				var leng = $("."+classIndex[1]).length-1;
				$("."+classIndex[1]).each(function(i){
					var hasClass = $(this).hasClass("selectImg");
					if(hasClass){
						if(i==leng){
							$(".nextBtn").css("display","none");
							console.log("已经到最后一张啦");
						}else{
							$(".prevBtn").css("display","block");
							$(this).removeClass("selectImg");
							$(this).parent().next().find("img").addClass("selectImg");
							var src = $(this).parent().next().find("img").attr("src");
							console.log(src)
							$(".showImg").attr("src",src);
						}
						return false;
					}
				})
			})
			$(".smallImg").each(function(i){
				$(this).mouseover(function(){
					$(".simBigImg").eq(i).find("img").attr("src",$(this).attr("src"));
					$(".simBigImg").eq(i).css("display","block");
				})
				$(this).mouseout(function(){
					$(".simBigImg").eq(i).css("display","none");
				})
			})