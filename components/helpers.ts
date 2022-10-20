import png1 from "../img/1.jpg";
import png2 from "../img/2.jpg";
import png3 from "../img/3.jpg";
import png4 from "../img/4.jpg";
import png5 from "../img/5.jpg";
import png6 from "../img/6.jpg";
import png7 from "../img/7.jpg";
import png8 from "../img/8.jpg";
import png9 from "../img/9.jpg";
import png10 from "../img/10.jpg";
import png11 from "../img/11.jpg";
import png12 from "../img/12.jpg";
import png13 from "../img/13.jpg";
import png14 from "../img/14.jpg";
import png15 from "../img/15.jpg";
import png16 from "../img/16.jpg";
import png17 from "../img/17.jpg";
import png18 from "../img/18.jpg";
import png19 from "../img/19.jpg";
import png20 from "../img/20.jpg";
import png21 from "../img/21.jpg";
import png22 from "../img/22.jpg";
import png23 from "../img/23.jpg";
import png24 from "../img/24.jpg";


const shuffle = (a: any[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export type HatchType = {
  nr: number;
  img: string;
  text: string;
  open: boolean;
};

// Bad one-liners from https://onelinefun.com/christmas
export const hatchArray: HatchType[] = [
  {
    nr: 1,
    img: png1,
    text: 'Bitcoin ist wie Gold, aber mit dieser magischen Fähigkeit, dass man es teleportieren kann.',
    open: false
  },
  {
    nr: 2,
    img: png2,
    text: 'The nerds say that you are wasting your time if you don’t have a serious collection of NFTs.',
    open: false
  },
  {
    nr: 3,
    img: png3,
    text: "Web 3 is an internet owned by users and builders orchestrated with tokens.",
    open: false
  },
  {
    nr: 4,
    img: png4,
    text: "îf you like gold there many reasons why you should like bitcoin",
    open: false
  },
  {
    nr: 5,
    img: png5,
    text: 'i dont always trade crypto, but when i do i lose everything - ghandi',
    open: false
  },
  {
    nr: 6,
    img: png6,
    text: 'Respect for artists is a quality of NFT.',
    open: false
  },
  {
    nr: 7,
    img: png7,
    text: 'The internet is not bad for creative people. Web2 is bad for creative people.',
    open: false
  },
  {
    nr: 8,
    img: png8,
    text: 'Dont trust - verify!',
    open: false
  },
  {
    nr: 9,
    img: png9,
    text: "Code is law - bitcoin is law",
    open: false
  },
  {
    nr: 10,
    img: png10,
    text: 'VR is programmable imagination.',
    open: false
  },
  {
    nr: 11,
    img: png11,
    text: "Why did the bitcoin cross the road?” Because there was a fork up ahead!",
    open: false
  },
  {
    nr: 12,
    img: png12,
    text: "Where does an Eskimo keep his Crypto?\n" +
        "\n" +
        "In a cold wallet.",
    open: false
  },
  {
    nr: 13,
    img: png13,
    text: "The future of money is digital currency",
    open: false
  },
  {
    nr: 14,
    img: png14,
    text: '“Stay away from it. It’s a mirage, basically”\n warren buffet',
    open: false
  },
  {
    nr: 15,
    img: png15,
    text: 'buy high sell low\n' +
        '\n',
    open: false
  },
  {
    nr: 16,
    img: png16,
    text: 'you know why vegans dont use crypto ? They cant provide proof of steak',
    open: false
  },
  {
    nr: 17,
    img: png17,
    text: "People don't understand NFTs, Metaverse, and crypto today the same way they didn't understand online shopping in 1995",
    open: false
  },
  {
    nr: 18,
    img: png18,
    text: 'Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.',
    open: false
  },
  {
    nr: 19,
    img: png19,
    text: "I bought my son a fridge for Christmas. – I can't wait to see his face light up when he opens it.",
    open: false
  },
  {
    nr: 20,
    img: png20,
    text: "Santa's elves are just a bunch of subordinate Clauses.",
    open: false
  },
  {
    nr: 21,
    img: png21,
    text: 'What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.',
    open: false
  },
  {
    nr: 22,
    img: png22,
    text: 'Why do programmers always mix up Halloween and Christmas? Because 31 OCT = 25 DEC.',
    open: false
  },
  {
    nr: 23,
    img: png23,
    text: 'What does Santa suffer from if he gets stuck in a chimney? Claustrophobia!',
    open: false
  },
  {
    nr: 24,
    img: png24,
    text: "What's red and white, red and white, red and white? Sant rolling off your roof.",
    open: false
  }
];

export const createCalendar = (): HatchType[] => shuffle(hatchArray);
