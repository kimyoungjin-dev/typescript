import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public data: string;
  public previousHash: string;
  public hash: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    data: string,
    previousHash: string,
    timestamp: string
  ): string =>
    CryptoJS.SHA256(index + data + previousHash + timestamp).toString();

  constructor(
    index: number,
    data: string,
    previousHash: string,
    hash: string,
    timestamp: number
  ) {
    this.index = index;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = hash;
    this.timestamp = timestamp;
  }
}

const genesisBlock = new Block(0, "20202020", "", "Hello", 123456);
const blockChain: Block[] = [genesisBlock];
const getBlockChain = (): Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
