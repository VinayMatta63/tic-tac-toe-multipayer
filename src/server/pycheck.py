import sys
board = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]


def draw_board(board):
    print(board[7] + " |" + board[8] + " |" + board[9])
    print("--+--+--")
    print(board[4] + " |" + board[5] + " |" + board[6])
    print("--+--+--")
    print(board[1] + " |" + board[2] + " |" + board[3])


player1 = input("Enter 1st Player name: ")
player2 = input("Enter 2nd Player name: ")

print(player1 + ": X |" + player2 + ": O")


def game():
    turn = "X"
    count = 0
    player_turn = player1

    for i in range(10):
        draw_board(board)
        print("It's your turn, " + player_turn + ". Move to which place?")
        move = eval(input())

        if board[move] == " ":
            board[move] = turn
            count += 1
        else:
            print("That place is already filled.\nMove to which place?")
            continue

        if count >= 5:
            if board[7] == board[8] == board[9] != " ":  # across the top
                declare_winner(turn)
                break
            elif board[4] == board[5] == board[6] != " ":  # across the middle
                declare_winner(turn)
                break
            elif board[1] == board[2] == board[3] != " ":  # across the bottom
                declare_winner(turn)
                break
            elif board[1] == board[4] == board[7] != " ":  # down the left side
                declare_winner(turn)
                break
            elif board[2] == board[5] == board[8] != " ":  # down the middle
                declare_winner(turn)
                break
            elif board[3] == board[6] == board[9] != " ":  # down the right side
                declare_winner(turn)
                break
            elif board[7] == board[5] == board[3] != " ":  # diagonal
                declare_winner(turn)
                break
            elif board[1] == board[5] == board[9] != " ":  # diagonal
                declare_winner(turn)
                break

        # If neither X nor O wins and the board is full, we'll declare the result as 'tie'.
        if count == 9:
            print("\nGame Over.\n")
            print("It's a Tie!!")
        # Now we have to change the player after every move.
        if turn == "X":
            turn = "O"
            player_turn = player2
        else:
            turn = "X"
            player_turn = player1

    # Now we will ask if player wants to restart the game or not.
    restart = input("\nDo want to play Again?(y/n): ")
    if restart == "y" or restart == "Y":
        for element in board:
            board[board.index(element)] = " "
        game()


def declare_winner(turn):
    draw_board(board)
    print("\nGame Over.\n")
    if turn == "X":
        print(" **** " + player1 + " won ****")
    else:
        print(" **** " + player2 + " won ****")


if __name__ == "__main__":
    game()
