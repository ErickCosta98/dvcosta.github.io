class CellularAutomata{

    constructor(size, ctx,cells){
        this.size = size;
        this.ctx = ctx;
        this.cells = cells?cells:[];
    }
    create(){
        for(let i = 0; i < this.size; i++){
           let row = [];
            for(let j = 0; j < this.size; j++){
                const alive = Math.random() < 0.5;
                row.push(alive);
            }
            this.cells.push(row);
        }
    }

    next(){
        this.print();
        this.evaluate();
    }


    print(){
        this.ctx.clearRect(0, 0, this.size, this.size);
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                if(this.cells[i][j]){
                    this.ctx.fillStyle = 'black';
                }else{
                    this.ctx.fillStyle = 'white';
                }
                this.ctx.fillRect(i, j, 1, 1);
            }
        }
    }

    evaluate(){
        let cellsAux = new Array(this.size).fill("").map(() => new Array(this.size).fill(false));

        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                let livingNeighbors = 0;
                

                //1
                if(i> 0 && j>0){
                    if(this.cells[i-1][j-1]){
                        livingNeighbors++;
                    }
                }

                //2
                if(j>0){
                    if(this.cells[i][j-1]){
                        livingNeighbors++;
                    }
                }

                //3
                if(i<this.size-1 && j>0){
                    if(this.cells[i+1][j-1]){
                        livingNeighbors++;
                    }
                }

                //4
                if(i>0){
                    if(this.cells[i-1][j]){
                        livingNeighbors++;
                    }
                }

                //5
                if(i<this.size-1){
                    if(this.cells[i+1][j]){
                        livingNeighbors++;
                    }
                }

                //6
                if(i>0 && j<this.size-1){
                    if(this.cells[i-1][j+1]){
                        livingNeighbors++;
                    }
                }

                //7
                if(j<this.size-1){
                    if(this.cells[i][j+1]){
                        livingNeighbors++;
                    }
                }

                //8
                if(i<this.size-1 && j<this.size-1){
                    if(this.cells[i+1][j+1]){
                        livingNeighbors++;
                    }
                }

                if(this.cells[i][j]){
                    if(livingNeighbors < 2 || livingNeighbors > 3){
                        cellsAux[i][j] = false;
                    }else{
                        cellsAux[i][j] = true;
                    }
                }else{
                    if(livingNeighbors === 3){
                        cellsAux[i][j] = true;
                    }
                }


            }
        }
        this.cells = cellsAux;
    }

}

/*
const cells = new Array(100).fill("").map(() => new Array(100).fill(false));

cells[0][4] = true;
cells[0][5] = true;
cells[1][4] = true;
cells[1][5] = true;
cells[10][4] = true;
cells[10][5] = true;
cells[10][6] = true;
cells[11][3] = true;
cells[11][7] = true;
cells[12][2] = true;
cells[12][8] = true;
cells[13][2] = true;
cells[13][8] = true;
cells[14][5] = true;
cells[15][3] = true;
cells[15][7] = true;
cells[16][4] = true;
cells[16][5] = true;
cells[16][6] = true;
cells[17][5] = true;
cells[20][2] = true;
cells[20][3] = true;
cells[20][4] = true;
cells[21][2] = true;
cells[21][3] = true;
cells[21][4] = true;
cells[22][1] = true;
cells[22][5] = true;
cells[24][0] = true;
cells[24][1] = true;
cells[24][5] = true;
cells[24][6] = true;
cells[34][2] = true;
cells[34][3] = true;
cells[35][2] = true;
cells[35][3] = true;

*/


const ctx = canvas.getContext('2d');
const celullarAutomata = new CellularAutomata(100, ctx, []);
celullarAutomata.create();
// celullarAutomata.print();
setInterval(() => {
    celullarAutomata.next();
}
, 100);



