
  // requestAPI = () => {
  //     var xhttp = new XMLHttpRequest();
  //     xhttp.onreadystatechange = function () {
  //         if (this.readyState == 4 && this.status == 200) {
  //             let data = JSON.parse(this.responseText)
  //             user = {
  //                 name: data['name'],
  //                 username: data['login'],
  //                 image: data['avatar_url'],
  //                 repo_count: data['public_repos'],
  //                 followers: data['followers']
  //             }
  //         }
  //     };
  //     xhttp.open("GET", " https://api.github.com/users/defunkt", true);
  //     xhttp.send();
  // }
  //
  // requestAPI()
  //
  // displayUser = () => {
  //     let cont = document.createElement('div')
  //     let h1 = document.createElement('h1')
  //     let p1 = document.createElement('p')
  //     let img = document.createElement('img')
  //
  //     h1.innerText = user['name']
  //     p1.innerText = user['followers']
  //     img.setAttribute('src', user['image'])
  //     cont.appendChild(h1)
  //     cont.appendChild(p1)
  //     cont.appendChild(img)
  //     document.body.appendChild(cont)
  // }```
  //
  // Message Input
  //
  //
  // Message #software


  function webName(webName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(webName).style.display = "block";
    elmnt.style.backgroundColor = color;

  }
  document.getElementById("defaultOpen").click();
