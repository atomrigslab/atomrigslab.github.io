$(function () {
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY; // 현재 스크롤 위치
    var targetElement = document.querySelector('#header'); // class명을 추가/삭제할 대상 요소
  
    if (scrollPosition > 0) {
      targetElement.classList.add('fixed'); // 스크롤이 발생한 경우 class명 추가
    } else {
      targetElement.classList.remove('fixed'); // 스크롤이 맨 위로 올라간 경우 class명 삭제
    }
  });

});


