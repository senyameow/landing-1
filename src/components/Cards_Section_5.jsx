import React from 'react'
import Card_Section_5 from './Card_Section_5'

const Cards_Section_5 = () => {
    return (
        <div className='flex flex-col gap-[50px]'>
            <Card_Section_5  >
                <div className='flex flex-col items-start gap-[20px]'>
                    <p className='text-[24px] leading-[28.8px]'><span className='secondary_text font-bold'>The Marketing Fund plays</span> a crucial role in spreading the word about PapaCoin and our mission to honor fathers and celebrate Pepe's legacy. These funds will be utilized for:</p>
                    <p className='text-[24px] leading-[28.8px]'><span className='secondary_text font-bold'>Community Growth:</span> We will invest in best callers in space and community engagement to expand the PepePapaCoin family and foster a strong, supportive community</p>
                    <p className='text-[24px] leading-[28.8px]'><span className='secondary_text font-bold'>Awareness Building:</span> PepePapaCoin aims to become a well-recognized token in the crypto space. The marketing fund will be used to create awareness through targeted advertising, partnerships, and sponsorships. </p>
                </div>
            </Card_Section_5>
            <Card_Section_5 attention={true} bigger={true}>
                <div className='flex flex-col items-start gap-[20px]'>
                    <p className='text-[24px] text-white leading-[28.8px]'><span className='font-bold'>To ensure ease of access and liquidity</span> a portion of PepePapaCoin's resources will be allocated to securing listings on reputable centralized exchanges (CEXs). This allocation will be used for:</p>
                    <p className='text-[24px] text-white leading-[28.8px]'><span className='font-bold'>Exchange Listings</span> PepePapaCoin will be listed on major CEXs, making it easier for users to buy, sell, and trade $PAPA tokens.</p>
                    <p className='text-[24px] text-white leading-[28.8px]'><span className='font-bold'>Increased Liquidity</span> CEX listings will enhance liquidity, making it simpler for traders and investors to participate in the PepePapaCoin ecosystem. </p>
                    <p className='text-[24px] text-white leading-[28.8px]'><span className='font-bold'>Broader Adoption:</span> Access to CEXs allows for broader exposure and adoption of PepePapaCoin, attracting new users and investors.</p>
                </div>
            </Card_Section_5>
            <Card_Section_5 biggest={true} >
                <div className='flex flex-col items-start gap-[20px]'>
                    <p className='text-[24px] leading-[28.8px]'><span className='secondary_text font-bold'>Our dedicated team</span> is committed to driving the PepePapaCoin project forward and ensuring its success. The allocation to the team and development fund will support:</p>
                    <p className='text-[24px] leading-[28.8px]'><span className='secondary_text font-bold'>Ongoing Development:</span> Continual improvement of the PepePapaCoin ecosystem, including the development of new features, upgrades, and enhancements.</p>
                    <p className='text-[24px] leading-[28.8px]'><span className='secondary_text font-bold'>Operational Costs:</span> Maintaining the infrastructure, security, and day-to-day operations of PapaCoin. </p>
                    <p className='text-[24px] leading-[28.8px]'><span className='secondary_text font-bold'>Team Motivation:</span> Rewarding and incentivizing our talented team members who work tirelessly to achieve our mission. </p>
                    <p className='text-[24px] leading-[28.8px]'><span className='secondary_text font-bold'>PepePapaCoin's tokenomics</span> are designed to strike a balance between community support, growth, and development. We are committed to transparency and will regularly update the community on the utilization of these allocations to ensure that PepePapaCoin remains true to its vision. </p>
                </div>
            </Card_Section_5>
        </div>
    )
}

export default Cards_Section_5