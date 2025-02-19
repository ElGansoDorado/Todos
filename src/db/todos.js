const date1 = new Date(2025, 1, 12, 10, 24);
const date2 = new Date(2025, 1, 14, 14, 47);

const todos = [
    {
        title: 'Изучить React',
        desc: 'Да поскорее!',
        image: '',
        done: true,
        createAt: date1.toLocaleString(),
        key: date1.getTime(),
    },
    {
        title: 'Написать первое React-приложение',
        desc: 'Список запланированных дел',
        image: '',
        done: false,
        createAt: date2.toLocaleString(),
        key: date2.getTime(),
    }
];

export default todos;