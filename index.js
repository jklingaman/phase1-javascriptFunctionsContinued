function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(special = '*'){
   const greeting = "You are";
    return function (defined = 'a hard worker') {
        return `${greeting} ${special}${defined}${special}!`;
        }
    }
