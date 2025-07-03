document.addEventListener('DOMContentLoaded', function () {
    const worksItems = document.querySelectorAll('.works-article');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
                observer.unobserve(entry.target); // 一度表示されたら監視を停止
            }
        });
    }, {
        threshold: 0.1 // 要素の10%が表示されたら
    });

    worksItems.forEach(item => {
        observer.observe(item);
    });
});

$(function() {
  // ハンバーガーメニューをクリックしたときの処理
  $('.hamburger').click(function() {
    // メニューの表示切替
    $('.menu').toggleClass('open'); // メニューを開閉
    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass('active');
  });
});