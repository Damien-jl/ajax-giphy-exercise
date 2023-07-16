const form = document.querySelector('#sub-form');
const input = document.querySelector('#search');
const btn = document.querySelector('#btn');
const dBtn = document.querySelector('#dlt-btn');
const header = document.querySelector('h1');
const gifs = document.querySelector('#imgs');

form.addEventListener('submit', async function getRandomGif(e) {
    e.preventDefault()
    let inputVal = input.value;
    inputVal = '';
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
        q: inputVal,
        api_key: 'KREMbb1zdMN5D0nr42NbCFAM7in5Mzzu'
        }
    });
    console.log(response.data)
})

function newGif(res) {
    let results = res.data.length;
    if (results) {
        let newCol = document.createElement('div');
        let newGif = document.createElement('img');
        let random = Math.floor(Math.random() * results);
        newGif.src = `res.data${[random]}.images.original.url`;
        newCol.append(newGif);
        gifs.append(newCol);
    }
}
newGif();