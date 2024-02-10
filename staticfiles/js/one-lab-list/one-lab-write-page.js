$(document).ready(function() {
    $('.announce-button-icon').on("click", function(e) {
        var container = $('.announce-list-container');
        container.toggleClass('active');
    });
});



$(".input-member-email").on("input", function() {
    var inputValue = $(this).val().trim();
    var insertButton = $(".insert-btn");

    if (inputValue !== "") {
      insertButton.css({
        "background-color": "#363a3e",
        "border-color": "#363a3e",
        "color": "#fff",
        "cursor": "pointer",
        "pointer-events": "auto",
        "opacity": "0.9"
      });
      insertButton.on("mouseover", function() {
        $(this).css("opacity", "1");
      });
    } else {
      insertButton.css({
        "background-color": "#495057",
        "border-color": "#495057",
        "color": "#fff",
        "cursor": "default",
        "pointer-events": "none",
        "opacity": "0.4"
      });
    }
    insertButton.on("mouseout", function() {
          $(this).css("opacity", "0.9");
      });
  });



$(".insert-btn").on("click", function() {
    var inputValue = $('.input-member-email').val();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(inputValue)) {
        $(".helper-message-email").css({"display": "none"})
        $('.input-member-email').css({"border": "1px solid #dde2e6"})
        
    }else {
        $(".helper-message-email").css({"display": "block"})
        $('.input-member-email').css({"border" : "1px solid #e54545"})
    }
});


$("input[type=text]").on("input", function(e) {
    var inputValue = $(this).val().trim();
    var closestSection = $(e.target).closest('.open-link-fields');
    var childElementA = closestSection.find('a.go-link-btn');
    var childElementB = closestSection.find('button.go-link-btn');

    if (inputValue !== "") {
        console.log(childElementA)
        childElementA.css({"display":"inline-flex"})
        childElementB.css({"display":"none"})
    }else {
        childElementA.css({"display":"none"})
        childElementB.css({"display":"inline-flex"})
    }
});



$(".sidebar-menu-item-nav-link").on("click", function(e) {
    // e.preventDefault();
    if($('.sidebar-reward-sublist-container').css('display') == 'block'){
        $('.sidebar-reward-sublist-container').css("display", "none");
    }else {
        $(".sidebar-reward-sublist-container").css("display", "block");
    }
})

$(document).ready(function(){
    $("a.sidebar-menu-item-nav-link").on("click", function(e){
        e.preventDefault();
        var svgIcon = $(this).find("svg.sidebar-menu-open-icon.active");
        
        if (svgIcon.length > 0) {
            var currentRotation = getRotationDegrees(svgIcon);
            console.log(currentRotation)
            if (currentRotation === 90) {
                svgIcon.css('transform', 'rotate(-90deg)');
                
            } else {
                svgIcon.css('transform', 'rotate(90deg)');
            }
        }
    });
});

// 회전각을 구하는 함수
function getRotationDegrees(element) {
    var transform = element.css('transform');
    if (transform === 'none') return 0;

    var values = transform.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.atan2(b, a);
    var degrees = angle * (180 / Math.PI);

    return (degrees < 0) ? degrees + 360 : degrees;
}



$("a.sidebar-sublist-nav-link").on("click", function(e) {
    // e.preventDefault();
    var notActive = $("a.sidebar-sublist-nav-link").not(".sublist-active");
    var active = $("a.sidebar-sublist-nav-link.sublist-active");

    if (active.length === 0) {
        // 현재 active 클래스가 없으면 클래스를 추가
        notActive.addClass("sublist-active");
    } else {
        // 현재 active 클래스가 있으면 모든 요소에서 클래스를 제거한 후 현재 요소에 추가
        $("a.sidebar-sublist-nav-link").removeClass("sublist-active");
        $(this).addClass("sublist-active");
    }
});





















