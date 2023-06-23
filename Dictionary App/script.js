const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result= document.getElementById("result");
const btn=document.getElementById('Submit-btn');



btn.addEventListener(
    'click',
    ()=>{
        let inputWord=document.getElementById("word-search").value;
        console.log(inputWord);
       fetch(`${url}${inputWord}`)
       .then((resp)=>{
        resp.json();
       }).then((data)=>{
        console.log(data);
    })

    result.innerHTML=`
    <div class="word">
     <h2>${inputWord}</h2>
     <button>
         icon
     </button>
    </div>
    
    <div class="details">
     <p></p>
     <p>/sample/</p>
    </div>
    <p class="word-meaning">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, vero dolore. Veritatis.
    </p>
    <p class="word-example">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, deserunt.  
    // </p>
    `;

});

