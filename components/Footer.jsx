import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './Button';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-5">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Link href="/">
              <Image src={images.nft} objectFit="contain" width={40} height={40} alt="logo" />
            </Link>
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">Get the latest updates</p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-lg">
            <input type="email" placeholder="Your Email" className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none" />
            <div className="flex-initial">
              <Button
                btnName="Email me"
                btnType="primary"
                classStyles="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8 font-semibold">
          <div>
            <h2 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10"> NFT </h2>
            <ul className="font-poppins text-nft-black-1 dark:text-white">
              <li className="mb-3">
                <a href="https://mumbai.polygonscan.com/address/0xc052e06BC82D4F9ee90eEE836ebE4badda046C42" target="_blank" className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 transition duration-300" rel="noreferrer">Info SmartContract</a>
              </li>
              <li className="mb-3">
                <a href="https://opensea.io/learn/what-are-nfts" target="_blank" className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 transition duration-300" rel="noreferrer">About NFT </a>
              </li>
              <li className="mb-3">
                <a href="https://opensea.io/learn/what-is-crypto-wallet" target="_blank" className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 transition duration-300" rel="noreferrer">Setup Wallet</a>
              </li>

              <li className="mb-3">
                <a href="https://testnets.opensea.io/" target="_blank" className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 transition duration-300" rel="noreferrer">OpenSea</a>
              </li>

            </ul>
          </div>
          <div>
            <h2 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">Polygon Technology</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-3">
                <a href="https://academy.binance.com/" target="_blank" className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 transition duration-300" rel="noreferrer">Polygon Technology</a>
              </li>
              <li className="mb-3">
                <a href="https://testnet.bscscan.com/" target="_blank" className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 transition duration-300" rel="noreferrer">Polygon Explorer</a>
              </li>
              <li className="mb-3">
                <a href="https://testnet.bnbchain.org/faucet-smart" target="_blank" className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 transition duration-300" rel="noreferrer">Faucet MATIC</a>
              </li>
              <li className="mb-3">
                <a href="https://academy.binance.com/vi/articles/connecting-metamask-to-binance-smart-chain" target="_blank" className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 transition duration-300" rel="noreferrer">Add Polygon Network</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7 mb-0">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">NFT Inc. All Rights Reserved.</p>
          <div className="flex flex-row sm:mt-4">
            <div className={`${theme === 'light' ? 'filter invert' : ''} space-x-6`}>
              <a target="_blank" href="/" alt="github" rel="noreferrer">
                <Image src={images.github} objectFit="contain" className="cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 transition duration-500" width={24} height={24} alt="github" />
              </a>
              <a target="_blank" href="/" alt="twitter" rel="noreferrer">
                <Image src={images.twitter} objectFit="contain" className="cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 transition duration-500" width={24} height={24} alt="twitter" />
              </a>
              <a target="_blank" href="/" alt="telegram" rel="noreferrer">
                <Image src={images.telegram} objectFit="contain" className="cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 transition duration-500" width={24} height={24} alt="telegram" />
              </a>
              <a target="_blank" href="/" alt="youtube" rel="noreferrer">
                <Image src={images.youtube} objectFit="contain" className="cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 transition duration-500" width={24} height={24} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
