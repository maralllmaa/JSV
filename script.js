// [4,1,6,7, 0, 6,2]   target = 9;
// function ex1(arr, target){
//     let result = [];
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 result.push(i, j)
//             }
//         }
//     }

//     return result;
// }
// x, y => y, x
// let x = 5;
// let y = 3;

// let arr = [4,5,6,7,4]

// let [a, b] = [4,5,6,7,4]

// const [story, setStory] = useState("")

// [x, y] = [y, x]

// let temp = x; //5

// x = y; //3
// y = temp; //5

// function sortArr(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp
//             }
//         }
//     }

//     return arr
// }
// Object, Arrays, Algorithm, Data Structure => DOM

// Editor
// OOP - Object oriented programming

// class, object
// Data structure

// class User {
//     constructor(){
//         this.
//     }
// }

// let obj = {
//     nasTootsoh: function(on){
//         return this
//     } 
// }

// window.prompt()

// obj.nasTootsoh(1999)
// JS - bugd object

// let str = "Hi there"

// Array.prototype.miniiFunction = function(){
//     console.log(this)
// }

// ES5
// ES6

// prototype

// const Person = function(ner, nas){
//     this.ner = ner;
//     this.nas = nas
// }

// Person.prototype.getName = function(){
//     return this.ner
// }

// Person.prototype.setName = function(ner){
//     this.ner = ner;
//     return this.ner
// }

// const user = new Person("Narada", 23)
// const user1 = new Person("Steve", 25)
// const user2 = new Person("John", 33)

// let arr = [45, 32, 56, 34, 22];

// arr.forEach((el, index) => {
//     console.log(index + ": " + el)
// });

// Polyfil - Array.prototype.myForEach
// Array.prototype.myForEach = function(callback){
//     for(let i = 0; i < this.length; i++){
//         callback(this[i], i)
//     }
// }

// let newArr = []

// arr.myForEach((el, index) => {
//     console.log(index + ": " + el)
// })

// Map

// Array.prototype.myMap = function(callback){
//     let arr = [];

//     for(let i = 0; i < this.length; i++){
//         arr.push(callback(this[i], i))
//     }

//     return arr;
// }

// let hha = arr.myMap(function(el, i){
//     return el*i
// })

// filter, find, findIndex, sort, reduce

// ES6

// class Person {
//     constructor(ner, nas, email){
//         this.ner = ner;
//         this.nas = nas;
//         this.email = email
//     }

//     getName(){
//         return this.ner
//     }

//     setName(arg){
//         this.ner = arg;
//         return this.ner
//     }

//     static gg(){
//         console.log('jfdlkgjsflkk')
//     }
// }

// Prototypical
// Methodical

// Person.prototype

// const user = new Person("Narada", 23, "narada@mail.com");

// linked List
// Singly
// Doubly

// push
// pop
// shift
// unshif
// insert
// remove

// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val){
//         let node = new Node(val);
//         if(this.length === 0){
//             this.head = node;
//             this.tail = this.head
//         } else {
//             this.tail.next = node;
//             this.tail = node;
//         }

//         this.length++;
//         return this.length;
//     }
//     // unshift

//     unshift(val){
//         let node = new Node(val);
//         if(this.length === 0){
//             this.head = node;
//             this.tail = this.head
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }

//         this.length++;
//         return this.length
//     }

//     pop(){
//         if(this.length === 0) return undefined;
//         let oldTail = this.head;
//         let tail = oldTail;
//         while(oldTail.next){
//             tail = oldTail;
//             oldTail = oldTail.next;
//         };
//         this.tail = tail;
//         this.tail.next = null;
//         this.length--;
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }

//         return oldTail;
//     }

//     shift(){
//         if(this.length === 0) return undefined;
//         let head = this.head;
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.head = head.next;
//             head.next = null;
//         }

//         this.length--;
//         return head;
//     }

//     get(index){
//         if(index < 0 || index >= this.length) return null;
//         let counter = 0;
//         let node = this.head;
//         while(counter !== index){
//             node = node.next;
//             counter++;
//         }
//         return node
//     }

//     set(index, val){
//         let node = this.get(index);
//         if(!node) return false;
//         node.val = val;
//         return true;
//     }

//     insert(index, val){
//         if(index < 0 || index > this.length) return false;
//         if(index === 0) return this.unshift(val);
//         if(index === this.length) return this.push(val);
//         let preNode = this.get(index - 1);
//         let nextNode = preNode.next;
//         let newNode = new Node(val);
//         newNode.next = nextNode;
//         preNode.next = newNode;
//         this.length++;
//         return this.length;
//     }

//     remove(index){
//         if(index < 0 || index >= this.length) return false;
//         if(index === 0) return this.shift();
//         if(index === this.length - 1) return this.pop();
//         let preNode = this.get(index - 1);
//         let currentNode = preNode.next;
//         preNode.next = preNode.next.next;
//         currentNode.next = null;
//         this.length--;
//         return currentNode;
//     }

//     print(){
//         const arr = [];
//         let node = this.head;
//         let counter = 0
//         while(counter < this.length){
//             arr.push(node.val);
//             node = node.next;
//             counter++
//         }
//         return arr;
//     }
// }

// const sll = new SinglyLinkedList();

// sll.push(10)
// sll.push(11)
// sll.push(12)
// sll.push(13)
// sll.push(14)

// get(3) returns Node 
// set(3, 50) node.val = 50;
// insert(index, val)
// remove

// reverse - 

// DDL - Doubly Linked List

// STACK - LIFO - Last in first out

// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
// }

// class Queue {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0
//     }
// }

// peek -
// push - 
// pop
// unshift
// shift

// Хаалтын тэнцвэрт байдал
// {}(){[] [] ({} {})}

// push , pop
// Calculator => eval()

// Гэрт тооны машин хийнэ... Stack

// QUEUE - FIFO - First in first out

// class StackArr {
//     constructor(){
//         this.stack = [];
//         this.size = 0;
//     }

//     push(...val){
//         const vals = val;
//         for(let i = 0; i < vals.length; i++){
//             this.stack.push(vals[i])
//         }
//         this.size += vals.length;
//     }

//     pop(){
//         if(this.size <= 0) return undefined;
//         this.stack.pop();
//         this.size--
//     }
// }

// const stack = new StackArr();

// Browser History hiih - DLL
// URL
// forward(steps) return url
// back(steps) return url
// DOM

// class Node {
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }

//     insert(val){
//         const node = new Node(val);
//         if(!this.root){
//             this.root = node;
//             return this;
//         } else {
//             let current = this.root;
//             while(true){
//                 if(val < current.val){
//                     if(!current.left){
//                         current.left = node;
//                         return this;
//                     } else {
//                         current = current.left;                        
//                     }
//                 } else if(val > current.val){
//                     if(!current.right){
//                         current.right = node;
//                         return this;
//                     } else {
//                         current = current.right;
//                     }
//                 } else {
//                     return undefined
//                 }
//             }
//         }
//     }
// }

// const bst = new BinarySearchTree();

// tree

//       root
//  zuun      baruun
// z    b     z    b
// z,b   z,b  z,b  z,b


//               23   
//          21        40
//       18    22  35      50
//    15          32


// Matrix

// [[2, 3], [21, 34], [55, 123]] => arr[1][1]
// [[2, 3], [5, 6]] + [[12, 23], [44, 98]]

// 

const numbers = document.querySelectorAll('.nums')