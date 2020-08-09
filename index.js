const CPU = require('./cpu');

const cpu = new CPU();

// Sample program:
const program = [1, 0, 15, // LOAD value 15 into register 1
                 2, 0, 10, // STORE value from register 1 to memory location 10
                 0];       // HALT

cpu.loadProgram(program);
cpu.run();

// Inspect registers and first 10 bytes of memory
cpu.inspect(10);
