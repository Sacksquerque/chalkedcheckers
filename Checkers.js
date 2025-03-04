class Checkers {
    constructor() {
        this.board = this.createBoard();
        this.currentPlayer = 'R';
    }

    createBoard() {
        const board = [];
        for (let row = 0; row < 8; row++) {
            board[row] = [];
            for (let col = 0; col < 8; col++) {
                if ((row + col) % 2 === 1) {
                    if (row < 3) {
                        board[row][col] = 'B';
                    } else if (row > 4) {
                        board[row][col] = 'R'; 
                    } else {
                        board[row][col] = null;
                    }
                } else {
                    board[row][col] = null;
                }
            }
        }
        return board;
    }

    printBoard() {
        for (let row = 0; row < 8; row++) {
            let rowStr = '';
            for (let col = 0; col < 8; col++) {
                rowStr += this.board[row][col] ? this.board[row][col] : '.';
                rowStr += ' ';
            }
        }
    }

    movePiece(fromRow, fromCol, toRow, toCol) {
        if (this.isValidMove(fromRow, fromCol, toRow, toCol)) {
            this.board[toRow][toCol] = this.board[fromRow][fromCol];
            this.board[fromRow][fromCol] = null;
            this.switchPlayer();
        } else {
            console.log('Invalid move');
        }
    }

    isValidMove(fromRow, fromCol, toRow, toCol) {
        return true;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'R' ? 'B' : 'R';
    }
}

const game = new Checkers();
game.printBoard();