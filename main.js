const options = { weekday: 'long', year: 'numeric',day: 'numeric', month: 'long' };
const f= (s)=>{
  if(s=="HackerRank")
  return "https://shorturl.at/rtY69";
  if(s=="CodeChef")
  return "https://shorturl.at/AJN06";
  if(s=="HackerEarth")
  return "https://shorturl.at/hEFJ2";
  if(s=="LeetCode")
  return "https://shorturl.at/NOQY4";
  if(s=="TopCoder")
  return "https://nyweekly.com/wp-content/uploads/2022/07/30.png";
  if(s=="CodeForces")
  return "https://shorturl.at/puQX4";
  if(s=="AtCoder")
  return "https://shorturl.at/akrsG";


}
let p=fetch("https://kontests.net/api/v1/all")
p.then((value)=>{
    return value.json();
}).then((value)=>{
    ot="";
    bt="";
    ct="";
    for(let i of value)
    {
        let st=new Date(i.start_time)
        let en=new Date(i.end_time)
        console.log(i)
        if(i.status=="CODING")
        {ot=ot+`<div class="card cb" >
        <div class="card-body">
        <img src="${f(i.site)}" class="fmg"></img>
          <h5 class="card-title ct">${i.name}</h5>
          <h5 class="card-title ct">${i.site}</h5>
          <p class="card-title bd" ><span class="b-t">Start :</span> ${st.toLocaleDateString(undefined,options)} ${st.toLocaleTimeString()}</p>
          
          <p class="card-title bd"><span class="b-t">End :</span> ${en.toLocaleDateString(undefined,options)}  ${en.toLocaleTimeString()}</p>
        
          <div class="btj">
          <a href="${i.url}" target=" " class="btb btn">Visit</a>
          </div>
        </div>
      </div>`}
      else if(i.in_24_hours!='No')
      {
        bt=bt+`<div class="card cb" >
        <div class="card-body">
        <img src="${f(i.site)}" class="fmg"></img>
          <h5 class="card-title ct">${i.name}</h5>
          <h5 class="card-title ct">${i.site}</h5>
          <p class="card-title bd" ><span class="b-t">Start :</span> ${st.toLocaleDateString(undefined,options)} ${st.toLocaleTimeString()}</p>
          
          <p class="card-title bd"><span class="b-t">End :</span> ${en.toLocaleDateString(undefined,options)}  ${en.toLocaleTimeString()}</p>
          
          <div class="btj">
          <a href="${i.url}" target=" " class="btb btn">Visit</a>
          </div>
        </div>
      </div>`
      }
      else
      {
        ct=ct+`<div class="card cb" >
        <div class="card-body">
        <img src="${f(i.site)}" class="fmg"></img>
          <h5 class="card-title ct">${i.name}</h5>
          <h5 class="card-title ct">${i.site}</h5>
          <p class="card-title bd" ><span class="b-t">Start :</span> ${st.toLocaleDateString(undefined,options)} ${st.toLocaleTimeString()}</p>
          
          <p class="card-title bd"><span class="b-t">End :</span> ${en.toLocaleDateString(undefined,options)}  ${en.toLocaleTimeString()}</p>
         
          <div class="btj">
          <a href="${i.url}" target=" " class="btb btn">Visit</a>
          </div>
        </div>
      </div>`
      }
      
    }
    if(ot.length==0)
    document.getElementsByClassName('bx')[0].innerHTML=`<div class="txt">No Contest</div>`
    else
    document.getElementsByClassName('bx')[0].innerHTML=ot
    if(bt.length==0)
    document.getElementsByClassName('bx')[1].innerHTML=`<div class="txt">No Contest</div>`
    else
    document.getElementsByClassName('bx')[1].innerHTML=bt
    if(ct.length==0)
    document.getElementsByClassName('bx')[2].innerHTML=`<div class="txt">No Contest</div>`
    else
    document.getElementsByClassName('bx')[2].innerHTML=ct
    // console.log(ot);
})