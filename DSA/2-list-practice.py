def my_show(lst):
    if not lst:
        print('list is empty')
    [print(index, num) for (index, num) in enumerate(lst)]
            
def x ():
    my_list=[]
    print('if you want to see the list just type exit, to see the list type show')
    while True:
        my_input = input("if you want to enter a value type enter if you want to delete press delete :")
        if my_input.lower() == 'show':
            my_show(my_list)
        elif my_input.lower() == 'enter':
            if my_input.lower() == 'show':
                my_show(my_list)
            print('if you are done with adding numbers just type done')
            while True:
                my_input2 =  input('please only enter a number')
                if my_input2.lower() == 'done':
                    break
                elif my_input2.lower() == 'show':
                    my_show(my_list)
                    continue
                elif not my_input2.isdigit():
                    print('try only numbers')
                    continue
                my_list.append(int(my_input2))
                continue
                
        elif my_input.lower() == 'delete':
            if not my_list:
                print('list is empty')
                continue
            while True:
                my_input2 = input('please enter a number you wish to delete')
                if my_input2.lower() == 'show':
                    my_show(my_list)
                if not my_input2.isdigit():
                    print('try only numbers')
                    continue
                elif int(my_input2) not in my_list:
                    print('your number is not in the list')
                    continue
                my_list.remove(int(my_input2))
                break
        
        elif my_input=='exit':
            break
        else :
            continue
        
    return [print(index, num) for (index, num) in enumerate(my_list)]

x()