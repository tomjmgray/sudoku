function validSolution(board){
    let grid1 = [board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2]]
    let grid2 = [board[0][3], board[0][4], board[0][5], board[1][3], board[1][4], board[1][5], board[2][3], board[2][4], board[2][5]]
    let grid3 = [board[0][6], board[0][7], board[0][8], board[1][6], board[1][7], board[1][8], board[2][6], board[2][7], board[2][8]]
    let grid4 = [board[3][0], board[3][1], board[3][2], board[4][0], board[4][1], board[4][2], board[5][0], board[5][1], board[5][2]]
    let grid5 = [board[3][3], board[3][4], board[3][5], board[4][3], board[4][4], board[4][5], board[5][3], board[5][4], board[5][5]]
    let grid6 = [board[3][6], board[3][7], board[3][8], board[4][6], board[4][7], board[4][8], board[5][6], board[5][7], board[5][8]]
    let grid7 = [board[6][0], board[6][1], board[6][2], board[7][0], board[7][1], board[7][2], board[8][0], board[8][1], board[8][2]]
    let grid8 = [board[6][3], board[6][4], board[6][5], board[7][3], board[7][4], board[7][5], board[8][3], board[8][4], board[8][5]]
    let grid9 = [board[6][6], board[6][7], board[6][8], board[7][6], board[7][7], board[7][8], board[8][6], board[8][7], board[8][8]]

    let col1 = [board[0][0], board[1][0], board[2][0], board[3][0], board[4][0], board[5][0], board[6][0], board[7][0], board[8][0]]
    let col2 = [board[0][1], board[1][1], board[2][1], board[3][1], board[4][1], board[5][1], board[6][1], board[7][1], board[8][1]]
    let col3 = [board[0][2], board[1][2], board[2][2], board[3][2], board[4][2], board[5][2], board[6][2], board[7][2], board[8][2]]
    let col4 = [board[0][3], board[1][3], board[2][3], board[3][3], board[4][3], board[5][3], board[6][3], board[7][3], board[8][3]]
    let col5 = [board[0][4], board[1][4], board[2][4], board[3][4], board[4][4], board[5][4], board[6][4], board[7][4], board[8][4]]
    let col6 = [board[0][5], board[1][5], board[2][5], board[3][5], board[4][5], board[5][5], board[6][5], board[7][5], board[8][5]]
    let col7 = [board[0][6], board[1][6], board[2][6], board[3][6], board[4][6], board[5][6], board[6][6], board[7][6], board[8][6]]
    let col8 = [board[0][7], board[1][7], board[2][7], board[3][7], board[4][7], board[5][7], board[6][7], board[7][7], board[8][7]]
    let col9 = [board[0][8], board[1][8], board[2][8], board[3][8], board[4][8], board[5][8], board[6][8], board[7][8], board[8][8]]

    let grids = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9]
    let columns = [col1, col2, col3, col4, col5, col6, col7, col8, col9]
    let answer = 'yes';

    board.forEach(row => {
        // console.log(row)
        row.forEach(digit => {
            if (row.indexOf(digit) !== row.lastIndexOf(digit)) {
            answer = false;
            }
        })
    })

    grids.forEach(row => {
        // console.log(row)
        row.forEach(digit => {
            if (row.indexOf(digit) !== row.lastIndexOf(digit)) {
                answer = false;
            }
        })
    })

    columns.forEach(row => {
        // console.log(row)
        row.forEach(digit => {
            if (row.indexOf(digit) !== row.lastIndexOf(digit)) {
                answer = false;
            }
        })
    })
    console.log(answer);
    return answer
  }

let puzzle1 = [
    [5,6,3,1,4,9,7,5,8],
    [7,1,4,2,8,5,3,6,9],
    [9,8,5,6,3,7,1,2,4],
    [3,7,8,9,1,2,5,4,6],
    [1,2,9,5,6,4,8,7,3],
    [4,5,6,3,7,8,2,9,1],
    [6,3,2,4,5,1,9,8,7],
    [8,9,1,7,2,6,4,3,5],
    [5,4,7,8,9,3,6,1,2],
];

// console.table(validSolution(puzzle1))

// let numArr = [1,2,3,4,5,6,7,8,9]

function thinking() {
    let board = []
    for (let i = 0; i < 9; i++) {
        let addArr = []
        
        
        for (let j = 0; j < 9; j++) {
            addArr.push(0);
        };
        
        board.push(addArr)
    };

    // let grid1 = [board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2]]
    // let grid2 = [board[0][3], board[0][4], board[0][5], board[1][3], board[1][4], board[1][5], board[2][3], board[2][4], board[2][5]]
    // let grid3 = [board[0][6], board[0][7], board[0][8], board[1][6], board[1][7], board[1][8], board[2][6], board[2][7], board[2][8]]
    // let grid4 = [board[3][0], board[3][1], board[3][2], board[4][0], board[4][1], board[4][2], board[5][0], board[5][1], board[5][2]]
    // let grid5 = [board[3][3], board[3][4], board[3][5], board[4][3], board[4][4], board[4][5], board[5][3], board[5][4], board[5][5]]
    // let grid6 = [board[3][6], board[3][7], board[3][8], board[4][6], board[4][7], board[4][8], board[5][6], board[5][7], board[5][8]]
    // let grid7 = [board[6][0], board[6][1], board[6][2], board[7][0], board[7][1], board[7][2], board[8][0], board[8][1], board[8][2]]
    // let grid8 = [board[6][3], board[6][4], board[6][5], board[7][3], board[7][4], board[7][5], board[8][3], board[8][4], board[8][5]]
    // let grid9 = [board[6][6], board[6][7], board[6][8], board[7][6], board[7][7], board[7][8], board[8][6], board[8][7], board[8][8]]

    let col1 = [board[0][0], board[1][0], board[2][0], board[3][0], board[4][0], board[5][0], board[6][0], board[7][0], board[8][0]]
    let col2 = [board[0][1], board[1][1], board[2][1], board[3][1], board[4][1], board[5][1], board[6][1], board[7][1], board[8][1]]
    let col3 = [board[0][2], board[1][2], board[2][2], board[3][2], board[4][2], board[5][2], board[6][2], board[7][2], board[8][2]]
    let col4 = [board[0][3], board[1][3], board[2][3], board[3][3], board[4][3], board[5][3], board[6][3], board[7][3], board[8][3]]
    let col5 = [board[0][4], board[1][4], board[2][4], board[3][4], board[4][4], board[5][4], board[6][4], board[7][4], board[8][4]]
    let col6 = [board[0][5], board[1][5], board[2][5], board[3][5], board[4][5], board[5][5], board[6][5], board[7][5], board[8][5]]
    let col7 = [board[0][6], board[1][6], board[2][6], board[3][6], board[4][6], board[5][6], board[6][6], board[7][6], board[8][6]]
    let col8 = [board[0][7], board[1][7], board[2][7], board[3][7], board[4][7], board[5][7], board[6][7], board[7][7], board[8][7]]
    let col9 = [board[0][8], board[1][8], board[2][8], board[3][8], board[4][8], board[5][8], board[6][8], board[7][8], board[8][8]]

    // let grids = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9]
    let columns = [col1, col2, col3, col4, col5, col6, col7, col8, col9]
    let rows = [board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]]

    // console.table(board);
    
    let i = 1;
    let totalTries = 0
    /// i is the number trying to be placed
    while (i < 10) {
        let xIndexes = [0,1,2,3,4,5,6,7,8];
        let yIndexes = [0,1,2,3,4,5,6,7,8];
        let tries = 0
        /// creates a unique coordinate position for each instance on the number i
        for (let j = 0; j < 9; j++) {
            let x= xIndexes.splice(Math.floor(Math.random() * (xIndexes.length)), 1)[0];
            let y= yIndexes.splice(Math.floor(Math.random() * (yIndexes.length)), 1)[0];
            // console.log(x);
            // console.log(y);
            let gN = 0;
            let gM = 0;
            if ((Math.floor(x / 3)) < 1 ) {
                gN += 0
            } else if ((Math.floor(x / 3)) < 2 ) {
                gN +=1
            } else {
                gN += 2
            }

            if ((Math.floor(y / 3)) < 1 ) {
                gM += 0
            } else if ((Math.floor(y / 3)) < 2 ) {
                gM +=1
            } else {
                gM += 2
            }
            let gI = (gN * 3) + gM
            let grid;
            switch (gI) {
                case 0: 
                    grid = [board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2]]
                    break;
                case 1:
                    grid = [board[0][3], board[0][4], board[0][5], board[1][3], board[1][4], board[1][5], board[2][3], board[2][4], board[2][5]]
                    break;
                case 2:
                    grid = [board[0][6], board[0][7], board[0][8], board[1][6], board[1][7], board[1][8], board[2][6], board[2][7], board[2][8]]
                    break;
                case 3:
                    grid = [board[3][0], board[3][1], board[3][2], board[4][0], board[4][1], board[4][2], board[5][0], board[5][1], board[5][2]]
                    break;
                case 4:
                    grid = [board[3][3], board[3][4], board[3][5], board[4][3], board[4][4], board[4][5], board[5][3], board[5][4], board[5][5]]
                    break;
                case 5:
                    grid = [board[3][6], board[3][7], board[3][8], board[4][6], board[4][7], board[4][8], board[5][6], board[5][7], board[5][8]]
                    break;
                case 6:
                    grid = [board[6][0], board[6][1], board[6][2], board[7][0], board[7][1], board[7][2], board[8][0], board[8][1], board[8][2]]
                    break;
                case 7:
                    grid = [board[6][3], board[6][4], board[6][5], board[7][3], board[7][4], board[7][5], board[8][3], board[8][4], board[8][5]]
                    break;
                case 8:
                    grid = [board[6][6], board[6][7], board[6][8], board[7][6], board[7][7], board[7][8], board[8][6], board[8][7], board[8][8]]
                    break;
            }
            
            // let grid1 = [board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2]]
            // let grid2 = [board[0][3], board[0][4], board[0][5], board[1][3], board[1][4], board[1][5], board[2][3], board[2][4], board[2][5]]
            // let grid3 = [board[0][6], board[0][7], board[0][8], board[1][6], board[1][7], board[1][8], board[2][6], board[2][7], board[2][8]]
            // let grid4 = [board[3][0], board[3][1], board[3][2], board[4][0], board[4][1], board[4][2], board[5][0], board[5][1], board[5][2]]
            // let grid5 = [board[3][3], board[3][4], board[3][5], board[4][3], board[4][4], board[4][5], board[5][3], board[5][4], board[5][5]]
            // let grid6 = [board[3][6], board[3][7], board[3][8], board[4][6], board[4][7], board[4][8], board[5][6], board[5][7], board[5][8]]
            // let grid7 = [board[6][0], board[6][1], board[6][2], board[7][0], board[7][1], board[7][2], board[8][0], board[8][1], board[8][2]]
            // let grid8 = [board[6][3], board[6][4], board[6][5], board[7][3], board[7][4], board[7][5], board[8][3], board[8][4], board[8][5]]
            // let grid9 = [board[6][6], board[6][7], board[6][8], board[7][6], board[7][7], board[7][8], board[8][6], board[8][7], board[8][8]]

            // let grids = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9]

            // console.log(x, y);
            // console.log(grids[gI])
            // console.log(grids[gI].indexOf(i) === -1);
            /// if position is not occupied, make position new val
            // console.log(grid.indexOf(i) === -1)
            if (board[x][y] === 0 && (columns[y].indexOf(i) === -1 && grid.indexOf(i) === -1) ) {
                
                board[x][y] = i;
            } else {
            /// 
                xIndexes.push(x);
                yIndexes.push(y);
                // console.table(board);
                j--;
                x = 0;
                y = 0;
                tries += 1;
                if (tries > 10) {
                    board.forEach(row => {
                        row[row.indexOf(i)] = 0;
                    })
                    totalTries += 1;
                    i--;
                    break;
                } else {
                    continue;
                
                }
                
            }
        }
        if (totalTries > 1000) {
            
            board.forEach(row => {
                row[row.indexOf(i)] = 0;
            })
            i--;
            board.forEach(row => {
                row[row.indexOf(i)] = 0;
            })
            totalTries = 0;
            continue
        } else {
            i++;
        }
      
        




    }
    console.log(board);
    // let numArr = [1,2,3,4,5,6,7,8,9]
    //         let randomIndex = Math.floor(Math.random() * numArr.length)
    //         let newNum = numArr.splice(randomIndex, 1);
    //         addArr.push(newNum[0])
    // let solution = validSolution(arr);
    // // console.log(solution);
    // if (solution == 'yes') {
    //     console.table(arr)
    //     return arr
    // } else {
    //     console.log('no')
    //     stupidBruteForce();
    // }
    let realBoard = [];
    board.forEach(row => {
        let newRow = []
        row.forEach(i => {
            if (i !== 0){
                newRow.push(i)
            }
        });
        realBoard.push(newRow)
    });
    console.table(realBoard);
    console.log(validSolution(realBoard))
}
thinking();

// stupidBruteForce();