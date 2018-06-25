export default function lastSevenDays () {

    var today = new Date();
    var oneDayAgo = new Date(today);
    var twoDaysAgo = new Date(today);
    var threeDaysAgo = new Date(today);
    var fourDaysAgo = new Date(today);
    var fiveDaysAgo = new Date(today);
    var sixDaysAgo = new Date(today);

    oneDayAgo.setDate(today.getDate() - 1);
    twoDaysAgo.setDate(today.getDate() - 2);
    threeDaysAgo.setDate(today.getDate() - 3);
    fourDaysAgo.setDate(today.getDate() - 4);
    fiveDaysAgo.setDate(today.getDate() - 5);
    sixDaysAgo.setDate(today.getDate() - 6);

    // var result0 = formatDate(today);
    // var result1 = formatDate(oneDayAgo);
    // var result2 = formatDate(twoDaysAgo);
    // var result3 = formatDate(threeDaysAgo);
    // var result4 = formatDate(fourDaysAgo);
    // var result5 = formatDate(fiveDaysAgo);
    // var result6 = formatDate(sixDaysAgo);

    // var result = result0+","+result1+","+result2+","+result3+","+result4+","+result5+","+result6;
    let week = [today,oneDayAgo,twoDaysAgo,threeDaysAgo,fourDaysAgo,fiveDaysAgo,sixDaysAgo]
    console.log("first week", week[1].getDate())
    for(let i =0; i < week.length; i++){
        
        let day = week[i].getDate().toString()
        console.log("day", day)
        if(day.length<2){
            
            day = day.toString()
            day = '0'+ day 
        }
        let month = (week[i].getMonth()+1).toString()
        if(month.length<2){
            month = month.toString()
            month = '0'.concat(month)
        }
        
        
        week[i]=`${week[i].getFullYear()}-${month}-${day}`
        
    }
    console.log("week", week)
    return(week);
}