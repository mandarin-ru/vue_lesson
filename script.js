new Vue({
    el: '#course',
    data: {
        course: {
            id: 1,
            theme: "Тема курса",
            name: "Название курса",
            description: "Описание курса",
            dateStart: new Date('2020-06-01'),
            linkToVideo: "Ссылка на видео",
            studentList: [
                {id: 1, name: 'Иван', surname: 'Алексеев', secondname: 'Авксентий'},
                {id: 2, name: 'Адам', surname: 'Кюри', secondname: 'Аврелиан'},
                {id: 3, name: 'Владислав', surname: 'Франко', secondname: 'Анатолий'},
                {id: 4, name: 'Всеволод', surname: 'Шумахер', secondname: 'Аполлос'},
                {id: 5, name: 'Дамир', surname: 'Островский', secondname: 'Африкан'},
            ]
        },
        name: '',
        surname: '',
        secondname: '',
        showFormFlag: false,
        errors: []
    },
    methods: {
        showForm() {
            if (!this.showFormFlag) {
                this.showFormFlag = true;
                document.getElementById('add_form').style.display = 'block';
            } else {
                this.showFormFlag = false;
                document.getElementById('add_form').style.display = 'none';
            }
        },
        addStudent(e) {

            if (!validate(this)) {
                this.course.studentList.push({
                    id: this.course.studentList.length + 1,
                    name: this.name, surname: this.surname,
                    secondname: this.secondname
                });
                this.name = this.surname = this.secondname = '';
                e.target.reset();
            }
            e.preventDefault();
            return true;
        },
        deleteStudent(studentId) {
            this.course.studentList.splice(studentId, 1);
        }
    }
});
function validate(element) {
    var error = false;
    element.errors = [];
    if (!element.name) {
        element.errors.push('Требуется указать имя.');
        error = true;
    }
    if (!element.surname) {
        element.errors.push('Требуется указать фамилию.');
        error = true;
    }
    if (!element.secondname) {
        element.errors.push('Требуется указать отчество.');
        error = true;
    }
    return error;
}