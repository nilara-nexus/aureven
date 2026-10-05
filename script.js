/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
            .querySelector(".loader")
            .classList.add("hide");

    },1200);

});


/* =========================================================
   HEADER SCROLL
========================================================= */

const header =
    document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menu =
    document.getElementById("menu");

const nav =
    document.getElementById("nav");

menu.addEventListener("click",()=>{

    nav.classList.toggle("open");

});


document.querySelectorAll(".nav a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("open");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold:.12
        }

    );

revealElements.forEach(element=>{

    observer.observe(element);

});


/* =========================================================
   NEWSLETTER
========================================================= */

const newsletter =
    document.getElementById("newsletterForm");

newsletter.addEventListener("submit",(event)=>{

    event.preventDefault();

    const input =
        newsletter.querySelector("input");

    if(input.value.trim()){

        alert(
            "Welcome to the AUREVÉN letter."
        );

        input.value="";

    }

});


/* =========================================================
   COLLECTION DRAG SCROLL
========================================================= */

const collection =
    document.querySelector(".collection-track");

let dragging=false;
let startX;
let scrollLeft;


collection.addEventListener("mousedown",(event)=>{

    dragging=true;

    startX =
        event.pageX -
        collection.offsetLeft;

    scrollLeft =
        collection.scrollLeft;

});


collection.addEventListener("mouseleave",()=>{

    dragging=false;

});


collection.addEventListener("mouseup",()=>{

    dragging=false;

});


collection.addEventListener("mousemove",(event)=>{

    if(!dragging) return;

    event.preventDefault();

    const x =
        event.pageX -
        collection.offsetLeft;

    const walk =
        (x-startX)*1.5;

    collection.scrollLeft =
        scrollLeft-walk;

});


/* =========================================================
   SMOOTH ANCHOR OFFSET
========================================================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",(event)=>{

        const href =
            anchor.getAttribute("href");

        if(href === "#") return;

        const target =
            document.querySelector(href);

        if(!target) return;

        event.preventDefault();

        const offset=70;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({

            top:position,

            behavior:"smooth"

        });

    });

});


/* =========================================================
   HERO VIDEO
========================================================= */

const heroVideo =
    document.querySelector(".hero-video");

if(heroVideo){

    heroVideo.play().catch(()=>{

        console.log(
            "Autoplay will begin after browser permission."
        );

    });

}


/* =========================================================
   IMAGE HOVER EFFECT
========================================================= */

document
.querySelectorAll(
    ".botanical-card,.product,.journal-card"
)
.forEach(card=>{

    card.addEventListener("mousemove",(event)=>{

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - .5) * -2;

        const rotateY =
            ((x / rect.width) - .5) * 2;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave",()=>{

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

});


/* =========================================================
   PREVENT PRODUCT # LINK JUMP
========================================================= */

document
.querySelectorAll(".product-link")
.forEach(link=>{

    link.addEventListener("click",(event)=>{

        event.preventDefault();

    });

});
