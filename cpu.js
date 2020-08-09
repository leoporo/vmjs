class CPU{
    constructor(){
        this.memory = new Uint16Array(2048);
        this.registers = [0, 0, 0, 0];
        this.PC = 0;
        this.running = false;
    }

    inspect(n){
        for(let i=0;i<4; i++){
            console.log(`Register ${i+1}: ${this.registers[i]}`);
        }

        console.log('First bytes in memory: ');
        
        for(let i=0; i<n;i++){
            console.log(this.memory[i]);
        }
    }

    loadProgram(program){
        for(let i=0; i<program.length; i++){
            this.memory[i] = program[i];
        }
    }

    run(){
        this.running = true;
        
        while(this.running){
            switch(this.memory[this.PC]){
                // HALT
                case 0:{
                    this.running = false;
                    break;
                }
                // LOAD value into register
                case 1:{
                    const register = this.memory[this.PC+1];
                    const value = this.memory[this.PC+2];
                    this.registers[register] = value;
                    this.PC += 3;
                    break;
                }
                // STORE from register into memory
                case 2:{
                    const register = this.memory[this.PC+1];
                    const value = this.memory[this.PC+2];
                    this.memory[value-1] = this.registers[register];
                    this.PC += 3;
                    break;
                }
                default:{
                    this.running = false;
                    console.log('Instruction not supported.');
                    break;
                }
            }
        }
    }
}

module.exports = CPU;