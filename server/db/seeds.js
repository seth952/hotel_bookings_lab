use hotel;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Andrew Binnie",
    email: "microwaver_of_fish@gmail.com",
    status: true
  },
  {
    name: "Paul McManus",
    email: "canny_code@gmail.com",
    status: false
  },
  {
    name: "Donald Trump",
    email: "tube@gmail.com",
    status: true
  },
]);
