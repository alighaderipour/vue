class Node:
    def __init__(self, data):
        self.data = data    # داده
        self.next = None    # اشاره‌گر به گره بعدی

class SinglyLinkedList:
    def __init__(self):
        self.head = None    # گره اول (سر لیست)

    # افزودن به انتهای لیست
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    # افزودن به ابتدای لیست
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # نمایش همه اعضا
    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=' -> ')
            current = current.next
        print('None')

    # جستجو
    def find(self, key):
        current = self.head
        while current:
            if current.data == key:
                return True
            current = current.next
        return False

    # حذف اولین گره با مقدار خاص
    def delete(self, key):
        current = self.head
        prev = None
        while current:
            if current.data == key:
                if prev:
                    prev.next = current.next
                else:
                    self.head = current.next
                return True
            prev = current
            current = current.next
        return False

    # شمارش تعداد عناصر
    def length(self):
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count

# مثال کاربردی:
ll = SinglyLinkedList()
ll.append(10)
ll.prepend(5)
ll.append(20)
ll.print_list()          # خروجی: 5 -> 10 -> 20 -> None
print(ll.find(10))       # خروجی: True
ll.delete(10)
ll.print_list()          # خروجی: 5 -> 20 -> None
print(ll.length())       # خروجی: 2
