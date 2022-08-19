// code your solution here
function saturdayFun(defaultActivity = 'roller-skate'){
    return `This Saturday, I want to ${defaultActivity}!`
}
function mondayWork(defaultActivity ='go to the office'){
    return `This Monday, I will ${defaultActivity}.`
}

function wrapAdjective(wrapper = '*'){
    return function (emphatic = 'special'){
        return `You are ${wrapper}${emphatic}${wrapper}!`
    }
}