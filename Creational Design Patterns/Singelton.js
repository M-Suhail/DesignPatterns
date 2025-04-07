//Singelton Pattern
//Purpose: Ensure only one instance of a class is created and provide a global access point.

class Database {
  constructor(){
    if(Database.instance){
      return Database.instance;
    }
    this.connect();
    Database.instance = this;
  }

  connect() {
    console.log('Connecting to the database...');
    this.connection = { 
      status: 'connected', 
      id: Date.now() 
    };
  }

  getConnection() {
    return this.connection;
  }
}

//Usage
const db1 = new Database();
const db2 = new Database();

console.log(db1.getConnection());
console.log(db2.getConnection());

console.log(db1 === db2); 