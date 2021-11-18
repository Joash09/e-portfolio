import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turing-machine',
  templateUrl: './turing-machine.component.html',
  styleUrls: ['./turing-machine.component.css']
})
export class TuringMachineComponent implements OnInit {

  Symbol = Symbol;
  Symbols: any[];

  Movement = Movement;
  Movements: any[];

  NumStages: number;
  States: State[] = [{Instructions:[]}];
  StateIndices: number[] = [];

  NumTapeSymbols = 16; // TODO
  Tape: Symbol[] = [];
  OutputTape: Symbol[] = [];

  constructor() { 
    this.Symbols = Object.keys(this.Symbol).filter(f => !isNaN(Number(f)));
    this.Movements = Object.keys(this.Movement).filter(f => !isNaN(Number(f)));
  }

  ngOnInit(): void {
    for(let i = 0; i < this.NumTapeSymbols; i++) {
      this.Tape.push(Symbol.T);
    }
  }

  drawInstructionTable(e: any){
    this.States = [];
    this.StateIndices = [];
    
    for (let i = 0; i < this.NumStages - 1; i++){ // Final state is reserved for halting state
        this.StateIndices.push(i);
        let stateInstruction: Instruction[] = [];
        for (let j = 0; j < 3; j++){
          let instruction: Instruction = {CurrentSymbol: j, ChangeSymbol: j, NextStageIndex: 0, Movement: Movement.Right};
          stateInstruction.push(instruction);
        }
        this.States.push({Instructions: stateInstruction})
    }

    this.StateIndices.push(this.NumStages-1);
  }

  executeTuringMachine() {
      
    // Init turing machine
    let currentStateIndex = 0;
    let finalStateIndex = this.NumStages-1;
    let tapeIndex = 0;

    this.OutputTape = JSON.parse(JSON.stringify(this.Tape));

    while(currentStateIndex !== finalStateIndex){

      // Get Instruction
      let currentInstruction = this.States[currentStateIndex].Instructions.find(i => i.CurrentSymbol == this.OutputTape[tapeIndex]);

      // Change Symbol
      this.OutputTape[tapeIndex] = currentInstruction.ChangeSymbol;

      // Update to next state
      currentStateIndex = currentInstruction.NextStageIndex;

      // Move along the tape
      if (currentInstruction.Movement == Movement.Right){
            tapeIndex++;
      }
      else if (currentInstruction.Movement == Movement.Left){
            tapeIndex--;
      }
      else {
        console.log('Index out of bounds');
      }

    }
  }

}

export enum Symbol {
  T,
  F,
  B
}

export enum Movement {
  Right,
  Left
}

export interface Instruction {
  CurrentSymbol: Symbol,
  ChangeSymbol?: Symbol,
  NextStageIndex?: number,
  Movement?: Movement
}

// Each state has a collection of intructions
export interface State {
  Instructions: Instruction[]
}