const generateForm = document.querySelector('.generate-form');
const imageGallery = document.querySelector('.image-gallery');

const OPENAI_API_KEY = "INSERT API KEY HERE";

const updateImageCard = (imgDataArray) => {
    imgDataArray.forEach((imgObject, index) =>{
        const imgCard = imageGallery.querySelectorAll(".img-card")[index];
        const imgElement = imgCard.querySelector("img");
        const downloadBtn = imgCard.querySelector(".download-btn");

        const aiGeneratedImg = `data:image/jpeg;base64,${imgObject.b64_json}`;
        imgElement.src = aiGeneratedImg;

        imgElement.onload = () =>{
            imgCard.classList.remove("loading");
            downloadBtn.setAttribute('href',aiGeneratedImg);
            downloadBtn.setAttribute('download', `${new Date().getTime()}.jpg`);
        }

    })
}

const generateAiImages = async (userPrompt, userImgQuantity) =>{
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body:JSON.stringify({
                prompt:userPrompt,
                n:Number(userImgQuantity),
                size:'512x512',
                response_format:'b64_json'
            })
        });
        const {data} = await response.json();
        updateImageCard([...data]);
    }
    catch(error){

    }
}

const handleFormSubmission = (e) => {
    console.log(e.srcElement);

    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;
    //console.log(userPrompt,userImgQuantity);

    const imgCardMarkup = Array.from({
        length: userImgQuantity
    }, () => {
        return(
    `<div class="img-card loading">
        <img src="images/loader.svg" alt="image"/>
        <a href="#" class="download-btn">
            <img src="images/download.svg" alt="download icon" srcset="">
        </a>
    </div>`
        );
    }
    ).join("");

    console.log(imgCardMarkup);
    imageGallery.innerHTML = imgCardMarkup;

    generateAiImages(userPrompt, userImgQuantity);

}

generateForm.addEventListener("submit", handleFormSubmission)