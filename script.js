var setTime;
var leftTime;
var intervalId;

function Start()
{
    setTime=parseInt(document.getElementById("inputHours").value)*3600
        +parseInt(document.getElementById("inputMinutes").value)*60
        +parseInt(document.getElementById("inputSeconds").value)
    setTime*=100;
    document.getElementById("setupMode").style.display="none";
    document.getElementById("workMode").style.display="block";
    leftTime=setTime;
    intervalId = setInterval("Timing()",10)
}
function Reset()
{
    clearInterval(intervalId);
    leftTime=setTime;
    document.getElementById("setupMode").style.display="block";
    document.getElementById("workMode").style.display="none";
    document.getElementById("screen").style.backgroundColor="slateblue";
}
function Pause_Resume()
{
    if(leftTime<=0)return
    if(document.getElementById("buttonPause_Resume").value=="暂停")
    {
        document.getElementById("buttonPause_Resume").value="继续";
        clearInterval(intervalId)
    }
    else
    {
        document.getElementById("buttonPause_Resume").value="暂停";
        clearInterval(intervalId);
        intervalId=setInterval("Timing()",10)
    }
}


function Timing()
{
    if(leftTime==0)
    {
        document.getElementById("screen").style.backgroundColor="lightcoral";
        return
    }
    leftTime--;
    var displayMS=leftTime%100;
    var displayHours=parseInt(leftTime/360000);
    var displayMinutes=parseInt(leftTime/6000)%60;
    var displaySeconds=parseInt(leftTime/100)%60;
    if(displayHours<10)displayHours='00'+displayHours;
    else if(displayHours<100)displayHours='0'+displayHours;
    if(displayMinutes<10)displayMinutes='0'+displayMinutes;
    if(displaySeconds<10)displaySeconds='0'+displaySeconds;
    if(displayMS<10)displayMS='0'+displayMS;
    document.getElementById("timer").innerHTML=displayHours+':'+displayMinutes+':'+displaySeconds+':'+displayMS
}


function hoursAutoFill() {
    var val=parseInt(document.getElementById("inputHours").value);
    if(isNaN(val))
        document.getElementById("inputHours").value="000";
    else {
        if (val > 999)
            document.getElementById("inputHours").value = "999";
        else if (val < 0)
            document.getElementById("inputHours").value = "000";
        else if (val < 10)
            document.getElementById("inputHours").value = "00" + val;
        else if (val <100)
            document.getElementById("inputHours").value = "0"+val;
    }
}
function minutesAutoFill() {
    var val=parseInt(document.getElementById("inputMinutes").value);
    if(isNaN(val))
        document.getElementById("inputMinutes").value="00";
    else {
        if(val>59)
            document.getElementById("inputMinutes").value="59";
        else if(val<0)
            document.getElementById("inputMinutes").value="00";
        else if(val<10)
            document.getElementById("inputMinutes").value="0"+val;

    }
}
function secondsAutoFill() {
    var val=parseInt(document.getElementById("inputSeconds").value);
    if(isNaN(val))
        document.getElementById("inputSeconds").value="00";
    else {
        if(val>59)
            document.getElementById("inputSeconds").value="59";
        else if(val<0)
            document.getElementById("inputSeconds").value="00";
        else if(val<10)
            document.getElementById("inputSeconds").value="0"+val;
    }
}
