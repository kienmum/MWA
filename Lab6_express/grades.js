function Grades () {
    var items = [];
    function get(id) {
        let item = items.filter(i => i.id == id).pop();
        return item;
        
    }
    function add(id, name, course, grade) {
        let item = new Item(id, name, course, grade);
        items.push(item);
        console.log('the current items after adding:')
        items.forEach(i=>console.log(i));
    }
    function addItem(item) {
        let newItem = new Item(item.id, item.name, item.course, item.grade);
        items.push(newItem);
        console.log('the current items after adding:')
        items.forEach(i=>console.log(i));
        return newItem;
    }
    function del(id) {
        items = items.filter(i => i.id != id);
        console.log('the current items after delete:')
        items.forEach(i=>console.log(i));
    }
    function update(item) {
        let newItem = new Item(item.id, item.name, item.course, item.grade);
        items = items.map(i => i.id == newItem.id? newItem:i);
        console.log('the current items after update:')
        items.forEach(i=>console.log(i));
        
    }
    function getAll() {
        return items;
    }
    function createMockData(){
        add(1, 'Kevin', 'CS472', 100);
        add(2, 'Kevin2', 'CS472', 100);
        // items.forEach(i=>console.log(i));
    }
    return {
        add: add, 
        get:  get,
        del: del,
        update: update,
        getAll: getAll,
        addItem:addItem,
        createMockData: createMockData
    }

};

function Item (id, name, course, grade) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.grade = grade;
}
module.exports = Grades;

// let grades = new Grades();
// grades.add(1, 'Kevin', 'CS472', 100);
// grades.add(2, 'Kevin2', 'CS472', 100);
// console.log(grades.get(1));
// grades.update(3, 'Kevin3', 'CS472', 100);
// console.log(grades.getAll());
// grades.del(1);
// console.log(grades.getAll());