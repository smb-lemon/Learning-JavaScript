//class example with inheritance
let data = "data info";
class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("view ", data);
  }
}

class admin extends user {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    data = "new data edited";
  }
}
let student1 = new user("Juliya", "juliya@gmail.com");
let student2 = new user("Dom", "dom@yahoo.com");
let teacher1 = new user("VC", "vc@gmail.com");
let admin1 = new admin("adminTony", "tony@yahoo.com");
