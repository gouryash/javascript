console.log("welcome to newusMan Express")

let accordionNews=document.getElementById('accordionNews');
let xhr=new XMLHttpRequest()
xhr.open('GET',`
http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=df5dc7cca32e4c8aa13a306c24294bd1`,true)
xhr.onload=function(){
    console.log("onload")
    if(this.status===200){
        let myObj=JSON.parse(this.responseText)
        console.log(myObj)
        let articles=myObj.articles
        console.log(articles)
        let news=''
        articles.forEach(function(element,index){
            news+=`<div class="card">
            <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                 <b><span class="badge badge-primary">BreakingNews${index+1}</span></b>   ${element.title}
                </button>
              </h2>
            </div>
        
            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#accordionNews">
              <div class="card-body">
                ${element.content} <a href='${element.url}' target="_blank">Read More</a>
              </div>
            </div>
          </div>`
        })
        accordionNews.innerHTML=news
    }
    else{
        console.log("error ocuured")
    }
}
xhr.send()