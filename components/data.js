import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import benefitThreeImg from "../public/img/benefit-three.png";

const benefitOne = {
  title: "A Truly International E-Wallet",
  desc: "Easily make or accept international payments.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Easily send money to family overseas",
      desc: "Send money to any e-wallet or bank account.",
      icon: <ChartSquareBarIcon />,
    },
    {
        title: "Travel without high currency conversion fees",
        desc: "Pay anyone from anywhere without the headache of high fees.",
        icon: <EmojiHappyIcon />,
    },
    {
      title: "Passively keep track of your finances",
      desc: "Manage your budget with privacy-first financing features.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Keep Your Customers and Your Margin",
  desc: "Accept payment from any e-wallet or bank account diretly to your bank account with a flat 1% fee." ,
  image: benefitTwoImg,
  bullets: [
    {
        title: "Instantly accept international payments online",
      desc: "Receive payments of any amount directly to your bank or e-wallet.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Easily integrate a payments widget or API to your website",
      desc: "Integrate the ReBit point of sale widget or API in under five minutes.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Pay overseas employees with their preferred payment rail",
      desc: "Payments are settled instantly with the help of the Bitcoin Lightning network and partnerships with local banks and e-wallets.",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
    title: "Earn Yield on your Bitcoin Without Giving Up Custody",
    desc: "Get paid to provide payment routing services while keeping custody of your Bitcoin." ,
    image: benefitThreeImg,
    bullets: [
        {
            title: "Route payments across the lightning network for fees",
            desc: "Put your Bitcoin to work by routing payments over the Bitcoin Lightning network and collect fees.",
            icon: <DeviceMobileIcon />,
        },
        {
            title: "Instantly trade BTC/Fiat pairs in an open P2P exchange.",
            desc: "Trade Bitcoin for fiat or fiat for Bitcoin in an open and transparent market.",
            icon: <AdjustmentsIcon />,
        },
        {
            title: "Become a one-click Bitcoin/Fiat exchange",
            desc: "Help onboard the next generation of Bitcoiners and collect fees.",
            icon: <SunIcon />,
        },
    ],
};
export { benefitOne, benefitTwo, benefitThree };
