class Storage {

    static addLectureToStorage(newLecture) {
        let lectures = this.getLectureFromStorage();

        lectures.push(newLecture);
        localStorage.setItem("lectures", JSON.stringify(lectures));

    }
    static getLectureFromStorage() {
        let lectures;

        if (localStorage.getItem("lectures") === null) {
            lectures = [];
        }
        else {
            lectures = JSON.parse(localStorage.getItem("lectures"));

        }

        return lectures;
    }
    static deleteLectureFromStorage(lectureTitle) {
        let lectures = this.getLectureFromStorage();
        // Splice
        lectures.forEach(function (lec, index) {
            if (lec.lecture === lectureTitle) {
                lectures.splice(index, 1);
            }
        });

        localStorage.setItem("lectures", JSON.stringify(lectures));

    }
    static clearAllLecturesFromStorage() {

        localStorage.removeItem("lectures");

    }

}
