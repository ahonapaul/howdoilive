const day1 = {
    meal: 
    {   
        time: 3,
        food: ["bread", "rice", "veggies", "fruits"],
        feeling: function(notfood){
            let stomachcap = [0, 1];
            notfood = Math.floor(Math.random(stomachcap) * stomachcap.length);

            let val;

            if(notfood == 0){
                val = "100%"
            };
            if(notfood == 1){
                val = "0%"
            };

            return val;
        },
    },
    
    sleep: 
    {
        time: 0.0,
        disturbances: 2,
        feeling: function(sleeptime){
            let sleephours = [3, 4, 5, 6, 7];
            sleeptime = Math.floor(Math.random(sleephours) * sleephours.length);

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
        time: 2.75,
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
        time: 0.0,
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

function onHover(className){
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

function onOut(className){
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