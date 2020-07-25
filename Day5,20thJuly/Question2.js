// ########################### User ##########################################

class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in `);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

console.log("################ User ###############3");
let user1 = new User('Harshil', 22, 'h@gmail.com');
user1.login();
user1.logout();


// ###############################3 Moderator #####################################

class Moderator extends User{
    constructor(name, age, email, role){
    super(name, age, email);
    this.role = 'Moderator';
    
    }
   
    addCoins(user){
        user.luCoins++;
        console.log(`after adding coins, ${user.name} has ${user.luCoins} luCoins`);
      
    }
    
    removeCoins(user){
        user.luCoins--;
        console.log(`after removing coins, ${user.name} has ${user.luCoins} LuCoins`);
       
    }


}
console.log("########### Moderator ############## ");
let mod1 = new Moderator('Dilip', 26, 'd@gmail.com');
mod1.login();
mod1.logout();

mod1.addCoins(user1);
mod1.addCoins(user1);
mod1.removeCoins(user1);


// ###########################3 Admin ################################################

class Admin extends Moderator{
    addCourse(user, course){
        user.courses.push(course);
        console.log(user);
    }
    removeCourse(user, course){
        user.courses.pop(course);
        console.log(user);
    }
}

console.log(" ############ Admin #################")
let admin = new Admin('Bipin', 45, "b@gmail.com");

admin.login();
admin.logout();

admin.addCoins(user1);
admin.addCoins(user1);
admin.removeCoins(user1);

admin.addCourse(user1, 'Javascript');
admin.addCourse(user1, 'Python');
admin.removeCourse(user1, 'Python');




