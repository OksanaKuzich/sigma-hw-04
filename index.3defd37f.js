!function(){var e=document.querySelector("#footerDate"),t=(new Date).getFullYear();e.innerHTML=t,function(){var e=document.querySelector(".news__list").querySelectorAll(".news__item");e.forEach((function(e){return e.classList.remove("news__transition")}));var t=new IntersectionObserver((function(e){e.forEach((function(e){("function"!=typeof getCurrentAnimationPreference||getCurrentAnimationPreference())&&(e.isIntersecting?e.target.classList.add("news__transition"):e.target.classList.remove("news__transition"))}))}));e.forEach((function(e){return t.observe(e)}))}();new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:70,breakpoints:{1440:{width:1350,slidesPerView:2,spaceBetween:155}},loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});window.addEventListener("scroll",(function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("progressBar").style.width=e+"%"}));document.querySelector(".signUp__form").addEventListener("submit",(function(e){e.preventDefault();var t={name:e.target.elements.name.value,surname:e.target.elements.surname.value,email:e.target.elements.email.value};console.log(t),localStorage.setItem("person",JSON.stringify(t))}))}();
//# sourceMappingURL=index.3defd37f.js.map
