const reviews = [
    {
        id: 1,
        name: 'John Doe',
        job: 'Project Manager',
        img: 'https://www.mlive.com/resizer/v2/https%3A%2F%2Fadvancelocal-adapter-image-uploads.s3.amazonaws.com%2Fimage.mlive.com%2Fhome%2Fmlive-media%2Fwidth2048%2Fimg%2Fkzgazette_impact%2Fphoto%2F21772033-large.jpg?auth=d17c814616f7ea501fdf4a7429d1514846d7db0fc18ba29da4abfaf808e033f5&width=500&quality=90',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A corrupti magni laboriosam, blanditiis non natus nemo suscipit aut assumenda officia unde placeat dignissimos quas excepturi?'
    },

    {
        id: 2,
        name: 'Will Smith',
        job: 'Actor',
        img: 'https://media.vanityfair.com/photos/6093fa0a62a830a58c97ecdd/1:1/w_2000,h_2000,c_limit/503285822',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, obcaecati sunt! Voluptas eaque amet nemo temporibus aperiam ex corrupti rerum sunt fugiat quam, itaque deleniti nobis architecto, dolores voluptatibus necessitatibus aspernatur blanditiis at.'
    },


    {
        id: 3,
        name: 'Steven Dickson',
        job: 'Software Dveloper',
        img: 'https://media.istockphoto.com/id/1175279479/photo/portrait-of-a-happy-black-man.jpg?s=612x612&w=0&k=20&c=CGYHPtNt5lZDEwETZTHO8CsMBtI4EhNgK_b7RLE7MVA=',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia quidem ut omnis, consequuntur distinctio obcaecati aspernatur accusamus adipisci illo quos et ipsa? Cumque amet deleniti consectetur suscipit?'
    },


    {
        id: 4,
        name: 'Ryan Stella',
        job: 'Software Engineer',
        img: 'https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quis quisquam eum fuga totam nostrum soluta beatae cum aut nam, minus odit?'
    },


    {
        id: 5,
        name: 'Jacob Sam',
        job: 'UX / UI Design',
        img: 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quis provident voluptatem repudiandae reiciendis pariatur eveniet blanditiis itaque?'
    },


    {
        id: 6,
        name: 'Son Lee',
        job: 'Web Developer',
        img: 'https://tracywrightcorvo.com/wp-content/uploads/2019/02/business_headshot-3.jpg',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel neque quibusdam mollitia nostrum eos, deleniti, iusto tempora numquam, itaque repellendus ullam pariatur inventore dignissimos illo beatae voluptate non. Saepe adipisci, aliquam eaque voluptatum ex earum.'
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');


const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');
const suprise = document.querySelector('.suprise-btn');



let curentReview = 0;


function showPerson() {
    const person = reviews[curentReview];
    img.src= person.img;
    author.textContent = person.name;
    job.textContent = person.job;
    info.textContent = person.info;
};

window.addEventListener('DOMContentLoaded', function() {
    showPerson();
})



next.addEventListener('click', function() {
 curentReview++;
 if(curentReview > reviews.length - 1){
    curentReview = 0;
 }
 showPerson();
});


prev.addEventListener('click', function() {
 curentReview--;
 if(curentReview < 0) {
    curentReview = reviews.length - 1;
 }
 showPerson();
});

suprise.addEventListener('click', function() {
    curentReview = Math.floor(Math.random() * reviews.length);
    showPerson();
});