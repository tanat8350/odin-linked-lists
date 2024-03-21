function node(value = null, next = null) {
  return { value, next };
}

function linkedList() {
  let head = null;

  const getHead = () => {
    return head;
  };

  const getSize = () => {
    if (head === null) return null;

    let count = 1;
    let tail = head;
    while (tail.next) {
      tail = tail.next;
      count++;
    }
    return count;
  };

  const getTail = () => {
    if (head === null) return null;

    let current = head;
    while (current.next) {
      current = current.next;
    }
    return current;
  };

  const append = (value) => {
    if (head === null) return (head = node(value));

    getTail().next = node(value);
  };

  const prepend = (value) => {
    head = node(value, head);
  };

  const pop = () => {
    let current = head;
    let previous;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  };

  const contains = (looking) => {
    if (head === null) return null;

    let current = head;
    while (current.value !== looking && current.next !== null) {
      current = current.next;
    }
    if (current.value === looking) return true;

    return false;
  };

  const find = (looking) => {
    if (head === null) return null;

    let current = head;
    let count = 0;
    while (current.value !== looking && current.next !== null) {
      current = current.next;
      count++;
    }
    if (current.value === looking) return count;

    return null;
  };

  const toString = () => {
    if (head === null) return null;

    const prefix = '( ';
    const suffix = ' ) -> ';
    let current = head;
    let result = prefix + current.value + suffix;
    while (current.next) {
      current = current.next;
      result += prefix + current.value + suffix;
    }
    result += current.next;

    return result;
  };

  // Extra
  const insertAt = (value, index) => {
    if (index === 0) return (head = node(value, head));

    let current = head;
    let count = 1;
    while (count !== index) {
      current = current.next;
      count++;
    }
    current.next = node(value, current.next);
  };

  const removeAt = (index) => {
    if (index === 0) return (head = head.next);

    let previous;
    let current = head;
    let count = 0;
    while (count !== index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
  };

  return {
    getHead,
    getTail,
    getSize,
    append,
    prepend,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const link1 = linkedList();
link1.append('test1');
link1.append('test2');
link1.append('test3');
link1.append('test4');
link1.prepend('test');
link1.prepend('tes');
link1.pop();
link1.insertAt('here', 2);
link1.insertAt('here', 0);
link1.removeAt(3);
console.log(link1.getHead());
console.log(link1.getTail());
console.log(link1.getSize());
console.log(link1.contains('test'));
console.log(link1.find('test'));
console.log(link1.getHead());
console.log(link1.toString());

const link2 = linkedList();
console.log(link2.getTail());
console.log(link2.getSize());
console.log(link2.contains('test'));
console.log(link2.find('test'));
console.log(link2.getHead());
console.log(link2.toString());
link2.append('test');
console.log(link2.getHead());
console.log(link2.toString());
