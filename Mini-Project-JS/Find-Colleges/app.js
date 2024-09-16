let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let input=document.querySelector("#college-search").value;
    let collegesArr=await getCollege(input);
    Arrangelist(collegesArr);

});

function Arrangelist(collegesArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(coll of collegesArr){
        let li=document.createElement("li");
        li.innerText=coll.name;
        list.appendChild(li);
    }
}


async function getCollege(country) {
    try{
        let res=await axios.get(url+country);
        return res.data;
    }
    catch(e){
        console.log("Error :",e);
        return [];
    }
}

