const textarea = document.getElementById('textareainput');
let block;


textarea.addEventListener("input", () => {
    textarea.style.height = 'auto'; // reset height
    textarea.style.height = textarea.scrollHeight + 'px';
});


function addBlock(){
    const block = `
        <div class='block'>
            <p>${textarea.value}</p>
            <br>
            <label>
                <div class='block_div'>
                    <input type='checkbox' class='block_checkbox'>
                </div>
            </label>
            <br>
            <button class='block_btn' onclick='removeBlock(this)'>Remove</button>
        </div>
    `;
    document.getElementById("block_container").insertAdjacentHTML("beforeend", block);
    textarea.textContent = "";
}

function removeBlock(botao){
    botao.parentElement.remove();
}

function removeAll(){
    const blocks = document.querySelectorAll("#block_container .block");
    blocks.forEach(block => block.remove());
}