students = [11, 22, 33]
students.append(44)
print(students)
students.remove(22)
print(students)
del students[1]
print(students)
students.insert(1,44.444)
print(students)
students.pop()
print(students)
students[1] = 666
print(students)

# append  = append to last of the list
# insert(index, vallue) = insert value in desired index
# students[index]= value  = change value of the index
# students.pop() = delete last value of the list
# students.remove(value) = find the first value in the list and remove it
# del students[index]  = remove the value at index


# list comprehensive
[print(stu) for stu in students]