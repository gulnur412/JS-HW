// zadacha-1
// const posts = {
//   name: "posts",
//   isLoading: true,

//   byId: {
//     post1: {
//       id: "poost1",
//       author: "user1",
//       body: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post: {
//       id: "post2",
//       author: "user2",
//       body: "......",
//       comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allIds: ["post1", "post2"],
// };

// const nameposts={...posts};
// const shalowCopy=Object.assign({},posts)
// console.log(shalowCopy,nameposts);

// zadacha-2
// const posts = {
//   name: "posts",
//   isLoading: true,

//   byId: {
//     post1: {
//       id: "poost1",
//       author: "user1",
//       body: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post: {
//       id: "post2",
//       author: "user2",
//       body: "......",
//       comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allIds: ["post1", "post2"],
// };

// const nameposts = { ...posts };

// const deepCopy = JSON.parse(JSON.stringify(posts));
// console.log(deepCopy);
// console.log(nameposts);

// zadacha-3

// const post = {
//   name: "post",
//   isLoading: true,
//   id: "post1",
//   author: "user1",
//   body: "......",
//   comment1: ["commen1", "comment2"],
// };
// const { comments: color, hello, ...rest } = post;
// console.log(color);обьектин ичине color:деген кулюч берилген эмес ошол учун undefined
// console.log(hello);undefined
// console.log(rest);Object

// zadacha-4
// const commen1 = ["comment3", "comment4", "comment5", "comment1"];

// const [ comment1,...rest] = commen1;
// console.log(undefined, "1"); undefined иштебейт 
// console.log(comment1, "2");comment3 барабар 
// console.log(rest);массивтин "comment4" ,"comment1" чейинки элементтерине барабар.
