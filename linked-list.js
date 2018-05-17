'use strict';

class _Node {
  constructor(value, next){
    this.value=value;
    this.next=next;
  }
}

class LinkedList {
  constructor(){
    this.head=null;

  }

  insertFirst(item){
    this.head= new _Node(item, this.head);
  }

  insertBefore(item, putBefore){
    if(this.head === null){
      return this.insertFirst(item);
    }

    if(this.head.value=== putBefore){
      return this.insertFirst(item);
    }
  
    let currNode= this.head;
    let previousNode = this.head;
  
    while((currNode !== null) && (currNode.value !== putBefore)){
      previousNode= currNode;
      console.log(previousNode);
      currNode = currNode.next;
      console.log(currNode);
    }
    if(currNode === null){
      console.log('Next item Not Found');
      return;
    }
    previousNode.next= new _Node(item, currNode);
  } 
  

  insertAfter(item, itemAfter){
    if(this.head === null){
      return this.insertFirst(item);
    }
  
    if(this.head.value=== itemAfter){
      return this.insertLast(item);
    }
    
    let currNode= this.head;
    let futureNode = this.head;
    
    while((currNode !== null) && (currNode.value !== itemAfter)){
      currNode = currNode.next;
      futureNode= currNode.next;
    }
    if(currNode === null){
      console.log('Next item Not Found');
      return;
    }
    currNode.next= new _Node(item, futureNode);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode= this.head;
      while(tempNode.next !== null){
        tempNode=tempNode.next;
      }
      tempNode.next= new _Node(item, null);
    }
  }
  //Note: position must === number like an array index
  insertAt(item, position){
    if(this.head === null || position ===0) {
      return this.insertFirst(item);
    }
 
    let currentNode = this.head;
    let prevNode = this.head;
    let ticks =0;
 
    while(ticks !== position){
      if (currentNode.next === null && ticks === position-1){
        return this.insertLast(item);
      }
      if (currentNode.next === null && ticks !== position-1){
        throw new Error ('position does not exist in list');
      }
      prevNode=currentNode;
      currentNode=currentNode.next;
      ticks++;
    }
    prevNode.next= new _Node(item, currentNode);
  }

  find(item){
    let currNode= this.head;
    if(!this.head){
      return null;
    }
    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      }
      else{
        currNode=currNode.next;
      }
    }
    return currNode;
  }


  remove(item){
    if(!this.head){
      return null;
    }
    if(this.head.value === item){
      this.head= this.head.next;
      return;
    }

    let currNode= this.head;
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      previousNode= currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item Not Found');
      return;
    }
    previousNode.next = currNode.next;
  } 


}


function main(){
    
  const SLL= new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  //   SLL.remove('squirrel'); //Item not found :)

  //   SLL.insertBefore('blah', 'Apollo');
  // SLL.insertAt('blah', 3);
  // SLL.remove('Tauhida');
  
  return SLL;
}

main();

function display(list){
  let currentNode=list.head;
  
  while(currentNode !== null){
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }

}
//display just prints to console
// display(main());

function size(list){
  let currentNode = list.head;
  let count=0;

  if(!currentNode){
    return count;
  }
  else{
    count+=1;
  }

  while(currentNode.next !== null){
    currentNode= currentNode.next;
    count+=1;
  }
  return count;
}
// console.log(size(main()));

function isEmpty(list){
  if(list.head){
    return false;
  }
  else{
    return true;
  }
}
// console.log(isEmpty(main()));

function findPrevious(list, item){
  let currNode=list.head;
  let previousNode = list.head;

  if(item===list.head.value){
    throw new Error ('No List/No Previous Items In List');
  }
  
  while((currNode !== null) && (currNode.value !== item)){
    previousNode= currNode;
    currNode = currNode.next;
    if(currNode.next === null){
      return null;
    }
  }
  return previousNode.value;
}

// console.log(findPrevious(main(), 'Boomer'));

function findLast(list){
  if(list.head === null){
    throw new Error('Not a list');
  }
  else{
    let currNode= list.head;
    while(currNode.next !== null){
      currNode=currNode.next;
    }
    return currNode.value;
  }
}
console.log(findLast(main()));