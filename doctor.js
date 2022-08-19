class Booking {
       constructor(name, tele, blood, date, kind) {
              this.name = name;
              this.tele = tele;
              this.blood = blood;
              this.date = date;
              this.kind = kind;
       }
}
let patient = [];

if (window.localStorage.getItem('tasks')) {
       patient = JSON.parse(window.localStorage.getItem('tasks'));
}

let input = document.querySelector('.input');
let add = document.querySelector('.add');
let tasks = document.querySelector('.tasks');
let patientName = document.querySelector('#name');
let patientNumber = document.querySelector('#number');
let blood = document.querySelector('#blood');
let date = document.querySelector('#date');
let select = document.querySelector('.form-select');
let save = document.querySelector('#save');
let pat = document.querySelector('.patient');
let mainName = document.querySelector('#patient-name');
let mainDate = document.querySelector('#patient-date');

for (let i = 0; i < patient.length; i++) {
       pat.innerHTML += `
            <div class="${patient[i].kind} All">
            <ul class=${i}>
            <li class="show">Show</li>
            <li>${patient[i].name}</li>
            <li class="hide">${patient[i].tele}</li>
            <li class="hide">${patient[i].blood}</li>
            <li class="hide">${patient[i].kind}</li>
            <li>${patient[i].date}</li>
            <li class="now">Now</li>
            <li class="delete">X</li>
            </ul>
            </div>`;
}

save.onclick = function () {
       if (
              patientName.value == '' ||
              patientNumber.value == '' ||
              blood.value == '0' ||
              date.value == '' ||
              select.value == '0'
       ) {
              alert('Please Check Your Details');
       } else {
              document.querySelector('.booking').classList.remove('open');

              patient.push(
                     new Booking(
                            patientName.value,
                            patientNumber.value,
                            blood.value,
                            date.value,
                            select.value
                     )
              );
              console.log(patient);
              pat.innerHTML += `
            <div class="${patient[patient.length - 1].kind} All">
            <ul class=${patient.length - 1}>
            <li class="show">Show</li>
            <li>${patient[patient.length - 1].name}</li>
            <li class="hide">${patient[patient.length - 1].tele}</li>
            <li class="hide">${patient[patient.length - 1].blood}</li>
            <li class="hide">${patient[patient.length - 1].kind}</li>
            <li>${patient[patient.length - 1].date}</li>
            <li class="now">Now</li>
            <li class="delete">X</li>
            </ul>
            </div>`;

              window.localStorage.setItem('tasks', JSON.stringify(patient));

              patientName.value = '';
              patientNumber.value = '';
              blood.value = '0';
              date.value = '';
              select.value = '0';
       }
};

/* link active featured */
const linkFeatured = document.querySelectorAll('.nav-link');

function activeFeatured() {
       linkFeatured.forEach((l) => l.classList.remove('active'));
       this.classList.add('active');
       document
              .querySelectorAll('.All')
              .forEach((e) => (e.style.display = 'none'));
       document
              .querySelectorAll(this.dataset.name)
              .forEach((e) => (e.style.display = 'block'));
       console.log(document.querySelectorAll(this.dataset.name));
}
linkFeatured.forEach((l) => l.addEventListener('click', activeFeatured));

document.addEventListener('click', function (e) {
       if (e.target.className == 'now') {
              e.target.parentElement.parentElement.classList.remove('Waiting');
              e.target.parentElement.parentElement.classList.remove('Coming');

              e.target.parentElement.parentElement.classList.add('Now');

              console.log(e.target.parentElement.parentElement);
       }
});

document.addEventListener('click', function (e) {
       if (e.target.className == 'delete') {
              e.target.parentElement.remove();
              patient.splice(e.target.parentElement.classList.value, 1);
              window.localStorage.removeItem('tasks');
              window.localStorage.setItem('tasks', JSON.stringify(patient));
              console.log(window.localStorage.tasks);
              console.log(e.target.parentElement.classList.value);
       }
});

document.addEventListener('click', function (e) {
       if (e.target.className == 'show') {
              document.querySelector('.details').innerHTML = `
       <ul>
                <li>Name:</li>
                <li>Phone:</li>
                <li>Blood Type:</li>
                <li>Kind:</li>
                <li>Date Barking:</li>
            </ul>
       <ul>${e.target.parentElement.innerHTML}</ul>`;
              document.querySelector('.main-detail').classList.add('open');
              console.log(e.target.parentElement.innerHTML);
       }
});
document.querySelector('#close').onclick = function () {
       document.querySelector('.main-detail').classList.remove('open');
};

// let arrOfTasks = [];
// if (window.localStorage.getItem('tasks')) {
//        arrOfTasks = JSON.parse(window.localStorage.getItem('tasks'));
// }

// getTasksFromLocalStorage();

// add.onclick = function () {
//        if (input.value !== '') {
//               AddTasksToArr(input.value);
//               input.value = '';
//        }
// };

// tasks.addEventListener('click', (e) => {
//        if (e.target.classList.contains('delete')) {
//               deleteElementFromLocalStorage(
//                      e.target.parentElement.getAttribute('id')
//               );
//               e.target.parentElement.remove();
//        }
// });

// function AddTasksToArr(Text) {
//        const task = {
//               id: Date.now(),
//               title: Text,
//               completed: false,
//        };

//        arrOfTasks.push(task);

//        addElementTopage(arrOfTasks);

//        addTasksToLocalStorage(arrOfTasks);
// }

// function addElementTopage(arrOfTasks) {
//        tasks.innerHTML = '';

//        arrOfTasks.forEach((task) => {
//               let element = document.createElement('p');
//               element.className = 'task';
//               if (task.completed) {
//                      element.classList.add('done');
//               }
//               element.setAttribute('id', task.id);
//               element.appendChild(document.createTextNode(task.title));
//               let span = document.createElement('span');
//               span.appendChild(document.createTextNode('Delete'));
//               span.className = 'delete';
//               element.appendChild(span);
//               tasks.appendChild(element);
//        });
// }

// function addTasksToLocalStorage(arrOfTasks) {
//        window.localStorage.setItem('tasks', JSON.stringify(arrOfTasks));
// }

// function getTasksFromLocalStorage() {
//        let data = window.localStorage.getItem('tasks');
//        if (data) {
//               let tasks = JSON.parse(data);
//               addElementTopage(tasks);
//        }
// }

// function deleteElementFromLocalStorage(ttd) {
//        arrOfTasks = arrOfTasks.filter((task) => task.id != ttd);

//        addTasksToLocalStorage(arrOfTasks);
// }

document.getElementById('add').onclick = function () {
       document.querySelector('.booking').classList.add('open');
};
document.querySelector('.booking .main span').onclick = function () {
       document.querySelector('.booking').classList.remove('open');
};
