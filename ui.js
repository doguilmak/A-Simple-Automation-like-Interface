class UI {

    static addLectureToUI(newLecture) {

        const lectureList = document.getElementById("lectures");

        lectureList.innerHTML += `
       
             <tr>
                 <td>${newLecture.lecture}</td>
                 <td>${newLecture.grade}</td>
                 <td><a href="#" id = "delete-lecture" class = "btn btn-danger">Delete Lecture</a></td>
             </tr>
       `;

    }

    static clearInputs(element1, element2) {
        element1.value = "";
        element2.value = "";

    }

    static displayMessages(message, type) {
        
        const cardBody = document.querySelector(".card-body");
        const div = document.createElement("div");

        div.className = `alert alert-${type}`;
        div.textContent = message;

        cardBody.appendChild(div);

        setTimeout(function () {
            div.remove();
        }, 1000);

    }

    static loadAllLectures(lectures) {

        const lectureList = document.getElementById("lectures");

        lectures.forEach(function (lecture) {
            lectureList.innerHTML += `<tr>
             <td>${lecture.lecture}</td>
             <td>${lecture.grade}</td>
             <td><a href="#" id = "delete-lecture" class = "btn btn-danger">Delete Lecture</a></td>
         </tr>`;
        });
    }
    
    static deleteLectureFromUI(element) {
        element.parentElement.parentElement.remove();
    }
    
    static clearAllLecturesFromUI() {

        const lectureList = document.getElementById("lectures");

        while (lectureList.firstElementChild !== null) { // Child Olduğu Sürece
            lectureList.firstElementChild.remove();
        }
    }
}
