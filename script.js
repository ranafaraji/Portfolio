// header fixed

window.onscroll=function(){
	const docScrollTop=document.documentElement.docScrollTop;

	if(window.innerWidth>991){
		if(docScrollTop>100){
			document.querySelector("header").classList.add("fixed")
		}
		else{
			document.querySelector("header").classList.remove("fixed")
		}
	}
}


//navbar links

const navbar = document.querySelector(".navbar");
   a=navbar .document.querySelectorAll("a");
    

    a.forEach(function(element){
    	element.addEventListener("click",function(){
    		for(let i=0; i<a.length; i++){
    			a[i].classList.remove("active");
    		}
    		this.classList.add("active")
    			document.querySelector(".navbar").classList.toggle("show");
    	})
    })

    // hum-burger

    const hamBurger=document.querySelector(".ham-burger");

    hamBurger.addEventListener("click",function(){
    	document.querySelector(".navbar").classList.toggle("show");

    })


    // testimonial slider
    const sliderContainer=document.querySelector(".testi-slider");
    const slides=sliderContainer.children;
    const containerWidth=sliderContainer.offsetWidth;
    const margin:15;
    let itemPerSlide=0;

    //responsive
    const responsive=[
           {breakPoint:{width:0,item:1}},
           {breakPoint:{width:991,item:2}}
    ]

    function load(){
         for(let i=0; i<responsive.length; i++){
            if(window.innerWidth>responsive[i].breakPoint.width){
                itemPerSlide=responsive[i].breakPoint.item;
            }

         }

         start();
    }

    function start(){
        for(let i=0; i<slides.length; i++){
           slides[i].style.width=(containerWidth/itemPerSlide) + "px";
        }
    }