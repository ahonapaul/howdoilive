const day1 = {
    meal: 
    {   
        stomachcap: [0, 1],
        feeling: function(food){
            food = Math.floor(Math.random(this.stomachcap) * this.stomachcap.length);

            let val;

            if(food == 0){
                val = "100%"
            };
            if(food == 1){
                val = "0%"
            };

            return val;
        },
    },
    
    sleep: 
    {
        sleephours: [3, 4, 5, 6, 7],       
        feeling: function(sleeptime){
            sleeptime = Math.floor(Math.random(this.sleephours) * this.sleephours.length);

            let val;

            if(sleeptime == 0){
                val = "0%";
            };

            if(sleeptime == 1){
                val = "25%";
            };

            if(sleeptime == 2){
                val = "50%";
            };

            if(sleeptime == 3){
                val = "75%";
            };

            if(sleeptime == 4){
                val = "100%";
            };
             
            return val;
        }
    },

    social: 
    {
        people: [0, 1, 2, 3, 4],
        feeling: function(talktime){
            talktime = Math.floor(Math.random(this.people) * 5);
            let val;

            if(talktime == 0){
                val = "100%";
            };

            if(talktime == 1){
                val = "75%";
            };

            if(talktime == 2){
                val = "50%";
            };

            if(talktime == 3){
                val = "25%";
            };

            if(talktime == 4){
                val = "0%";
            };

            return val;
        }
    },

    move:
    {
        distance: [0, 1, 2, 3, "more"],
        feeling: function(movetime){
            let movehours = this.distance;
            movetime = Math.floor(Math.random(movehours) * this.distance.length);
            let val;

            if(movetime == 0){
                val = "0%"
            };

            if(movetime == 1){
                val = "25%"
            };

            if(movetime == 2){
                val = "50%";
            };

            if(movetime == 3){
                val = "75%";
            };

            if(movetime == 4){
                val = "100%"
            };

            return val;
        }

    }
};

let className;

function onHover(className){ //page1 hovers

    let element = document.querySelector(className);

    if(className == '.meal'){
        element.innerHTML = day1.meal.feeling();
        element.style.color = "greenyellow";
    }

    if(className == '.sleep'){
        element.innerHTML = day1.sleep.feeling();
        element.style.color = "greenyellow";
    }
    
    if(className == '.social'){
        element.innerHTML = day1.social.feeling();
        element.style.color = "greenyellow";
    }

    if(className == '.move'){
        element.innerHTML = day1.move.feeling();
        element.style.color = "greenyellow";
    }

}

function onClick(){

    let mealElem = document.querySelector(".meal2");

    mealElem.addEventListener('click', function(){
        mealElem.innerHTML = day1.meal.feeling();
        mealElem.style.color = "greenyellow";
    })

    let sleepElem = document.querySelector(".sleep2");

    sleepElem.addEventListener('click', function(){
        sleepElem.innerHTML = day1.sleep.feeling();
        sleepElem.style.color = "greenyellow";
    })

    let socialElem = document.querySelector(".social2");

    socialElem.addEventListener('click', function(){
        socialElem.innerHTMl = day1.social.feeling();
        socialElem.style.color = "greenyellow";
    })

    let moveElem = document.querySelector(".move2");

    moveElem.addEventListener('click', function(){
        moveElem.innerHTMl = day1.move.feeling();
        moveElem.style.color = "greenyellow";
    })

}

function onOut(className){ //page 1 onout

    let element = document.querySelector(className);

    if(className == ".meal"){
        element.innerHTML = "HEALTH";
        element.style.color = "black";
    }

    if(className == ".sleep"){
        element.innerHTML = "ENERGY";
        element.style.color = "black";
    }

    if(className == ".social"){
        element.innerHTML = "COMMS";
        element.style.color = "black";
    }

    if(className == ".move"){
        element.innerHTML = "SPEED";
        element.style.color = "black";
    }
}