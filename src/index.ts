import *as CryptoJS from"crypto-js"
class Block {
public index:number;
public hash:string;
public previousHash:string;
public data:string;
public timestamp:number;
static calculateBlockHash = (index:string, previousHash:string, timestamp:number, data:string):string=>CryptoJS.SHA256(index+previousHash+data+timestamp).toString();
constructor(
  index:number,
  hash:string,
  previousHash:string,
  data:string,
  timestamp:number,
)
{
this.index=index;
this.hash=hash;
this.previousHash=previousHash;
this.data=data;
this.timestamp=timestamp
}
}



const youngjinBlock :Block = new Block(0, "202020202020", "","hello", 12345)
let blockChain : Block[]=[youngjinBlock]

console.log(blockChain)