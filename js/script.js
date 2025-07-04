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

gsap.fromTo(
    ".works-grid",
        1,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".work-item",
                start: "top center",
                markers: false
            }
        }
)

gsap.fromTo(
    ".about-description",
        1,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".about-description",
                start: "top center",
                markers: false
            }
        }
)
gsap.fromTo(
    ".about-photo",
        1,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".about-photo",
                start: "center center",
                markers: false
            }
        }
)