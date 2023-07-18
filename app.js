
const form = document.querySelector('#sub-form');
const input = document.querySelector('#search');
const btn = document.querySelector('#btn');
const dBtn = document.querySelector('#dlt-btn');
const gifs = document.querySelector('#imgs');

form.addEventListener('submit', async function(e) {
    e.preventDefault()
    let inputVal = input.value;
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
        q: inputVal,
        api_key: 'KREMbb1zdMN5D0nr42NbCFAM7in5Mzzu'
        }
    });
    console.log(response)
    newGif(response.data)
})

function newGif(response) {
    let numResults = response.data.length;
    if (numResults) {
        let newCol = document.createElement('div');
        let newGif = document.createElement('img');
        newCol.className = 'col-md-4';
        let random = Math.floor(Math.random() * numResults);
        newGif.src = response.data[random].images.original.url;
        newGif.className = 'w-100'
        newCol.append(newGif);
        gifs.append(newCol);
    }
}
$("#dlt-btn").on("click", function() {
    $("#imgs").remove();
  });



/*
const $gifArea = $("#imgs");
const $searchInput = $("#search");



function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}



$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});


$("#dlt-btn").on("click", function() {
  $gifArea.empty();
});
*/
