(function(){


    const DOM = {
        testimonials_items: document.querySelector(".testimonials_items"),
        nav: document.querySelector(".nav")
    }

    document.addEventListener("click", function(e){

        let elm = e.target;
        
        if(elm && elm.classList){
            
            // Testimonials Buttons
            if(elm.classList.contains("testimonials_btn")){

                // Regex to get style transform: translateX's value
                let styleRegex = /translateX\((-?\d*)px\)/gm;

                let regexMatches = styleRegex.exec(DOM.testimonials_items.getAttribute("style"));

                let styleValue = regexMatches && regexMatches[1] ? Number(regexMatches[1]) : 0;

                let itemWidth = DOM.testimonials_items.firstElementChild.offsetWidth + 3;

                console.log(itemWidth);

                // Check if comments are not at the start and end then move.

                if(elm.id === "testimonials_btn_right"){
                    
                    if((Math.abs(styleValue) + itemWidth) < DOM.testimonials_items.scrollWidth - itemWidth ){
                        moveTestimonialsItems(styleValue - itemWidth);
                    }

                }else if(elm.id === "testimonials_btn_left"){
                    if(styleValue < 0){
                        moveTestimonialsItems(styleValue + itemWidth);
                    }

                }else{
                    return;
                }
            }

        }   

    });

    /**
     * Set elements translateX and move testimonials.
     * @param {string} value Value to be setted.
     */
    function moveTestimonialsItems(value){
        DOM.testimonials_items.setAttribute("style", `transform:translateX(${value}px)`);
    }

})();