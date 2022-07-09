import { Component, OnInit } from '@angular/core';
import { sha256 } from '../../../../node_modules/js-sha256/';

@Component({
  selector: 'app-proof-of-work',
  templateUrl: './proof-of-work.component.html',
  styleUrls: ['./proof-of-work.component.css']
})
export class ProofOfWorkComponent implements OnInit {

  participants: Array<string> = ['node1', 'node2'];
  blockchain: Array<Block> = [{
    index : 1,
    time : new Date(),
    transactions : [{
      sender : this.participants[0],
      receiver : this.participants[1],
      data : 'Genesis block'
    }],
    proof: 100,
    prevProof: 0,
  }];
  newParticipant = '';

  /* Current block info */
  sender = '';
  receiver = '';
  data = '';
  currentTransactions: Array<TransactionInfo> = [];
	currentHash = '';
	infoBlock: Block = this.blockchain[0];


  constructor() {
  }

  ngOnInit() {
  }

  addParticipant() {
    this.participants.push(this.newParticipant);
  }

  addTransaction(): void {
    if (this.currentTransactions.length < 5) {
      this.currentTransactions.push({
        sender : this.sender,
        receiver : this.receiver,
        data : this.data
      });
    }
    else {
      document.getElementById('transactionLog')?.insertAdjacentHTML('afterend', '<p>Maximum number of transactions for this block has been reached</p>');
    }
  }

  mineBlock() { // First calculate next hash
		const prevProof = this.blockchain[this.blockchain.length - 1].proof;
		let currentGuess = 0;
		this.currentHash = sha256('' + prevProof + currentGuess);
		while (this.currentHash.substring(0, 4) !== '0000'){
			currentGuess++;
			this.currentHash = sha256('' + prevProof + currentGuess);
		}
		this.blockchain.push({
			index : this.blockchain.length + 1,
			time: new Date(),
			transactions: this.currentTransactions,
			proof: currentGuess,
			prevProof: prevProof,
		});
		this.currentTransactions = [];
  }

	viewBlock(event: any): void {
    this.infoBlock = this.blockchain[event.target.attributes.id.value! - 1];
  }
}

export interface Block {
	index : number;
  time: Date;
  transactions: Array<TransactionInfo>;
  proof: number;
	prevProof: number;
}

export interface TransactionInfo {
  sender: string;
  receiver: string;
  data: string;
}
