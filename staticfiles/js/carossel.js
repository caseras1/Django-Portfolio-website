let CapitalOfEuropa = [
    {
        name:'Roma',
        images:[
            'https://www.roma.com/wp-content/uploads/2021/01/Roma-Roma-com.jpg',
            'https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1640842147/puguiorqbrtywiwsmx15.jpg',
            'https://www.archeoroma.it/wp-content/uploads/colosseo-roma-anfiteatro-flavio.jpg'
        ],
    },
    {
        name:'Parigi',
        images:[
            'https://www.reggiosera.it/photogallery_new/images/2022/12/parigi-29986.660x368.jpg',
            'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2019/06/GettyImages-502622451.jpg?v=1559911141',
            'https://hips.hearstapps.com/hmg-prod/images/arc-de-triomphe-paris-royalty-free-image-1639054664.jpg?crop=0.67506xw:1xh;center,top&resize=640:*'
        ],
    },
    {
        name:'Berlino',
        images:[
           'https://www.travel365.it/foto/brandenburgertor-berlino-2.jpg',
           'https://www.annapernice.com/wp-content/uploads/2018/01/berlin-3051937_1280.jpg',
           'https://www.aviontourism.com/images/1920-900-fix/f5a8060c-28a9-4782-b925-4ae019124ebb'
        ],
    },
    {
        name:'Londra',
        images:[
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=700&h=500&s=1',
            'https://www.vivalingue.com/wp-content/uploads/2019/08/STUDIARE-A-LONDRA-1900x1080.jpg',
            'https://images.placesonline.com/photos/17203_london_travel_guide.jpg?quality=80&w=700'
        ],
    },
    {
        name:'Madrid',
        images:[
            'https://www.upcars.it/wp-content/uploads/Thanks-to-Sebastian-Dubiel-Madrid.jpg',
            'https://cdn.tiqets.com/wordpress/blog/wp-content/uploads/2020/02/16152822/shutterstock_1921785788-scaled.jpg',
            'https://res.klook.com/image/upload/Mobile/City/xuyvqatzegyg4xpbsnti.jpg'
        ],
    },
    {
        name:'Vienna',
        images:[
            'https://www.civitatis.com/f/austria/viena/viena-m.jpg',
            'https://www.fulltravel.it/wp-content/uploads/2009/09/Panorama-di-Vienna-capitale-Austria.jpg',
            'https://larchitetto.it/wp-content/uploads/2023/10/Progetto-senza-titolo-2023-10-09T113438.003.jpg'
        ],
    },        
   
]

//DOM's element
const sectionCarousel = document.querySelector('section.carousel')
const ulCityList = document.querySelector('ul.city-list')

const btnGoOn = document.querySelector('button.go-on');
const btnGoBack = document.querySelector('button.go-back');


//Data
let activeIndex=0;

let autoindex=0;

//App
starterCarosol();

const divList = document.querySelectorAll('div.box-image-active');
divList[activeIndex].classList.add('active');

setInterval(autoChangeImg,4000);

btnGoOn.addEventListener('click',function(){
    if(activeIndex==divList.length-1){
        activeIndex=0;
    }else{
        activeIndex++;
    }

    const activeImage=document.querySelector('.active');
    activeImage.classList.remove('active');
    divList[activeIndex].classList.add('active');
})

btnGoBack.addEventListener('click',function(){
    if(activeIndex==0){
        activeIndex=divList.length-1
    }else{
        activeIndex--
    }

    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
    divList[activeIndex].classList.add('active');
})

createCityList();



//FUNCTION

/**
 * Stamp all carousel, but we can see only the image active
 */
function starterCarosol(){
    CapitalOfEuropa.forEach((city, index) => {
        const newDivImage = document.createElement('div');
        newDivImage.innerHTML=`
        <img src="${city.images[1]}" class="image-carousel" alt="${city.name} image">
        <span class="name-postion">${city.name}</span>
        `
        newDivImage.classList.add('box-image-active','invisible');
        sectionCarousel.append(newDivImage);

    });    
}

/**
 * Create carousel's footer with name of citys
 */
function createCityList(){
    CapitalOfEuropa.forEach((city, index) =>{
        const liElement = document.createElement('li');
        liElement.innerHTML=`<span class="li-city-list"> ${city.name}</span>`
        ulCityList.append(liElement);

        liElement.addEventListener('click',function(){
            divList.forEach(city => {
                if(city.classList.contains('active')){
                    city.classList.remove('active');
                }
            })
            divList[index].classList.add('active');
            activeIndex=index;
        })
    })
}

/**
 * autochange the image active
 */
function autoChangeImg(){
const imgActive = document.querySelector('div.active>img');
    if(imgActive.getAttribute('src')==CapitalOfEuropa[activeIndex].images[2]){
        imgActive.setAttribute('src',CapitalOfEuropa[activeIndex].images[0]);
        autoindex=0;
    }else{
        imgActive.setAttribute('src',CapitalOfEuropa[activeIndex].images[autoindex+=1]);
    }
}













