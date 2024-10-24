function Student(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.grades = []; 
    this.attendance = new Array(25).fill(null); 

    this.averageGrade = function() {
        if (this.grades.length === 0) return 0; 
        const sum = this.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum / this.grades.length;
    };

    this.getAge = function() {
        return 2024 - this.dateOfBirth;
    };

    this.present = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Уже заповнено всі 25 записів відвідуваності.");
        }
    };

    this.absent = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Уже заповнено всі 25 записів відвідуваності.");
        }
    };

    this.addGrade = function(grade) {
    this.grades.push(grade);
    };

    this.summary = function() {
        const averageGrade = this.averageGrade();
        const attendanceCount = this.attendance.filter(val => val === true).length;
        const attendanceRate = attendanceCount / this.attendance.length;

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска";
        }
    };
}

const Alex = new Student('Alex', 'Smith', 2000);
Alex.addGrade(95);
Alex.addGrade(85);
Alex.present();
Alex.present();
Alex.absent();
console.log(`Вік Alex: ${Alex.getAge()}`);
console.log(`Середній бал Alex: ${Alex.averageGrade()}`);
console.log(Alex.summary());

const Alice = new Student('Alice', 'Johnson', 2002);
Alice.addGrade(100);
Alice.addGrade(90);
Alice.present();
Alice.present();
Alice.present();
console.log(`Вік Alice: ${Alice.getAge()}`);
console.log(`Середній бал Alice: ${Alice.averageGrade()}`);
console.log(Alice.summary());