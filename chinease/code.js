const Hour_display1 = document.getElementById("display")
const Hour_display2 = document.getElementById("display2")
const Hour_display3 = document.getElementById("display3")
const Hour_display4 = document.getElementById("display4")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const Numbers = {
    1:"yi",
    2:"er",
    3:"san",
    4:"si",
    5:"wu",
    6:"liu",
    7:"qi",
    8:"ba",
    9:"jiu",
    0:"leng",
    10:"shi"
}
const i_dont_know_what_to_call_this = {
    15:"yi ke",
    30:"ban(er ke)",
    45:"san ke"
}
function thi(){
    Hour_display1.innerText = ""
    Hour_display2.innerText = ""
    Hour_display3.innerText = ""
    Hour_display4.innerText = ""
    if(Number(hour.value) <= 12 && Number(hour.value)>0 && Number(minute.value) <= 60 && Number(minute.value)>0){
        Hour_display1.innerText = convert_to_chinese(Number(hour.value)) + " dian " + convert_to_chinese(Number(minute.value)) + " fen"
        Hour_display2.innerText = "cha " + convert_to_chinese((60-Number(minute.value))) + " " + convert_to_chinese((Number(hour.value)+1)%12) + " dian"
        if(Number(minute.value) == 15 || Number(minute.value) == 30 ||Number(minute.value) == 45){
            Hour_display3.innerText = convert_to_chinese(Number(hour.value)) + " dian " + convert_to_chinese(Number(minute.value),1)
            Hour_display4.innerText = "cha " + convert_to_chinese((60-Number(minute.value)),1) + " " + convert_to_chinese((Number(hour.value)+1)%12) + " dian"

        }
    }else{
        Hour_display1.innerText = "Please insert an hour and minute correctly"

    }
}
function convert_to_chinese(num,purpose = 0){
    res = ""
    arr = []
    if(purpose == 1){
        if(num == 15 || num == 30 || num || 45){
            return i_dont_know_what_to_call_this[num]
        }
    }
    for(i of String(num)){
        arr.push(Number(i))
    }
    if (String(num).length == 1){
        return Numbers[num]
    }else if(arr[0] == 1){
        if(arr[1]==0){
            return Numbers[10]
        }
        res += Numbers[10] + " "
        res += Numbers[arr[1]]
        return res
    }else{
        if(arr[1]==0){
            return Numbers[arr[0]] + " " + Numbers[10]
        }
        res += Numbers[arr[0]] + " "
        res += Numbers[10] + " "
        res += Numbers[arr[1]]
        return res
    }


}

setInterval(thi,1000)