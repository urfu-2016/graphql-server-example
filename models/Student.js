'use strict';

let id = 5;

const students = [
    {
        id: '1',
        name: 'Максим',
        age: 22,
        groupId: '1'
    },
    {
        id: '2',
        name: 'Иван',
        age: 19,
        groupId: '3'
    },
    {
        id: '3',
        name: 'Александр',
        age: 18,
        groupId: '2'
    },
    {
        id: '4',
        name: 'Пётр',
        age: 20,
        groupId: '3'
    }
];

module.exports = class Student {
    static findAll() {
        return students;
    }

    static findById(id) {
        return students.find(student => student.id === id);
    }

    static create(student) {
        const createdStudent = Object.assign({
            id: String(id++)
        }, student);

        students.push(createdStudent);

        return createdStudent;
    }

    static update(id, data) {
        const index = students.findIndex(student => student.id === id);
        const student = students[index];

        student.name = data.name || student.name;
        student.age = data.age || student.age;
        student.groupId = data.groupId || student.groupId;

        return student;
    }

    static removeById(id) {
        const index = students.findIndex(student => student.id === id);

        students.splice(index, 1);

        return true;
    }
}
