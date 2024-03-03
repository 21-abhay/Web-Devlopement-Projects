let API_key = "aa383d22519e42ac948f8f3ccd4169e7"





const container = document.getElementById('container');
const spinner = document.getElementById('spinner');
const pageno = document.getElementById('pageno');

let articles,total,totalpage;
let page = 1;
let category = 'general';

async function fetchnews(){
    spinner.style.display = 'block';
    container.innerHTML = '';

    const res = await fetch(`https://newsapi.org/v2/top-headlines?language=en&apiKey=${API_key}&category=${category}&pageSize=12&page=${page}`);
    const data = await res.json();
    articles = data.articles;
    total = data.totalResults;
    totalpage = total/12;
    console.log(articles)
    setNews();
}
fetchnews();

function pagination(event){
    let p = event.target.textContent;
    if(p=='Prev'){
        if(page>1){
            page -=1;
            fetchnews();
        }
    }
    else if(p=='Next'){
        if(page<=totalpage){
            page +=1;
            fetchnews();
        }
    }
    pageno.textContent = page;
}

function categorical_news(event){
    category = event.target.textContent;
    fetchnews();
}




function setNews(){
    spinner.style.display = 'none';
    if(!articles.length){
        container.innerHTML = '<h1>No Result Found</h1>'
    }
    for (let i = 0; i < articles.length; i++) {
        let news = document.createElement('div');
        let img = document.createElement('img');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let a = document.createElement('a');

        h4.textContent = articles[i].title;
        p.textContent = articles[i].description.slice(0,120)+'...'
        a.textContent = 'Read More';
        img.setAttribute('src',articles[i].urlToImage);
        a.setAttribute('href',articles[i].url);

        news.appendChild(img)
        news.appendChild(h4)
        news.appendChild(p)
        news.appendChild(a)
        news.setAttribute('class','news');
        container.appendChild(news)

    }
}