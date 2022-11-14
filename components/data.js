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

const benefitOne = {
  title: "A Truly International E-Wallet",
  desc: "Use your ReBit wallet anywhere in the world to make or accept payments.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Travel without currency conversion",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Keep Your Customers and Your Margin",
  desc: "Accept payment from any e-wallet or bank account diretly to your bank account without any of the high margins and fees of other payment gateways." ,
  image: benefitTwoImg,
  bullets: [
    {
      title: "Accept international payments with low margin",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Easily Integrate a payments widget or API to your website",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Start accepting payments instantly",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
    title: "Earn Yield on your Bitcoin Without Giving Up Custody",
    desc: "Accept payment from any e-wallet or bank account diretly to your bank account without any of the high margins and fees of other payment gateways." ,
    image: benefitTwoImg,
    bullets: [
        {
            title: "Accept international payments with low margin",
            desc: "Nextly is designed as a mobile first responsive template.",
            icon: <DeviceMobileIcon />,
        },
        {
            title: "Easily Integrate a payments widget or API to your website",
            desc: "This template is powered by latest technologies and tools.",
            icon: <AdjustmentsIcon />,
        },
        {
            title: "Start accepting payments instantly",
            desc: "Nextly comes with a zero-config light & dark mode. ",
            icon: <SunIcon />,
        },
    ],
};
export { benefitOne, benefitTwo, benefitThree };
