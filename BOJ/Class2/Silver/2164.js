// 카드2

const input = Number(require("fs").readFileSync(0, "utf8").toString().trim());

class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pushNode(val)
    {
        const newNode = new Node(val);

        if (!this.head) this.head = newNode;
        else
        {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length++;

        return newNode;
    }

    getHead()
    {
        return this.head.val;
    }

    removeHead()
    {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    getLength()
    {
        return this.length;
    }
}

const cards = new LinkedList();

for (let i = 1; i <= input; i++) {
    cards.pushNode(i);
}

while (cards.getLength() != 1)
{
    cards.removeHead();
    cards.pushNode(cards.getHead());
    cards.removeHead();
}

console.log(cards.getHead());