var myArr = [
    {
        mname: "Jone Peter",
        subject: "English",
        Time: "25 hr",
        Price: "20 $",
        img1: "./english.PNG",
        img2: "./jone.PNG",
        id: 0
    },
    {
        mname: "Marwa Faisel",
        subject: "Science",
        Time: "30 hr",
        Price: "25 $",
        img1: "./science.PNG",
        img2: "./mar.PNG",
        id: 1
    },
    {
        mname: "Ghada Fakhry",
        subject: "Math",
        Time: "20 hr",
        Price: "15 $",
        img1: "./math.PNG",
        img2: "./gha.PNG",
        id: 2
    },
    {
        mname: "Martina Wadea",
        subject: "Programming",
        Time: "50 hr",
        Price: "40 $",
        img1: "./programming.PNG",
        img2: "./mr.PNG",
        id: 3
    }
];

// function displayTeacherDetails(teacher) {
//     document.getElementById('teacher-name').innerText = teacher.mname;
//     document.getElementById('teacher-subject').innerText = "Subject: " + teacher.subject;
//     document.getElementById('teacher-time').innerText = "Time: " + teacher.Time;
//     document.getElementById('teacher-price').innerText = "Price: " + teacher.Price;
//     document.getElementById('teacher-img1').src = teacher.img1;
//     document.getElementById('teacher-img2').src = teacher.img2;
//     document.getElementById('teacher-details').style.display = 'block';
// }

// function addCourse(teacher) {
//     var courseList = document.getElementById('course-list');
//     var listItem = document.createElement('li');
//     listItem.innerHTML = teacher.mname + " - " + teacher.subject + 
//         '<span class="remove-btn" onclick="removeCourse(this)">[Remove]</span>';
//     courseList.appendChild(listItem);
// }

// function removeCourse(element) {
//     element.parentElement.remove();
// }

// var addButtons = document.querySelectorAll('.add-course');
// addButtons.forEach(function(button, index) {
//     button.addEventListener('click', function() {
//         displayTeacherDetails(myArr[index]);
//         addCourse(myArr[index]);
//     });
// });