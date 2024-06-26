const profile = {
  username: "Jacob",
  playTime: 300,

  getInfo() {
    console.log(`${this.username} has ${this.playTime} active hours!`);
  },
  changeUsername(username) {
    this.username = username;
  },
  updatePlayTime(playtime) {
    this.playTime += playtime;
  },
};

profile.getInfo(); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
profile.getInfo(); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
profile.getInfo(); // "Marco has 320 active hours!"

//! прибрав console.log тому що виводить undefined

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
