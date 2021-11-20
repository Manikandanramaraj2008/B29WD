getAllData("Raj");
var title =document.createElement("h1");
title.setAttribute("id","myHeading");
title.innerText: ('GITHUB API OF USERS AND REPOS');
document.body.appendChild(title);

var indexCard =document.createElement("div");
indexCard.setAttribute("id","inputDiv");

async function getAllData(username)
{
    try
    {
        var data = await fetch("https://api.github.com/users"+username);
        var obj =  await data.json();
        console.log(obj);
    }

    catch(error)
    {
        console.log('error in data fetching')
    }
}
console.log('check1')







