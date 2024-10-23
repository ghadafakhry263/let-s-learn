var advArr=['lap1.PNG','lap2.PNG', 'lap3.PNG']
var myadv= document.getElementsByTagName('img')[0]
var i=1;
function showAdd(){
    myadv.src="./" + advArr[i];
    if(i==advArr.length-1){
        i=-1;
    }
    i++;

}


setInterval(showAdd,1500)
//************************************** */


function goToform(){
    open('file:///E:/projectJs/regstration.html', '_blanck',"width=420,height=400, screenX=350,screenY=200" )
}





document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './data.json', true); // استخدام طلب غير متزامن
    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            var selectElement = document.getElementById('sel');
            var courseDetails = document.getElementById('courseDetails');

            selectElement.addEventListener('change', function() {
                var selectedCourse = selectElement.value;
                courseDetails.innerHTML = ''; // مسح التفاصيل السابقة

                // البحث عن بيانات الدورة المختارة
                var courseData = res.find(function(item) {
                    return item.subject === selectedCourse;
                });

               
                    // إنشاء وإضافة العناصر الجديدة
                    var h1 = document.createElement('h1');
                    h1.innerText = courseData.mname;
                    h1.style.fontSize = '60px';
                    h1.style.color = 'orangered';
                    courseDetails.appendChild(h1);

                    var img = document.createElement('img');
                    img.src = courseData.imgs;
                    img.style.height = '300px';
                    img.style.width = '350px';
                    img.style.textAlign = 'center';
                    img.style.borderRadius = '20px';
                    img.style.cursor = 'pointer'; // تغيير المؤشر عند التمرير على الصورة
                    courseDetails.appendChild(img);

                    // إضافة مستمع للأحداث لتوجيه المستخدم إلى صفحة team.html عند النقر على الصورة
                    img.addEventListener('click', function() {
                        window.location.href = 'team.html';
                    });

                    var p3 = document.createElement('p');
                    p3.innerText = 'The price is ' + courseData.Price;
                    p3.style.fontSize = '40px';
                    p3.style.color = 'orangered';
                    courseDetails.appendChild(p3);

                    var p4 = document.createElement('p');
                    p4.innerText = 'Subject: ' + courseData.subject;
                    p4.style.fontSize = '40px';
                    p4.style.color = 'orangered';
                    courseDetails.appendChild(p4);

                    var p5 = document.createElement('p');
                    p5.innerText = 'Time: ' + courseData.Time;
                    p5.style.fontSize = '40px';
                    p5.style.color = 'orangered';
                    courseDetails.appendChild(p5);
               
            });
        } 
        
    };
    xhr.send();
});











 