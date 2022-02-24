import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fast NFT</title>
        <meta name="description" content="Fast NFT is Decentralize APP" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div>Fast app</div>
    </div>
  );
}
