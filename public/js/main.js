fetch("/cheeses")
    .then(response => response.json())
    .then(data => showCards(data));
 
 
function showCards(data){
    console.log(data)
    const cards =  data;
    const cardContainer = document.querySelector(".card-container")
                                                                                                           
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        cardContainer.innerHTML += `
        <div>
        <h2> ${card.name} </h2>
        <p> ${card.desc} </p>
        </div>
        `;
    }
}