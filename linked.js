// find all the users that have not been linked
import { allUsers, linked } from "./users";

const checkLinked = (arr1, arr2) => {
  let newArray = [];

  newArray = arr1.filter((user1) => {
    return !arr2.find((user2) => {
      return user2.name === user1.name;
    });
  });

  return newArray;
};

console.log(checkLinked(allUsers, linked));
