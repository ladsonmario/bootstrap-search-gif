document.querySelector('#input').addEventListener('keyup', searchGif);
document.querySelector('#input--icon').addEventListener('click', searchGif);

async function searchGif (event) {
    
    if(input.value != '' && event.code === 'NumpadEnter' || event.code === 'Enter' || event.type === 'click') {  
        let input = document.querySelector('#input');

        document.querySelector('.gif--field').innerHTML = '<div class="col-md mt-4">Loading...</div>';

        let req = await fetch(`https://tenor.googleapis.com/v2/search?q=${input.value}&key=AIzaSyD0Gtagyi2BUKkJ-pwVD8irjgHq3kABbcQ&limit=8`);
        let reqJson = await req.json();

        console.log(reqJson);

        mountGifs(reqJson);

        function mountGifs(list) {
            let html = '';

            for(let i = 0; i < list.results.length; i++) {
                html += 
                    `<div class="col-md-4 d-flex justify-content-center align-items-center">
                        
                            <div class="p-2">
                                <img class="img-fluid img-thumbnail" src="${list.results[i].media_formats.tinygif.url}" />
                            </div>
                        
                    </div>`;
            }

            document.querySelector('.gif--field').innerHTML = html;
        }
    }    
}