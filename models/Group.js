'use strict';

let id = 4;

const groups = [
    {
        id: '1',
        name: 'МГКН-1'
    },
    {
        id: '2',
        name: 'МТ-101'
    },
    {
        id: '3',
        name: 'ФИИТ-201'
    }
];

module.exports = class Group {
    static findAll() {
        return groups;
    }

    static findById(id) {
        return groups.find(group => group.id === id);
    }

    static create(group) {
        const createdGroup = Object.assign({
            id: String(id++)
        }, group);

        groups.push(createdGroup);

        return createdGroup;
    }

    static update(id, data) {
        const index = groups.findIndex(group => group.id === id);
        const group = groups[index];

        group.name = data.name || group.name;

        return group;
    }

    static removeById(id) {
        const index = groups.findIndex(group => group.id === id);

        groups.splice(index, 1);

        return true;
    }
}
