const selectMenu=document.querySelectorAll("select");
const cuurentTime=document.querySelector("#time");
const btn=document.querySelector("#btn");
let alarmTime;
let isAlarm=false;


const audio=new Audio('audio/mixkit-alert-alarm-1005.wav');
audio.loop=true;



for(let i=12;i>0;i--){
       i<10 ?i="0"+i :i=i;
    let option=`<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
}

for(let i=59;i>=0;i--){
    
    i<10 ?i="0"+i :i=i;
 let option=`<option value="${i}">${i}</option>`
 selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option)
}

for(let i=2;i>0;i--){
    
 let ampm= i== 1 ?"AM" :"PM"
 let option=`<option value="${ampm}">${ampm}</option>`
 selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option)
}

let h,m,s,ampm;

const timingFn=(()=>{
    let date=new Date();
       h=date.getHours();
       m=date.getMinutes();
       s=date.getSeconds();
      ampm="AM"
    
      if(h>12){
       ampm="PM"
       h=h-12;
       }
       if(h<10){
           h="0"+h
       }
       
       if(m<10){
           m="0"+m
       }
       
       if(s<10){
           s="0"+s
       }
      cuurentTime.innerText=`${h}:${m}:${s}:${ampm}`
   
    
      })
         console.log(isAlarm);

      setInterval(()=>{
        if(alarmTime==`${h}:${m}:${ampm}`){
            audio.play();
            isAlarm=true;
            btn.innerText="Stop Alarm";
            if(isAlarm){
                btn.addEventListener("click",()=>{
                    audio.pause();
                    alarmTime="";
                    btn.innerText="Set Alarm"
                })
            }
        }
        timingFn()
      },1000)

btn.addEventListener("click",setAlarm);
function setAlarm(){
   let time=`${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`

   if(time.includes("Hours") || time.includes("Minuts") || time.includes("AM/PM")){
    return alert("plz Select valid Time")
   }
   alarmTime=time;
  }

   