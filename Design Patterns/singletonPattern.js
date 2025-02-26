// class Singleton {
//   constructor() {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }

//     Singleton.instance = this;
//     this.timestamp = new Date();
//   }

//   getTimeStamp() {
//     return this.timestamp;
//   }
// }

// let s1 = new Singleton();
// let s2 = new Singleton();

// console.log(s1.getTimeStamp());
// console.log(s2.getTimeStamp());

class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }

    Config.instance = this;

    this.settings = {
      theme: "light",
      language: "en",
    };
  }
  setSetting(key, value) {
    this.settings[key] = value; // Corrected this line
  }
  getSettings(key) {
    return this.settings[key]; // Corrected this line
  }
}

const c1 = new Config();
console.log(c1.getSettings("theme"));
