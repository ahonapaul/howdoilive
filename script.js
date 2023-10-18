const day1 = {
    meal: 
    {   
        time: 0.0,
        food: ["food1", "food2", "food3"],
        feeling: function(notfood){
            let stomachcap = [0, 1];
            notfood = Math.floor(Math.random(stomachcap) * 2);
            if(notfood == 0){
                console.log("full");
                return;
            };
            if(notfood == 1){
                console.log("hungry");
                return;
            };
        },
    },
    
    sleep: 
    {
        time: 0.0,
        disturbances: 2,
        feeling: function(sleeptime){
            let sleephours = [3, 4, 5, 6, 7];
            sleeptime = Math.floor(Math.random(sleephours) * sleephours.length);

            if(sleeptime == 0){
                console.log("dead");
                return;
            };

            if(sleeptime == 1){
                console.log("woozy");
                return;
            };

            if(sleeptime == 2){
                console.log("okay");
                return;
            };

            if(sleeptime == 3){
                console.log("good");
                return;
            };

            if(sleeptime == 4){
                console.log("refreshed");
                return;
            };
        }
    },

    social: 
    {
        time: 2.75,
        people: ["name1", "name2", "name3"],
        feeling: function(talktime){
            let talkhours = [0, 1, 2, 3, 4];
            talktime = Math.floor(Math.random(talkhours) * 5);

            if(talktime == 0){
                console.log("100%");
                return;
            };

            if(talktime == 1){
                console.log("75%");
                return;
            };

            if(talktime == 2){
                console.log("60%");
                return;
            };

            if(talktime == 3){
                console.log("45%");
                return;
            };

            if(talktime == 4){
                console.log("20%");
                return;
            };
        }
    },

    move:
    {
        time: 0.0,
        distance: [0, 1, 2, 3, "more"],
        feeling: function(movetime){
            let movehours = this.distance;
            movetime = Math.floor(Math.random(movehours) * this.distance.length);

            if(movetime == 0){
                console.log("static");
                return;
            };

            if(movetime == 1){
                console.log("unfit");
                return;
            };

            if(movetime == 2){
                console.log("moving");
                return;
            };

            if(movetime == 3){
                console.log("fit");
                return;
            };

            if(movetime == 4){
                console.log("tired");
                return;
            };
        }

    }
};

// console.log() can be changed with other things that can execute for final version
