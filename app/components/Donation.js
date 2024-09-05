// 'use client'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import WordTurtle from './WordTurtle';


  
    
//     const MainMenu = ({ setCurrentWindow }) => {
//       const navigate = useNavigate();
    
//       return (
//         // <div className="relative h-cover bg-word-turtle flex justify-center items-center">
//         <div className="relative h-screen bg-word-turtle flex justify-center items-center">
//           <div className="flex flex-col items-center justify-center bg-white border-2 border-black rounded-xl w-1/3 h-3/5">
//             <h1 className="text-4xl text-center text-black underline underline-offset-1  font-montserrat mt-20">
//               PARENTAL SUPPORT
//             </h1>
//             <button
//               className="w-4/5 h-auto py-3 mt-12 bg-blue-950 rounded flex flex-col items-center justify-center hover:opacity-30"
//               onClick={() => setCurrentWindow('HowToPlay')}
//             >
//               <h2 className="text-3xl text-center text-white cursor-pointer font-montserrat">
//                 How to Play
//               </h2>
//             </button>
//             <button
//               className="w-4/5 h-auto py-4 my-5 bg-blue-950 rounded flex flex-col items-center justify-center hover:opacity-30"
//               onClick={() => setCurrentWindow('About21E')}
//             >
//               <h2 className="text-3xl text-center text-white cursor-pointer  font-montserrat">
//                 ABOUT FUNetix/21E
//               </h2>
//             </button>
//             <div className="flex justify-start w-full px-8 pb-8">
//               <p
//                 className="text-8xl text-blue-950 cursor-pointer hover:opacity-30 "
//                 onClick={() => navigate('/*')}
//               >
//                 ←
//               </p>
//             </div>
//           </div>
//         </div>
//       );
//     };
    
//     // const HowToPlay = ({ setCurrentWindow, currentStep }) => {
//     //   return (
//     //     <div className="h-screen bg-word-turtle flex flex-col justify-center items-center">
//     //       {/* Centered progress indicator */}
//     //       <div className="mb-4">
//     //         <ProgressIndicator currentStep={currentStep} />
//     //       </div>
    
//     //       {/* Centered content box */}
//     //       <div className="w-[400px] h-8/10 flex flex-col items-center justify-center pt-5 pb-2 bg-none border-2 border-black rounded-xl">
//     //         <h1 className="text-3xl text-center text-black font-bold underline underline-offset-1 font-montserrat mt-0 pb-2">
//     //           How to Play
//     //         </h1>
//     //         <p className="text-center text-black text-xs font-montserrat pb-3">
//     //           Build your word out of sounds! Each symbol below <br></br>represents a
//     //           sound in the English language.
//     //         </p>
    
//     //         <p className="text-center text-black text-xs mb-3 justify-start font-montserrat">
//     //           For example,
//     //           <span className="inline-flex items-center mt-0">
//     //             <span
//     //               className="font-bold text-lg m-3 mt-1 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               g
//     //             </span>
//     //             <span
//     //               className="font-bold text-lg m-3 pb-4 ml-1 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               O
//     //             </span>
//     //           </span>
//     //           says “Go” <br />
//     //           and
//     //           <span className="inline-flex items-center mb-0">
//     //             <span
//     //               className="font-bold text-lg m-2 ml-2 mt-1 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               m
//     //             </span>
//     //             <span
//     //               className="font-bold text-lg m-2 mt-1 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               M
//     //             </span>
//     //             <span
//     //               className="font-bold text-lg m-2 mt-1 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               s
//     //             </span>
//     //           </span>
//     //           says “Mouse”
//     //         </p>
    
//     //         <div className="flex justify-center p-0">
//     //           <img
//     //             src="./Alphabet.png"
//     //             alt="Alphabet"
//     //             className="w-[200px] h-auto"
//     //           />
//     //         </div>
    
//     //         {/* Navigation arrows */}
//     //         <div className="flex justify-between w-full px-4 mt-2">
//     //           <p
//     //             className="text-7xl text-blue-950 cursor-pointer hover:opacity-30 "
//     //             onClick={() => setCurrentWindow('MainMenu')}
//     //           >
//     //             ←
//     //           </p>
//     //           <p
//     //             className="text-7xl text-blue-950 cursor-pointer hover:opacity-30 "
//     //             onClick={() => setCurrentWindow('HowToPlay2')}
//     //           >
//     //             →
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   );
//     // };
    
//     // const HowToPlay2 = ({ setCurrentWindow, currentStep }) => {
//     //   return (
//     //     <div className="relative h-screen bg-word-turtle flex justify-center items-center">
//     //       <div className="absolute top-16 left-0 right-0 ">
//     //         <ProgressIndicator currentStep={currentStep} />
//     //       </div>
//     //       <div className="flex flex-col items-center justify-start pt-10 bg-none border-2 border-black rounded-xl w-[782px] h-[474px]">
//     //         <h1 className="text-4xl text-center text-black font-bold underline underline-offset-1  font-montserrat mt-0 pb-6 items-start">
//     //           How to Play
//     //         </h1>
//     //         <p className="text-center text-[24px] text-black font-montserrat pb-5">
//     //           Let’s say the word you need to guess is “Ice”, but you
//     //           <br /> guess the word “Me”. The
//     //           <span className="inline-flex items-center">
//     //             <span
//     //               className="font-bold text-xl mx-2 ml-2 mt-1 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               m
//     //             </span>
//     //           </span>
//     //           and
//     //           <span className="inline-flex items-center">
//     //             <span
//     //               className="font-bold text-xl mx-3  inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               E
//     //             </span>
//     //           </span>
//     //           boxes will turn
//     //           <br /> gray, meaning these symbols are not in the final word.
//     //         </p>
//     //         <div className="flex justify-center w-full px-4 mb-[0px] mt-2 space-x-4">
//     //           <img src="/m-sound.png" alt="m" className="w-28 h-auto" />
//     //           <img src="/e-sound.png" alt="e" className="w-28 h-auto" />
//     //         </div>
//     //         <div className="flex justify-between w-full px-4 mb-[0px]">
//     //           <p
//     //             className="flex text-8xl text-blue-950 cursor-pointer hover:opacity-30  "
//     //             onClick={() => setCurrentWindow('HowToPlay')}
//     //           >
//     //             ←
//     //           </p>
//     //           <p
//     //             className="flex text-8xl text-blue-950 cursor-pointer hover:opacity-30  "
//     //             onClick={() => setCurrentWindow('HowToPlay3')}
//     //           >
//     //             →
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   );
//     // };
    
//     // const HowToPlay3 = ({ setCurrentWindow, currentStep }) => {
//     //   return (
//     //     <div className="relative h-screen bg-word-turtle flex flex-col items-center justify-center">
//     //       <div className="mb-[20px]">
//     //         <ProgressIndicator currentStep={currentStep} />
//     //       </div>
    
//     //       <div className="flex flex-col items-center justify-start pb-8 pt-6 pr-8 pl-8 bg-none border-2 border-black rounded-xl w-7/8 h-5/6">
//     //         <h1 className="text-4xl text-center text-black font-bold underline underline-offset-1 font-montserrat mt-0 pb-6 items-start">
//     //           How to Play
//     //         </h1>
    
//     //         <p className="text-center text-[24px] text-black font-montserrat pb-5">
//     //           You’re getting closer!
//     //           <span className="inline-flex items-center">
//     //             <span
//     //               className="font-bold text-xl mx-2 ml-2 mt-1 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               mm
//     //             </span>
//     //           </span>
//     //           and
//     //           <span className="inline-flex items-center">
//     //             <span
//     //               className="font-bold text-xl mx-3 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               E
//     //             </span>
//     //           </span>
//     //           and makes the word
//     //           <br />
//     //           “My”. The box is yellow here, meaning it is in the
//     //           <br /> final word, but in the wrong spot. Let’s try again!
//     //         </p>
    
//     //         <div className="flex justify-center w-full px-4 mb-[0px] mt-2 space-x-4">
//     //           <img src="/m-sound.png" alt="m" className="w-28 h-auto" />
//     //           <img src="/e-sound.png" alt="e" className="w-28 h-auto" />
//     //         </div>
    
//     //         <div className="flex justify-center w-full px-4 mb-[0px] mt-2 space-x-4">
//     //           <img src="/m-sound.png" alt="m" className="w-28 h-auto" />
//     //           <img src="/i-sound.png" alt="i" className="w-28 h-auto" />
//     //         </div>
    
//     //         {/* Adjusted arrow positioning */}
//     //         <div className="flex justify-between w-full px-4 mb-10">
//     //           <p
//     //             className="flex text-8xl text-blue-950 cursor-pointer hover:opacity-30 -ml-8"
//     //             onClick={() => setCurrentWindow('HowToPlay2')}
//     //           >
//     //             ←
//     //           </p>
//     //           <p
//     //             className="flex text-8xl text-blue-950 cursor-pointer hover:opacity-30 -mr-8"
//     //             onClick={() => setCurrentWindow('HowToPlay4')}
//     //           >
//     //             →
//     //           </p>
//     //         </div>
//     //       </div>
    
//     //       <h1 className="text-center text-white underline underline-offset-1 font-montserrat">
//     //         Settings
//     //       </h1>
//     //     </div>
//     //   );
//     // };
    
//     // const HowToPlay4 = ({ setCurrentWindow, currentStep }) => {
//     //   return (
//     //     <div className="relative h-screen bg-word-turtle flex justify-center items-center">
//     //       <div className="absolute top-2 left-0 right-0 mt-4">
//     //         <ProgressIndicator currentStep={currentStep} />
//     //       </div>
//     //       <div className="flex flex-col items-center justify-start mt-10 bg-none border-2 border-black rounded-xl w-[600px] h-5/6">
//     //         <h1 className="text-4xl text-center text-black font-bold underline underline-offset-1  font-montserrat mt-2 pb-6 items-start">
//     //           How to Play
//     //         </h1>
//     //         <p className="text-center text-black  font-montserrat pb-5">
//     //           You did it! The
//     //           <span className="inline-flex items-center">
//     //             <span
//     //               className="font-bold text-xl mx-2 ml-2 mt-1 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               I
//     //             </span>
//     //           </span>
//     //           and the
//     //           <span className="inline-flex items-center">
//     //             <span
//     //               className="font-bold text-xl mx-3 inline"
//     //               style={{ fontFamily: 'phonibet' }}
//     //             >
//     //               s
//     //             </span>
//     //           </span>
//     //           symbols are now green, meaning<br></br> they are in the correct spot
//     //           in the puzzle. Together, they<br></br> make the word “Ice”, which is
//     //           the answer for this puzzle!
//     //         </p>
//     //         <div className="images-and-arrows flex flex-col items-center w-full px-4 mb-2 relative">
//     //           <div className="flex justify-center w-full space-x-4">
//     //             <img src="/m-sound.png" alt="m" className="w-1/6 h-auto" />
//     //             <img src="/e-sound.png" alt="e" className="w-1/6 h-auto" />
//     //           </div>
//     //           <div className="flex justify-center w-full space-x-4">
//     //             <img src="/m-sound.png" alt="m" className="w-1/6 h-auto" />
//     //             <img src="/i-sound.png" alt="i" className="w-1/6 h-auto" />
//     //           </div>
//     //           <div className="flex justify-center w-full space-x-4 relative">
//     //             <img src="/i-sound.png" alt="i" className="w-1/6 h-auto" />
//     //             <img src="/i-sound.png" alt="i" className="w-1/6 h-auto" />
//     //           </div>
//     //           <div className="flex justify-between w-full  mb-24 pb-4 ">
//     //             <p
//     //               className="flex text-8xl text-blue-950 cursor-pointer hover:opacity-30"
//     //               onClick={() => setCurrentWindow('HowToPlay2')}
//     //             >
//     //               ←
//     //             </p>
//     //             <p
//     //               className="flex text-8xl text-blue-950 cursor-pointer hover:opacity-30"
//     //               onClick={() => setCurrentWindow('Hints')}
//     //             >
//     //               →
//     //             </p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   );
//     // };
    
//     // const Hints = ({ setCurrentWindow, currentStep }) => {
//     //   // eslint-disable-next-line
//     //   const [correctAnswersObj] = useLocalStorage('correctAnswers', {});
    
//     //   const currentLevel = getCurrentLevel(correctAnswersObj || {});
    
//     //   return (
//     //     <div className="relative h-screen bg-word-turtle flex justify-center items-center">
//     //       <div className="absolute top-14 left-0 right-0 mt-4">
//     //         <ProgressIndicator currentStep={currentStep} />
//     //       </div>
//     //       <div className="flex flex-col items-center justify-start mt-10 bg-none border-8 border-[#EBBC72] rounded-xl w-2/5 h-5/8">
//     //         <h1 className="text-4xl text-center text-black font-bold underline underline-offset-1  font-montserrat mt-4 pb-2 items-start">
//     //           Hints
//     //         </h1>
//     //         <h2 className="text-center text-xl text-black  font-montserrat pb-2">
//     //           If you need some help, <br></br> we've given you two hints.
//     //         </h2>
//     //         <div className="flex justify-center">
//     //           <button className="w-[250px] my-3 text-l pr-5 pl-5 pt-4 pb-4 mb-4 text-white border-2 drop-shadow-lg shadow-black bg-parentSupport-bg-color  border-[#FCF443]">
//     //             Eliminate 3 wrong symbols
//     //           </button>
//     //         </div>
//     //         <p className="text-center text-black mb-3  font-montserrat">
//     //           This hint will eliminate 3 symbols<br></br> that are not in the word.
//     //         </p>
//     //         <div className="flex justify-center  border-[#FCF443] rounded-[25px]">
//     //           <button className="w-[250px] my-3 text-l mb-4 pr-5 pl-5 pt-4 pb-4 text-white border-2 drop-shadow-lg shadow-black bg-parentSupport-bg-color  border-[#FCF443] ">
//     //             1 free symbol
//     //           </button>
//     //         </div>
    
//     //         <p className="text-center text-black   font-montserrat">
//     //           This hint gives you a symbol<br></br> that is in the word, and puts
//     //           <br></br> in the correct spot.{' '}
//     //         </p>
//     //         <div className="flex justify-between w-full  ">
//     //           <p
//     //             className="flex text-7xl text-[#02396B] cursor-pointer hover:opacity-30 pl-4  "
//     //             onClick={() => setCurrentWindow('HowToPlay4')}
//     //           >
//     //             ←
//     //           </p>
//     //           <Link
//     //             to={`/level/${currentLevel}` || '/level/1'}
//     //             className="flex text-4xl text-[#02396B] cursor-pointer hover:opacity-30  font-montserrat pr-4 justify-end align-center pt-4"
//     //           >
//     //             Play
//     //           </Link>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   );
//     // };
    
//     // const About21E = ({ setCurrentWindow }) => {
//     //   return (
//     //     <div className="relative h-screen bg-word-turtle">
//     //       <div className="absolute inset-0 flex flex-col items-center justify-center">
//     //         <div className="z-10">
//     //           <div className="flex flex-col items-center">
//     //             <div className="flex items-left z-10 pt-6 text-5xl  font-montserrat font-bold text-[#1E3057]">
//     //               <h1>ABOUT 21E®</h1>
//     //             </div>
//     //             {/* <div className="flex flex-row items-end mb-8">
//     //               <div className="flex flex-row items-end"> */}
//     //             <div className="flex flex-row items-end mt-0">
//     //               <div className="flex flex-row items-end pl-72">
//     //                 <img
//     //                   className="w-28 mx-1"
//     //                   src="/turtle-4.png"
//     //                   alt="Turtle 4-1"
//     //                 />
//     //                 <img
//     //                   className="w-28 mx-1"
//     //                   src="/turtle-4.png"
//     //                   alt="Turtle 4-2"
//     //                 />
//     //                 <img
//     //                   className="w-28 mx-1"
//     //                   src="/turtle-4.png"
//     //                   alt="Turtle 4-3"
//     //                 />
//     //               </div>
//     //               <div className="flex items-end mx-2 ">
//     //                 <img className="w-72" src="/turtle-3.png" alt="Turtle 3" />
//     //               </div>
//     //             </div>
//     //             <div className="flex flex-row justify-center align-center mb-8">
//     //               <div className="text-center">
//     //                 {/* <h2 className="text-2xl text-black font-bold mb-2  font-montserrat"> */}
//     //                 <h2 className="text-2xl text-black font-bold mb-2  font-montserrat text-left ml-4">
//     //                   Dear Parents,
//     //                   <br />
//     //                   <br />
//     //                   FUNetix is a lot of things, but mostly it’s a fascinating and
//     //                   wonderful
//     //                   <br />
//     //                   piece of technology that takes 99% of the frustration out of
//     //                   learning
//     //                   <br />
//     //                   how to read by revealing the hidden sounds in EVERY English
//     //                   word.
//     //                   <br />
//     //                   FUNetix is a Secret/Magic Code that can be used as a phonetic
//     //                   <br />
//     //                   English code called Kindercode™ or 21E®, and it’s also an app
//     //                   <br />
//     //                   that works on ANY platform and teaches children how to read in
//     //                   <br />
//     //                   just 12 hours of total play time. You can download and play
//     //                   the
//     //                   <br />
//     //                   FUNetix 12 Hour Reading App by visiting the App Store or
//     //                   Google Play.
//     //                   <br />
//     //                   For more information about FUNetix, please read through our
//     //                   Parent
//     //                   <br />
//     //                   Orientation pdf{' '}
//     //                   <a
//     //                     href="https://drive.google.com/file/d/1KayUz_kpKcseEVGyOQS0qxq2t6jJpYgB/view"
//     //                     target="_blank"
//     //                     rel="noopener noreferrer"
//     //                     style={{ color: '#196CB9' }}
//     //                   >
//     //                     here
//     //                   </a>
//     //                   !
//     //                 </h2>
//     //               </div>
//     //             </div>
//     //           </div>
//     //           <div className="absolute bottom-0 left-0 mb-4 ml-4">
//     //             <button
//     //               className="text-7xl text-[#02396B] cursor-pointer hover:opacity-30  font-  montserrat"
//     //               onClick={() => setCurrentWindow('MainMenu')}
//     //             >
//     //               ←
//     //             </button>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   );
//     // };
    
//     function Donation() {
//       // function Instructions({ closeModal }) {
//       const [currentWindow, setCurrentWindow] = useState('MainMenu');
//       // const [gameOver, setGameOver] = useState(false);
    
//       // const steps = ['MainMenu', 'HowToPlay', 'Hints', 'Settings'];
//       // const currentStep = steps.indexOf(currentWindow) + 1;
    
//       const windows = {
//         MainMenu: <MainMenu setCurrentWindow={setCurrentWindow} currentStep={0} />,
//         HowToPlay: (
//           <HowToPlay setCurrentWindow={setCurrentWindow} currentStep={1} />
//         ),
//         HowToPlay2: (
//           <HowToPlay2 setCurrentWindow={setCurrentWindow} currentStep={2} />
//         ),
//         HowToPlay3: (
//           <HowToPlay3 setCurrentWindow={setCurrentWindow} currentStep={3} />
//         ),
//         HowToPlay4: (
//           <HowToPlay4 setCurrentWindow={setCurrentWindow} currentStep={4} />
//         ),
//         Hints: <Hints setCurrentWindow={setCurrentWindow} currentStep={5} />,
//         Play: <WordTurtle setCurrentWindow={setCurrentWindow} />,
//         About21E: <About21E setCurrentWindow={setCurrentWindow} />,
//       };
    
//       return (
//         <div className="bg-none border-2 border-black rounded-xl pb-8 px-8  font-  montserrat">
//           {/* <p className="mt-5 text-4xl cursor-pointer" onClick={() => closeModal()}>
//             ❌
//           </p> */}
//           {windows[currentWindow]}
//         </div>
//       );
//     }
    
    
// export default Donation

