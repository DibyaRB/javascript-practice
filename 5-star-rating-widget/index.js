const starWrapper= document.querySelector(".stars");
const stars= document.querySelectorAll(".stars a");

stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{

        starWrapper.classList.add("disabled");

        stars.forEach((otherStar, otherIdx)=>{
            if(otherIdx <= index){
                otherStar.classList.add("active");
            }  
        });


        console.log(`star of index ${index + 1} was clicked`);
    });
});