async function foo(){
var res = await fetch("https://api.chucknorris.io/jokes/random");
var res1 = await res.json();
try {
    var div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${res1.value}</h5>
    </div>
  </div>`;
  document.body.appendChild(div);
    console.log(res1.value)
} catch (error) {
    console.log(error)
}
}

foo();