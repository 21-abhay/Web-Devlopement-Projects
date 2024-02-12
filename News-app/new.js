

const btn = document.getElementById('btn');
const container = document.getElementById('container');
// const img = document.getElementById('img');
// const heading = document.getElementById('heading');
// const link = document.getElementById('link');
// const para = document.getElementById('para');

let articles,total;


let fetchArticles = async()=>{
    console.log('Abhay')
}

btn.addEventListener('click', async()=>{
    const res = await fetch(`https://newsapi.org/v2/top-headlines?language=en&apiKey=aa383d22519e42ac948f8f3ccd4169e7&pageSize=12&page=${1}`);
    const data = await res.json();
    console.log("total Articles : ",data.totalResults);
    console.log("Articles : ",data.articles);
    articles = data.articles;
    total = data.totalResults;
    setNews();
});

function setNews(){
    for (let i = 0; i < articles.length; i++) {  
        let news = document.createElement('div');
        let img = document.createElement('img');
        let a = document.createElement('a');
        let p = document.createElement('p');
        let h4 = document.createElement('h4');
        
        h4.textContent = articles[i].title;
        p.textContent = articles[i].description.slice(0,120)+'..';
        a.textContent = 'Read More';
        img.setAttribute('src',articles[i].urlToImage);
        a.setAttribute('href',articles[i].url);

        news.appendChild(img);
        news.appendChild(h4);
        news.appendChild(p);
        news.appendChild(a);
        news.setAttribute('class','news');
        container.appendChild(news);
    }
}
