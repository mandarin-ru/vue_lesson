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
            } else {
                this.showFormFlag = false;
            }
        },
        addStudent(e) {
            if (!this.validate()) {
                this.course.studentList.push({
                    id: this.course.studentList[this.course.studentList.length - 1].id + 1,
                    name: this.name, surname: this.surname,
                    secondname: this.secondname
                });
                this.name = this.surname = this.secondname = '';
            }
            return true;
        },
        deleteStudent(studentId) {
            for (let i = 0; i < this.course.studentList.length; i++) {
                if (this.course.studentList[i].id == studentId) {
                    this.course.studentList.splice(i, 1);
                }
            }
        },
        validate() {
            let error = false;
            if (!this.name) {
                this.errors.push('Требуется указать имя.');
                error = true;
            }
            if (!this.surname) {
                this.errors.push('Требуется указать фамилию.');
                error = true;
            }
            if (!this.secondname) {
                this.errors.push('Требуется указать отчество.');
                error = true;
            }
            return error;
        }
    }
});