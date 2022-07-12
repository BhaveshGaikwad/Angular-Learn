import { Like } from "./like";
 
let like = new Like(0, false);

console.log("Inital likeButton: ",like.likeButton);
console.log("Intial InitialCount: ",like.initialCount);


like.clickLike();
console.log("\n Clicked Like");

console.log("\t likeButton: ",like.likeButton);
console.log("\t Count: ",like.initialCount);


console.log("\n Clicked UnLike");
like.clickLike();

console.log("\t likeButton: ",like.likeButton);
console.log("\t Count: ",like.initialCount);

like = new Like(10,false);
console.log("\n Set Intial Like to 10");
console.log("\t Count: ",like.initialCount);

like.clickLike();
console.log("\n Clicked Like");

console.log("\t likeButton: ",like.likeButton);
console.log("\t Count: ",like.initialCount);

console.log("\n Clicked UnLike");
like.clickLike();
console.log("\t likeButton: ",like.likeButton);
console.log("\t Count: ",like.initialCount);