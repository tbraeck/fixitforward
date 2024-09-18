// import Link from "next/link";

// const AboutComponent = () => {
//   return (
//     <div className="flex flex-row items-center justify-center h-2/3">
//        <div className="back-button-container">
//                 <Link href="/">
//                     <button className="back-button">BACK</button>
//                 </Link>
//             </div>
//     <div className="flex flex-col w-2/4 items-center justify-center border-2 border-black bg-white p-6 ">
//       <h1 className="text-black mb-4">
//         ABOUT FixItForward
//       </h1>
//       <h2 >
//       Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi finibus faucibus fusce bibendum nostra sodales imperdiet quisque. At dolor est consequat morbi cursus porttitor ipsum augue id. Faucibus nulla in gravida quisque cubilia, augue nibh iaculis. Tempus luctus lacinia commodo; imperdiet sollicitudin aenean. Neque sollicitudin cras nibh; torquent sodales curabitur donec. Amet posuere felis cubilia tempor interdum ultrices. Risus ante lectus tempus luctus donec pellentesque. Eleifend condimentum fusce semper consequat cursus porta nunc massa dignissim.

// Maecenas nec dolor malesuada varius malesuada dolor vestibulum? Commodo et mi pharetra etiam vel? Vitae neque fusce facilisi adipiscing amet, porta curae dictumst. Inceptos nascetur habitant proin donec feugiat; tristique habitasse vulputate. Torquent euismod donec malesuada, interdum odio magna penatibus. Felis vehicula facilisis accumsan donec praesent, massa hendrerit. Blandit auctor eleifend himenaeos libero vehicula dapibus. Bibendum vulputate cursus parturient tincidunt ex ad?

// Litora cursus vulputate varius facilisis hendrerit eleifend elit lectus nunc. Tempor ultrices sit diam cursus congue aptent. Velit sociosqu fermentum curae consectetur ante dictum. Justo gravida facilisi dis blandit velit finibus. Mollis consectetur fames lectus dapibus pretium orci curae porttitor? Sociosqu ante dis mi urna aliquam enim arcu. Ad arcu tempor ullamcorper turpis eros torquent eleifend.


//         </h2>
//     </div>
//     </div>
//   )
// }

// export default AboutComponent


import Link from "next/link";
const AboutComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
       <div className="back-button-container absolute top-0 left-0 m-4">
                <Link href="/">
                    <button className="back-button">BACK</button>
                </Link>
            </div>
      <div className="flex flex-col w-2/4 items-center justify-right border-2 border-[#818589] bg-white p-6 opacity-90">
        <h1 className="text-black mb-4">ABOUT FixItForward</h1>
        <h2 className="text-[#818589]">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi finibus faucibus fusce bibendum nostra sodales imperdiet quisque. At dolor est consequat morbi cursus porttitor ipsum augue id. Faucibus nulla in gravida quisque cubilia, augue nibh iaculis. Tempus luctus lacinia commodo; imperdiet sollicitudin aenean. Neque sollicitudin cras nibh; torquent sodales curabitur donec. Amet posuere felis cubilia tempor interdum ultrices. Risus ante lectus tempus luctus donec pellentesque. Eleifend condimentum fusce semper consequat cursus porta nunc massa dignissim.

Maecenas nec dolor malesuada varius malesuada dolor vestibulum? Commodo et mi pharetra etiam vel? Vitae neque fusce facilisi adipiscing amet, porta curae dictumst. Inceptos nascetur habitant proin donec feugiat; tristique habitasse vulputate. Torquent euismod donec malesuada, interdum odio magna penatibus. Felis vehicula facilisis accumsan donec praesent, massa hendrerit. Blandit auctor eleifend himenaeos libero vehicula dapibus. Bibendum vulputate cursus parturient tincidunt ex ad?

Litora cursus vulputate varius facilisis hendrerit eleifend elit lectus nunc. Tempor ultrices sit diam cursus congue aptent. Velit sociosqu fermentum curae consectetur ante dictum. Justo gravida facilisi dis blandit velit finibus. Mollis consectetur fames lectus dapibus pretium orci curae porttitor? Sociosqu ante dis mi urna aliquam enim arcu. Ad arcu tempor ullamcorper turpis eros torquent eleifend.        </h2>
      </div>
    </div>
  );
};

export default AboutComponent;
