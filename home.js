const data = {
    "0": {
        "type": 0,
        "name": "Emily Kinney",
        "review": "At first, I had my doubts about online counselling, but I gave it a shot and was pleasantly surprised to learn how much it can actually aid you. Dr. Sayesta created a wonderfully peaceful, healing environment where I felt free to share details with her that I would normally feel embarrassed to do so. She offers much-appreciated compassion instead of any judgement, followed by advice. She can pinpoint the source of my problems and the exercises I can do to solve them. I occasionally feel depressed again, but he constantly inspires me to get back on the right track. A truly helpful person is someone who won't judge you.",
        "stars": 5
    },

    "1": {
        "type": 1,
        "name": "Solous Victor",
        "review": "At first, I had my doubts about online counselling, but I gave it a shot and was pleasantly surprised to learn how much it can actually aid you. Dr. Sayesta created a wonderfully peaceful, healing environment where I felt free to share details with her that I would normally feel embarrassed to do so. She offers much-appreciated compassion instead of any judgement, followed by advice.",
        "stars": 3
    }
}

let currentCard = 0;

const getDefaultProfile = () => {
    if(data[currentCard].type){
        return "./assets/male-default.jpg";
    }
    else{
        return "./assets/female-default.jpg";    
    }
}

const changeCard = (move) => {
    const reviewsCard = document.getElementById("reviews-card");

    currentCard += move;

    if(currentCard < 0){
        currentCard = 0;
        return;
    }
    
    if(currentCard == Object.keys(data).length){
        currentCard = Object.keys(data).length - 1;
        return;
    }
    
    reviewsCard.innerHTML = `
        <div class="review-card-image">
            <img src=${data[currentCard].image ? data[currentCard].image : getDefaultProfile()} alt=${data[currentCard].name}/>
            <p style="color: #6D2E46; margin-top: 10px;">${data[currentCard].name}</p>
        </div>

        <div class="review-card-content">
            <div id="stars-display"></div>
            <p class="review-card-content-text-stars">${data[currentCard].stars}/5</p>
            <p class="review-card-content-data">${data[currentCard].review}</p>
        </div>
    `

    // add stars
    const starsDisplay = document.getElementById("stars-display");
    let stars = ""

    // filled stars
    for(let i = 0; i < data[currentCard].stars; i++){
        stars += "f";
    }

    // unfilled
    for(let i = data[currentCard].stars; i < 5; i++){
        stars += "u";
    }

    // add to DOM
    starsDisplay.innerHTML = stars;
}