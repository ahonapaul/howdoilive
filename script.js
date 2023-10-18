const day1 = {
    meal: 
    {   
        time: 0.0,
        food: [food1, food2, food3],
        feeling: function(notfood){
            let stomachcap = [0, 1];
            notfood = Math.floor(Math.random(stomachcap) * 2);
            if(notfood == 0){
                console.log("feeling good");
                return;
            }
            if(notfood == 1){
                console.log("feeling weird");
                return;
            }
        },
    },
    
    sleep: "I never get sleep",

    social: {
        time: 2.75,
        people: [name1, name2, name3],
        feeling: function(talktime){
            let talkhours = [0, 1, 2, 3, 4];
            talktime = Math.floor(Math.random(hours) * 5);

            if(talktime == 0){
                console.log("battery 100%");
                return;
            };

            if(talktime == 1){
                console.log("battery 75%");
                return;
            };

            //and so on
        }
    },
    //and more if i can think of some more factors
};
// console.log() can be changed with other things that can execute for final version
