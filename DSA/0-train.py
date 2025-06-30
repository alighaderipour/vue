def rps(p1, p2):
    return "Player 1 won" if p1=="scissors" and p2 =="paper" or p1=="paper" and p2 =="rock" or  p1=="rock"  and p2 =="scissors" else "Player 2 won!" if p1=="paper" and p2 =="scissors" or p1=="rock" and p2 =="paper" or  p1=="scissors"  and p2 =="rock" else "Draw!"

print(rps('rock', 'scissors'))