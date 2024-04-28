import Send from '../assets/send.svg';
import Twitter from '../assets/twitter.svg';
import Email from '../assets/email.svg';
import Telegram from '../assets/telegram.svg';
import Github from '../assets/github.svg'
import Bnsx from '../assets/bnsx.svg'
import Twitter2 from '../assets/twitter2.svg'

const Landing = () => {
    return (
        <>
            <div className="brand">
                <div className="detail">
                    <p className="text-8xl mb-2">BNSX</p>
                    <pre className="mb-8">
                        The Bitcoin Name Service System (BNSX){'\n'}
                        addresses the growing need for decentralized{'\n'}
                        identity solutions and short domain services{'\n'}
                        within the Web3 and Bitcoin ecosystems
                    </pre>
                    <span>FAIR MINT</span>
                </div>
            </div>
            <div className="symbol">
                <h2 className="text-white mb-8 text-3xl">Symbol:BNSx Cap:21 million Mint{'\n'}Limit:100</h2>
                <span className="text-gray-300">Anyone can participate in the fairmint event, to mint BNSx token{'\n'}please visit <u>Unisat,</u> or <u>OKX.</u></span>
                <img src="https://www.bnsx.org/assets/img/ipad.png" />
            </div>
            <div className="definition">
                <div className="grid grid-cols-2">
                    <div>
                        <img src="https://www.bnsx.org/assets/img/deploy_code.jpg" />
                    </div>
                    <div>
                        <div className="definition-box text-left">
                            <h1 className="text-center text-gray-900 text-3xl mb-2">BRC-20 Definition</h1>
                            <pre className="text-gray-400 text-center">
                                Token Name: BNSX Token Type: BRC20 Total{'\n'}
                                Supply: 21 million Minting Mechanism:{'\n'}
                                Fairmint, with a maximum of 100 tokens per{'\n'}
                                minting event
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 gallery">
                    <div>
                        <img src="https://www.bnsx.org/assets/img/demo-image-02.jpg" />
                    </div>
                    <div className="gallery-item">
                        <p className="text-2xl mb-3">Coin Logo</p>
                        <pre className="text-gray-400">
                            Trollface is our community brand face. We wish you a{'\n'}
                            happy wealthy
                        </pre>
                    </div>
                    <div className="gallery-item">
                        <p className="text-2xl mb-3">Token Economics</p>
                        <pre className="text-gray-400">
                            Token Burning for Domain Acquisition/NFTs and Token{'\n'}
                            Utility/ Annual Registration Fee buyback and burn <u>More.</u>
                        </pre>
                    </div>
                    <div>
                        <img src="https://www.bnsx.org/assets/img/logo_ex.png" />
                    </div>
                </div>
            </div>
            <div className="subscribe">
                <div className='subscribe-box'>
                    <img src={Send} className='h-9 mb-3' />
                    <h2 className='text-3xl text-white mb-8'>Subscribe to receive updates!</h2>
                    <div className='space-x-8'>
                        <input type="text" placeholder="ENTER EMAIL ADDRESS" className="w-1/2 p-2" />
                        <button className="bg-blue-500 text-white p-2">NOTIFY ME!</button>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div  style={{ marginBottom: "100px"}}>
                    <div className='grid grid-cols-3 social-container space-x-8'>
                        <div className='social-item'>
                            <img src={Twitter} className='h-5 inline mb-4' />
                            <p className='text-gray-900 mb-5 text-sm'>X(TWITTER)</p>
                            <div className='line'></div><br />
                            <a>https://twitter.com/thebnsx</a>
                        </div>
                        <div className='social-item'>
                            <img src={Email} className='h-5 inline mb-4' />
                            <p className='text-gray-900 mb-5 text-sm'>EMAIL</p>
                            <div className='line'></div><br />
                            <a>support@bnsx.org</a>
                        </div>
                        <div className='social-item'>
                            <img src={Telegram} className='h-5 inline mb-4' />
                            <p className='text-gray-900 mb-5 text-sm'>TELEGRAM</p>
                            <div className='line'></div><br />
                            <a>https://t.me/bnsxorg</a>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: "70px"}}>
                    <div className='social-container-2 space-x-6 flex'>
                        <div className='social-item-2'>
                            <img src={Twitter2} className='h-5' />
                        </div>
                        <div className='social-item-2'>
                            <img src={Bnsx} className='h-5' />
                        </div>
                        <div className='social-item-2'>
                            <img src={Github} className='h-5' />
                        </div>
                    </div>
                </div>
                <div  style={{ paddingBottom: "100px"}}>
                    <p className='text-gray-500'>Copyright © www.bnsx.org 2023</p>
                </div>
            </div >
        </>
    )
}

export default Landing;