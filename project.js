const form = document.getElementById("lecture-form");
const titleElement = document.querySelector("#title");
const gradeElement = document.querySelector("#grade");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-lectures");


eventListeners();

function eventListeners() {
    form.addEventListener("submit", addLecture);
    document.addEventListener("DOMContentLoaded", function () {
        let lectures = Storage.getLectureFromStorage();
        UI.loadAllLectures(lectures);

    });

    cardbody.addEventListener("click", deleteLecture);
    clear.addEventListener("click", clearAllLectures);

}
function addLecture(e) {
    const lecture = titleElement.value;
    const grade = gradeElement.value;

    if (lecture === "" || grade === "") {
        UI.displayMessages("Please fill the area or areas.", "danger");
    }
    else {
        const newLecture = new Lecture(lecture, grade);

        UI.addLectureToUI(newLecture); // Arayüze film ekleme
        Storage.addLectureToStorage(newLecture); // Storage'a Film Ekleme

        UI.displayMessages("Lecture added successfully.", "success");

    }

    UI.clearInputs(titleElement, gradeElement);
    e.preventDefault();

}

function deleteLecture(e) {

    if (e.target.id === "delete-lecture") {
        UI.deleteLectureFromUI(e.target);
        Storage.deleteLectureFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Deletion successful.", "success");

    }

}
function clearAllLectures() {

    if (confirm("Are you sure?")) {
        UI.clearAllLecturesFromUI();
        Storage.clearAllLecturesFromStorage();

    }

}