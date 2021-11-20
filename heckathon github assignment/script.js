getAllData("Raj");
var title =document.createElement("h1");
title.setAttribute("id","myHeading");
title.innerText=("GITHUB API OF USERS AND REPOS");
document.body.appendChild(title);

var indCard =document.createElement("div");
indCard.setAttribute("id","inputDiv");

async function getAllData(username)
{
    try
    {
        var data = await fetch("https://api.github.com/users/"+username);
        var obj =  await data.json();
        console.log(obj.id);
        console.log(obj.repos_url);
    }

    catch(error)
    {
        console.log('error in data fetching')
    }
}
console.log('check1')







