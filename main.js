const pies = [
    {
      name: 'Dutch Apple Pie',
      imageUrl: 'https://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/2013/09/30859_Recipeimage_620x413_dutch_apple_pie.jpg',
      instructor: 'zoe',
      iceCream: 'Vanilla',
    },
    {
      name: 'Berry Pie',
      imageUrl: 'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
      instructor: 'zoe',
      iceCream: 'banana',
    },
    {
      name: 'Pumpkin Pie',
      imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
      instructor: 'michael',
      iceCream: 'Vanilla',
    },
    {
      name: 'Shoo Fly Pie',
      imageUrl: 'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
      instructor: 'michael',
      iceCream: 'Coffee',
    },
    {
      name: 'Pecan Pie',
      imageUrl: 'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
      instructor: 'callan',
      iceCream: 'Vanilla',
    },
    {
      name:'Keylime Pie',
      imageUrl: 'https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0020/img38l.jpg',
      instructor: 'callan',
      iceCream: 'none',
    },
  ];

const printToDom = (divId, textToPrint) => {
    const containerId = document.getElementById(divId);
    containerId.innerHTML = textToPrint;
} 

const buildCard = (arr) => {
    let domString = '<div class="row">';
    for (let i = 0; i < arr.length; i++) {
        const currentPie = arr[i];
        domString += 
        // <h1>${currentPie.name}</h1>
        `
        <div class="col-3">
        <div class="card">
            <img src="${currentPie.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${currentPie.name}</h5>
            <p class="card-text">${currentPie.instructor} , ${currentPie.iceCream}</p>
        </div>
        </div>
        </div>
        `;
    }
    domString += '</div>';
   
    printToDom('pie-zone', domString)
}

// Creating another function to filter animals
// e stands for the details of the event
const filterPies = (e) => {
    // create an empty array to give me a container to put in filtered animals
    let tastyPies = []
    // just seeing if it worked and to see the event listener details
    console.log(e.target.id);
    // running loop to iterate over parameter
    for (let i = 0; i < pies.length; i++) {
        // measuring to see if conditional meets test
        if (e.target.id === pies[i].instructor) {
            // if statement is true add animal to the correct value
            tastyPies.push(pies[i]);
        }

    }

buildCard(tastyPies);
}

// creating variable to gain control of when the event listeners are activated
const activateEvents = () => {
    document.getElementById('callan').addEventListener('click', filterPies)
    document.getElementById('zoe').addEventListener('click', filterPies)
    document.getElementById('michael').addEventListener('click', filterPies)
    // added additional function to bring all pets back; not filtering
    // document.getElementById('all').addEventListener('click', () => {
        buildCard(pies)
    // }) 
}

// calling the function to activate listeners
activateEvents();