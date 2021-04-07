import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proof-of-work',
  templateUrl: './proof-of-work.component.html',
  styleUrls: ['./proof-of-work.component.css']
})
export class ProofOfWorkComponent implements OnInit {

  blockchain : Array<Block>;
  participants : Array<string> = ["node1", "node2"];
  sender : string;
  receiver : string;
  data : string;

  constructor() {
    // this.blockchain = [{
    //   time = new Date(),
    //   information = [{
    //     sender: "node1",
    //     receiver: "node2",
    //     data: "This is the genesis block"
    //   }],
    //   hash = ""
    // }]
   }

  ngOnInit() {
  }

  addParticipant(){

  }

}

export interface Block{
  time : Date,
  information : Array<BlockInfo>,
  hash : string
}

export interface BlockInfo{
  sender : string,
  receiver : string,
  data : string
}
