

// --------------SET PROJECTS / MY WORK from JSON--------------
// Fetch the JSON data using Fetch API
fetch('projects.json')
.then(response => response.json())
.then(projects => {
    let icon = '<i class="fa-solid fa-link"></i>'
  projects.forEach(project => {
      var div = document.createElement('div');
    //   var img = document.createElement('img');
      var div2 = document.createElement('div');
      var h2 = document.createElement('h2');
      var p = document.createElement('p');
      var a = document.createElement('a');
      h2.innerText = project.name;
      p.innerText = project.description;
      a.innerHTML = icon;
      a.setAttribute('href',project.url)
      a.setAttribute('target','__blank')
      div2.appendChild(h2);
      div2.appendChild(p);
      div2.appendChild(a);
      div2.classList.add('layer')
      div.appendChild(div2);
      div.classList.add('project')
    document.getElementById('projects-container').appendChild(div)
  });
  
})
.catch(error => {
  // Handle fetch errors
  console.error('Error fetching data:', error);
});
