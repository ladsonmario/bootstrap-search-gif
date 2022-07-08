let input = document.querySelector('#input');

input.addEventListener('keyup', searchGif);
document.querySelector('#input--icon').addEventListener('click', searchGif);

async function searchGif (event) {
    
    if(input.value != '' && event.code === 'NumpadEnter' || event.code === 'Enter' || event.type === 'click') {        
        document.querySelector('.gif--field').innerHTML = '<div class="mt-4">Loading...</div>';

        let req = await fetch(`https://tenor.googleapis.com/v2/search?q=${input.value}&key=AIzaSyD0Gtagyi2BUKkJ-pwVD8irjgHq3kABbcQ&limit=8`);
        let result = await req.json();

        console.log(result);
    }
    
}