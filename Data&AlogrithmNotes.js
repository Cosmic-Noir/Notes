/* Recursion

-Recursion - Recursion is a concept. A method of solving problems that involve a function calling itself. The process of defining a problem in terms of itself. Or a simpler version of itself. 
    Two parts: 
        1. Base case (when to stop) - solution to the "simplest" possible problem. 
        2. General, or recursive case (function calling itself) - Use the same algorithm to solve a simpler version of the problem. */

const sumOf = function(list) {
  // Base case
  if (list.length === 1) {
    return list[0];
  }
  // General case
  return list[0] + sumOf(list.slice(1));
};

let lst = [2, 4, 6, 8, 10];
console.log(sumOf(lst));

// So note that the function base case is the simplest version, if the list were only one entry long. Where the general case is calling itself. Note that once the function reaches the simplest version, the base case, it can then add all the function call results together (at least in this case).

/* -Forward phase - Where a call to the function spins off another function call, and that spins off another call and so on until the base case is reached. 
-Backward phase - Once the base case is reached, control and any return value is given back to the function that called it, back and back until the control is given back to the first function call, which then returns the value of the function. The main function called does not return until all recursive calls are compelte. 


/* Big O Notation - 
    -Big O notation - A way of describing the time complexity of an algorithm. 
    -Time complexity - refers to the number of operations an alrogith requires to complete. 
    -Space complexity - refers to the amount of physical memory that an algorithm requires to complete.
    -Linear relationship - 
    -Constant time - O(1) -Ideal, no matter the size of input, the time complexity or time to run the program is the same. 
    -Logarithmic time - O(log n) next best thing to constant time complexity. Characteristic of logarithmic algorithms is that they cut the problem size in half each round through.  
    -Linear time - O(n) - run time is directly proportional to n, size of the input. 
    -Polynomial time - O(n^k) - nested loops - for each set of input, has to be run through ^k number of times. 
    -Exponential time - O(2^n) - run times grow rapidly with the size of the input. 

    https://tf-assets-prod.s3.amazonaws.com/tf-curric/data-science/Thinksheet-BigO.pdf
*/

// Example of a O(log n) logarithmic time function, as the size of input does not significantly increase the time complexity. The below function is searching the arr for the integer n. Must be a sorted array since if arr[0] > n, then returns 0.

function howManyLessThanNitems(arr, n) {
  let ticks = 0;
  /* If the 1st element in the array is greater than `n`, return 0,
       because no items in the array are less than `n`. */
  if (!arr.length || arr[0] >= n) {
    ticks++;
    return 0;
  }

  let lowIndex = 0,
    highIndex = arr.length;

  while (highIndex > lowIndex) {
    // Find midpoint
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    /* If `midIndex` element is greater than `n`, that means all elements
           to the right of `midIndex` are also greater than `n`, so
           we only need to focus on elements to the left of `midIndex`.
           We set `highIndex` to the current value of `midIndex` so next time
           through the loop, we'll only look at the left half */
    if (arr[midIndex] >= n) {
      highIndex = midIndex;
      ticks++;
    } else if (arr[midIndex + 1] < n) {
      /* If the element to the right of `midIndex` is less than `n`, then we
           know that we need to check the items to the right of `midIndex`, so
           we set `lowIndex` to the current value of `midIndex`, so that next
           time through the loop we only look at the right side */
      lowIndex = midIndex;
      ticks++;
    } else {
      /* Otherwise, if the element to the right of `midIndex` is greater
           than or equal to `n`, we know that the item at `midIndex` is the last
           item that's less than `n`, so we return `midIndex +  1` to get the total
           number of items that are less than `n` */
      ticks++;
      return {
        result: midIndex + 1,
        ticks: ticks
      };
    }
  }
}

howManyLessThanNitems([1, 2, 3], 2);
howManyLessThanNitems(
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100
  ],
  99
);

// Ex of O(n) linear complexity function - more input means longer time to run

function findMin(array) {
  let min = array[0],
    ticks = 1;
  for (let i = 1; i < array.length; i++) {
    ticks++;
    if (array[i] < min) {
      min = array[i];
    }
  }
  return {
    result: min,
    ticks: ticks
  };
}

findMin([1, 2, 3]);
findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Polynomial compleixty O (n^k)

function hasDuplicates(array) {
  let ticks = 0,
    result = false;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    for (let j = 0; j < array.length; j++) {
      ticks++;
      if (array[i] == array[j] && i != j) {
        result = true;
      }
    }
  }
  return {
    result: result,
    ticks: ticks
  };
}

hasDuplicates([1, 2, 2]);
hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);

/* Working with Arrays
  -Array - An ordered sequence of data (some potentially empty)
  -Memory address - address in memory where something is stored. 
  -Memory module -

  - Arrays are stored in 'contiguous' memory, meaning the dta is stored in order at subsequent memory addresses, which gives arrays their performance characteristics. 
*/



/* Working with Linked Lists - 

-Linked list - Linked lists are structures that overcome allocation problems. The blocks of memory are connected by a mechanism called 'linking'. A list of items that are linked together. 
-Node -  The unit of memory holding a single item in a linked list. Node can be allocated from anywhere in memory, does not have to be next to the previous allocated node. Therefore Linked Lists are not stored in contiguous memory.  Consists of a value and a pointer to the next node in the sequence. 
-Pointer - Points to the next node in the sequence. 
-Singly linked list - Contains only one pointer to the next node in the sequence
-Doubly linked list - Has two pointers, one pointing to the next, but also one pointing to the previous node in the sequence. 
-Private class - 

Implementing a Linked List - Generic class example: */

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


// LinkedList class - head siginifies the beggining of the list, when empty this is null. 

class LinkedList {
    constructor() {
        this.head = null;
    }

// A node can be inserted at the beggining of the lsit (insertFirst), end of the list (insertLast), or anywhere between 2 nodes (insert, insertAt).

// Can create a new node at begiinning of list with: Note that inserting at the begging is an O(1) since the operation is the same every time. 

 insertFirst(item) {
        this.head = new _Node(item, this.head);
    } 

// Inserting at the end of the list: First check if the list is empty, then change the last node's pointer the to new node location, and set the new node's pointer to null. Note that inserting at the end of the list has a O(n) since you have to iterate through the whole list before adding to the end. 

insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

// Retrieval  - Traverse the list, compare the value in each node, when the value is found, return the node. Find:    

 find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

// Removal - 3 cases, delete from beggining (must change head), end of list, or between two other nodes (must change previous node's next pointer to the subsequent node). 

 remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }


// Cache Locality - Arrays are typically used instead of Linked Lists as they are stored in continugous memory, sometimes in a cache on the processor itself. In contrast, because nodes in linked lists are spread throughout memory, it is unlikely subsequent nodes will get loaded into the caches. Thus, the CPU has to load far more data from teh RAM, resutling in a performance penalty. 



/* Working with Stacks and Ques 

-Stack - Data structure simliar to a list with access restricted to only 1 end. Vertical structure. "Limited access data structure". Elements can only be added and removed from the top of the stack. 
    -A standard way to implement a stack is using a singly linked list with constrained on its operations, where items can only be inserted and deleted at only one place, the end of the list. Common interview question. Need to make a singly linked list.
      -Start with building a node class: */

      class _Node {
        constructor(data, next){
            this.data = data;
            this.next = next;
        }
      }

      // Implement your stack in ES6

      class Stack (
        constructor() {
          this.top = null;
        }
      )

/* -LIFO - Stores elements in Last in First out order. 
-Queue - First come, first in first out. Data is inserted at the end, and is removed from the front. Like Linked Lists, can be singly or doubly linked lists.
-FIFO - Fist In First Out
-Enqueue - Insertion of data at the end of the que  
-Dequeue - Deletions of data from the start of the que  

*/

// ** Note that a stack is implmeneted with a singly linked list, while a que is a doubly linked list. 
//** Should Redo maze problem and learn how to do backtracking.  */

// Implement a stack. The stack has two primary functions, push() and pop(). Place data on top and remove from top. 
// - Good way to reverse a word. Push all letters from a word into a stack, then pop them off, one by one into a new word. 
// - Undo machine, keep track of what is done, use a stack. 
// - Language processing: Space for parameters and local variables is created internally using a stack. Compilers syntax checking is done using a stack. 


class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }


// Since only adding to the top of the stack, O(1) time complexity. 
  push(data){
    // If stack is empty, then node will be the top of the stack
    if (this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }
    // If stack not empty, then crate a new node, add data to the new node, and have the pointer point to the top.
    const node = new _Node(data, this.top);
    this.top = node;
  }


  // Still O(1) since always removing from the top of the stack.
  pop(){
    // To remove from top of stack, must point the pointer to the next item and that next item becomes the top of the stack. ** With 'next' always pointing to the node beneath it.
    const node = this.top;
    this.top = node.next;
    return node.data;
  }


}

/* What is the data structure type: 
  -History of pages visited in a browser?  
    - A stack
  - Adding and removing a book from the top?
    - A Stack
  -Poeple getting in line at the restaurant?
    - Queue
  -Undo operation in a text editor?
    - A Stack
  -The handling of events in a web browser 
    - Queue
*/


// Constructor contains 1st and last nodes, indicates beginning and end. Two main functions: Enqueue (data insertion) and dequeue (removes oldest data added to the queue).

// Example of queue: Breadth-First search, explore all nearest possibilities by finding all possible successorsa and enqueue them to a queue
// - Maze question! Do with a stack. Because there are multiple dead ends, you must backtrack. At each choice point, you store on a stack all possible choices. Backtracking simply means popping a next choice from the stack. 

// Que implemented using doubly linked list:

class Node (
  constructor(value){
    this.value = value,
    this.next = null,
    this.prev = null;
  }
)

// Queues only need first and last, head and tail

class Queue {
    constructor(){
      this.first = null;
      this.last = null;
    }

// Adding to end of que - O(1) since adding 1 to end of que
    enqueue(data){
      const node = new _Node(data);

  // Check if empty first
      if(this.first === null){
        this.first = node;
      }

  // If there is currently a last node, then make 'next' pointer equal to created node. 
      if (this.last){
        this.last.next = node;
      }

  // Set last node to created node
      this.last = node;
    }

// Removing from start of que . O(1) since removing 1 from start of que
  dequeue(){
    // if empty, return null
    if(this.first === null){
      return;
    }

    const node = this.first;
    // Change current node to next node
    this.first = this.first.next;

    // if last item in que
    if (node === this.last){
      this.last = null;
    }
    return node.value;
  }

  }

  /* Hash Maps 
    -Hash map - unordered associations between keys and values. Similar to a javascript object. Objects are just hash maps. Searching a hashmap is O(1) becuase the location is a key, no need to traverse every index of the hashmap and it does not depend on the number of elements stored in the hashmap.
    -Hashing - Process of mapping a key to a position in the hash table. 
    -Hash Table - Storage that holds the records(key value). Usually implemented internally using an array. 
    -Hash Function - Maps keys to positions in the hash table. Typically, given the key, the function tells the number that is the index of the key/value pair in the array. 
    -Capacity - A property of the hash table, will grow in chuncks as you resize to a larger array if the hash table is full. 
    -MAX_LOAD_RATIO - highest that the ratio between the length and capacity will be allowed to reach. For examplke, if the condition is 90%, this means that when the hash table is 90% full, then a resize will take place and move to a larger hash table. 
    -_hashString - function takes a string and hashes it, outputing a number. Usually uses the djb2 algorithm.  
    -Collisions - When two values return the same has slot. There are two ways to address collision, open addressing and Seperate Chaining.  
    -Open addressing - Hash the key to the empty slot nearest to where it should live. 
    -Separate chaining - The first slot contains the pointer to the head of the list. When a key collides with another, use the next pointers to put the keys in a linked list. 
  */

  // HashMap class

  class HashMap {
    constructor(initialCapacity = 8){
      this.length = 0;
      this._hashTable = [];
      this._capacity = initialCapacity;
      this._deleted = 0;
    }

    static _hashString(string){
      let hash = 5381;
      for (let i=0; i< string.length; i++){
        hash = (hash << 5) + hash + string.charCodeAt(i);
        hash = hash && hash;
      }
      return hash >>> 0;
    }


// O(1) best case, and O(n) worst case if collision takes place. 
    set(key, value){
      const loadRatio = (this.length + this._deleted + 1) / this._capacity;
      if (loadRatio > HashMap.MAX_LOAD_RATIO){
        this._resize(this.capacity * HashMap.SIZE_RATIO);
      }

      // Find the slot where this key should be 
      const index = this._findSlot(key);

      if (!this._hashTable[index]){
        this.length++;
      }
      this._hashTable[index] = {
        key, 
        value,
        DELETED: false
      }
    }

  // Give the correct slot for the given key. Best average-case if O(1), assuming hash is good and load ratio suitable, chances of collision are small. Worst case is O(n), as you have to linearly search each slot if there has been collision. 
    _findSlot(key){
      const hash = HashMap._hashString(key);
      const start = hash % this._capacity;

      for (let i=start; i<start + this._capacity; i++){
        const index = i % this._capacity;
        const slot = this._hashTable[index];
        if(slot === undefined || (slot.key === key && !slot.DELETED)){
          return index;
        }
      }
    }

  // Best case is O(n), since you ahve to call set() 1 time for each item and worst case is O(n^2).
    _resize(size){
      const oldSlots = this._hashTable;
      this._capacity = size;
      // Reset the length, will get rebuilt as you add items back. 
      this.length = 0;
      this._deleted = 0;
      this._hashTable = [];

      for (const slot of oldSlots){
        if (slot !== undefined){
          this.set(slot.key, slot.value);
        }
      }
    }

    // Deletion is complex, since if you delete an item that was moved to a subsequent slot due to collision, if searching for an item that was slotted after a previous item was deleted, the function may conclude there is none. Therefore it is easier to mark the item with a deleted marker instead, so the search will simply pass over it, but still see the slot is occupied. Then when you resize, you can actually clear out all deleted items. 

    delete(key){
      const index = this._findSlot(key);
      const slot = this._hashTable[index];
      if (slot === undefined){
        throw new Error('key error'):
      }
      slot.DELETED = true;
      this.length--;
      this._deleted++;
    }
  }


/* Working with Binary Search Trees  
  -Trees - data strucutres made up of nodes linked together with parent-child relationships. One node at the top is the "root" node, has no parent. Nodes without children are called 'leaf nodes'. 
  -Binary Treee - a tree in which nodes have 0-2 children, never more than two. 
  -Binary Search Tree - All nodes in the left hand side branch are gaurenteed to have a lower value than the root, while all children of the right branch have a higher value than the root. 
  -Balanced Tree - Every insertion you have to iterate the height of the tree and nodes are inserted equally on the left and right branches. This means it performs O(log(n)) on average. Worst case, if a tree leans heavily to the right or left, it is essentially a linked list and peforms O(n). 
  - Best case would be inserting only the root directory which would be O(1). 
*/

// Implementing a binary search tree. Each node contains a key, a value, and a left and right pointer. If the key property is null, then the object represents an empty tree. Binary trees are recursive in nature, as you're comparing the value to each branch, then moving left or right depending on the comparison. 

class BinarySearchTree {
  constructor(key = null, value = null, parent = null){
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value){
    // if tree is empty then this key being inserted is the root node of the tree
    if (this.key == null){
      this.key = key;
      this.value = value;
    }

    // If tree already exists, then start at the root and compare to key being inserted. If key is less than node's value, then move left, and vice versa. 
    else if (key < this.key){
      // If existing node does not hav e aleft child, then insert node as left child of that node, passing 'this' as the parent.
      if (this.left == null){
        this.left = new BinarySearchTree(key, value, this);
      }
      // If node has has a left child, recursively call the insert method
      else {
        this.left.insert(key, value);
      }
    } else {
      // If key is > than node's key, then do right side
      if (this.right == null){
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

// Retrieval follows the same pattern as insertion, checking key against the key stored in the node and recursively flowing left or right. Average case would be O(n), best case would be O(1) if item was at the root
find(key){
  // if Item is found at the root, then return that value
  if (this.key == key){
    return this.value;
  }
  // if item is less than root, go left, if left child exists, then recursively check its left and/or right child
  else if (key < this.key && this.left){
    return this.left.find(key);
  } 
  // same, but right sided
  else if (key > this.key && this.right){
    return this.right.find(key);
  }
  // Item not found
  else {
    throw new Error ('Key Error');
  }

  // Removal - Three scenarios when you find the item you want to remove: item has no children, 1 child, or 2 children. 
  // If no children, simply detach from parent. 
  // If one child, then you must make the parent of the node being removed the parent of the child of the node being removed, then remove the node. 
  // Node with two children - You must find the MINIMUM value in the RIGHT MOST subtree. Go ALL the way down the right most tree to the left hand side. , then we replace the node being removed with that minimum value. 
  remove(key){
    if (this.key == key){
      if (this.left && this.right){
        const successor = this.right._findMin();
        this.key = succesor.key;
        this.value = succesor.value;
        successor.remove(successor.key);
      }
      // If node only has a left child, then replace the node with its left child
      else if (this.left){
        this._replaceWith(this.left);
      }
      else if (this.right){
        this._replaceWith(this.right);
      }
      // If node has no children, then simply remove it and any references to it
      else {
        this._replaceWith(null);
      }
    }

    else if (key < this.key && this.left){
      this.left.remove(key);
    }
    else if (key > this.key && this.right){
      this.right.remove(key);
    }
    else {
      throw new Error ('Key error');
    }
  }

  // _replaceWith - used to find the node to replace that has children
  _replaceWith(node){
    if (this.parent){
      if(this == this.parent.left){
        this.parent.left = node;
      }
      else if (this == this.parent.right){
        this.parent.right = node;
      }

      if (node){
        node.parent = this.parent;
      }
    }
    else {
      if (node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin(){
    if (!this.left){
      return this;
    }
    return this.left._findMin();
  }

}

 // Note that for removal from a tree, the logic is similar to insertion and retrival, in the best case is O(1) if = root, average is O(log(n)), and worst case is O(n). 

 /* Search Algorithms 
    -Linear search - Search through an array 1-by-1 until find item. Example includes the indexOf function. Best case is O(1) if the item is at the beginning of the array, otherwise this is an O(n), worst case and average.  */

    function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    // If item not found
    return -1;
};

/*  -Binary search - Only works on sorted arrays. Fastest way is to start in the middle and narrow possibilites by half each time. 
    -Divide and conquer - Binary search. 
      - Best case would be if the searched value was in the middle of the array for O(1), otherwise average and worst case are O(log(n)). */

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};


/*    -Depth-first search (DFS) - In this method, you go down the tree as far as you can until the node has no children, then you backtrack. Start by setting up a BinarySearchTree: */

// Ex: Backtracking is used for traversal. 

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

  // This Depth-first search algorithm traverses the nodes and adds the values to an array. O(n) since you have to traverse each node.  
    dfs(values=[]) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }





/*
    -In-order search - the branch is visited, then the node is handled.
    -Pre-ordering - You can also handle the node before the branch, this is known as "pre-order traversal/search".
    -Post-ordering - And if the node is handled after the branches, this is known as "post-order traversal.
    -Breadth-first search (BFS) - Works across the rows of a tree. Tree is visited level by level. Must use first-in, first out queue to store siblings in the que to process in correct order. O(n) because each node must be visited once. 
*/
    bfs(tree, values = []) {
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }

        return values;
    }

}


/* Sorting Algorithms - 
  -Bubble sort - "Classic terrible sorting". Continue looping through an array to find out whether adjacent value sneed swapping, keep going until there are no more values that need swaping. Best case is that the array is already sorted O(n), worst case, each value needs swapping with each other vlue, so O(n^2), which is also average case. */

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

// Merge sort - breaks the array into smaller and smaller chunks, then puts them back together in the correct order. This has a best and average performance of O(n log(n)), better than O(n^2) with bubble method. 

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

// Merge function - 

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};


// Quicksort - This again uses the divide and conquer approach. Partition the array into 2 halves around a pivor value. All values less than pivot go to left half, all greater than pivot go to right half. You then recursively sort the 2 halves of rhte array until halves are length of 0 or 1. Best and average is O(nlog(n)), although worst case is O(n^2). But it is more commmonly used as it is more "cache-efficient" and can be performed more easily in place without more memory allocation. 

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

// There are a few partition algorithsm, but this is common in-place algorithm called "Lomuto's" algorithm:

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

// Stable Sort - algorithm gaurenteed NOT to sort elements with identical keys. 

// quick vs merge sort - 
  // Quick sort - when you don't need a stable sort and average case performance matters more than worst case performance. A quick sort is O (N log N) on average, O (N^2) worse case. A good implementation uses O(log N) auxilary storage in the form of stack space for recursion.

  // Merge sort - when you need a stable O (N log N) sort, this is about your only option. Using an extra array to acheive same sorting, so not quite as fast as quick sort. 

// On Buble sort - An array that is almost sorted, only 2 r 3 elements unsorted, then it can be very fast