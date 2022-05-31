const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const form = document.querySelector('form');



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res  => {
            const data =  res.data;
            alert(data);
        });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);

//create name when user clicks submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.querySelectorAll('#enteredName');
    const subBtn = document.getElementById('subname');

    const [ name ] = user;

    const body = {
        name: name.value
    };

    subBtn.style.display = "none";

    axios.post('http://localhost:4000/api/user/', body).then(()  => {    
    console.log(body, 'name created');
    getUser();
    })
    .catch((err) => console.log(err));
});

const upName = document.getElementById('update');

//update the user's name
upName.addEventListener('click', () => {
    const updatedName = document.getElementById('enteredName').value;
    
    axios.put(`http://localhost:4000/api/updateName/${updatedName}`)
    .then((res) => {
        const data = res.data;
        alert(data);
    })
    .catch((err) => console.log(err));
});

//greet the user with their name
const getUser = () => {
    axios.get('http://localhost:4000/api/getName/').then(({data}) => {
        const container = document.getElementById('name-con');
        const user = document.createElement('div');
        
        user.innerHTML = `Hello ${data['name']}`;
        
        container.appendChild(user);
        console.log(data, 'getUser');
    }).catch((err) => {
        console.log(err);
    })
};


const deleteBtn = document.getElementById('clear');

//delete button
deleteBtn.addEventListener('click', () => {
    axios.delete(`http://localhost:4000/api/delete`)
    .then(() => {
        alert('Your name and text have been deleted');
        const container = document.getElementById('name-con');
        container.innerHTML = "";
    })
    .catch((e) => console.log(e));
});
