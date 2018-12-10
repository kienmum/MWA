// function University(name:string, dept:string): void {
//     this.name = name;
//     this.dept = dept;
//     this.graduation = function(year:number) {
//         console.log(`Graduating ${this.dept} ${year} students`);
//     }
// }

class University {
    constructor(public name:string, public dept:string){}
    
    graduation (year:number) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

var mum = new University("MUM", "Computer Science");
mum.graduation(2019);