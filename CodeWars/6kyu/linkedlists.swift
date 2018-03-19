class Node {
    var data: Int
    var next: Node?
    init(_ data: Int) {
        self.data = data
    }
}

func length(_ head: Node?) -> Int {
    var length = 0
    
    var node = head
    while node != nil {
        length += 1
        node = node!.next
    }
    return length
}

func count(_ head: Node?, _ data: Int) -> Int {
    var count = 0
    var node = head
    while node != nil {
        if node?.data == data {
            count += 1
        }
        node = node!.next
    }
    return count
}

//alternating split

func alternatingSplit(head:Node?) throws -> Context? {
    let aHead = Node(0)
    let bHead = Node(0)
    var a = aHead
    var b = bHead
    var current = head
    var counter = 1
    while current != nil {
        if counter % 2 == 0 {
            a.next = Node(current!.data)
            current = current!.next
            a = a.next!
        } else {
            b.next = Node(current!.data)
            current = current!.next
            b = b.next!
        }
        counter += 1
    }
    guard aHead.next != nil && bHead.next != nil else {
        throw SomeError.invalidSplit
    }
    return Context(source: aHead.next, dest: bHead.next)
}

//sorted intersect

func SortedIntersect(first:Node?, second:Node?) -> Node? {
    var a = first
    var b = second
    let result = Node(0)
    var currentResult = result
    
    while a != nil && b != nil {
        if a!.data == b!.data {
            if currentResult.data != a!.data {
                currentResult.next = Node(a!.data)
                currentResult = currentResult.next!
            }
            a = a?.next
            b = b?.next
        } else if a!.data > b!.data {
            b = b?.next
        } else {
            a = a?.next
        }
    }
    return result.next
}

