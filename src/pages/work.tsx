import { Img, WorkCon, WorkH1, WorkImageCon, WorkLink, WorkP, WorkTextCon } from "../components/work/WorkElements";
import InspoQuoteGenGif from "../assets/InspoQuoteGen.gif";
import AppleGeeksGif from "../assets/AppleGeeks.gif";
import LeetCodeCloneGif from "../assets/LeetCodeClone.gif";

export const Work = () => {
  return (
    <>
      <WorkCon id="LeetCodeCloneCon">
        <WorkImageCon>
          <Img src={LeetCodeCloneGif} />
        </WorkImageCon>
        <WorkTextCon>
          <WorkH1>"LeetCode Clone"</WorkH1>
          <WorkP>Github: </WorkP>
          <WorkLink href="https://github.com/MagdalenaPizarroO/LeetCode-clone" target="_blank" rel="noreferrer">
            https://github.com/MagdalenaPizarroO/LeetCode-clone
          </WorkLink>
          <WorkP>Website: </WorkP>
          <WorkLink href="https://leet-code-clone-omega.vercel.app/" target="_blank" rel="noreferrer">
            https://leet-code-clone-omega.vercel.app/
          </WorkLink>
          <WorkP>Personal project to practice React, Next.js, TypeScript, FireStore and Vercel.</WorkP>
          <WorkP>With the help of FreeCodeCamp, I was able to create a clone of the LeetCode website.</WorkP>
          <WorkP>
            The website includes a coding workspace were the user can input JS code and test it against the correct
            answers.
          </WorkP>
          <WorkP>The website was deployed using Vercel and the backend is powered by Firestore.</WorkP>
        </WorkTextCon>
      </WorkCon>

      <WorkCon id="InspoQuoteGenCon">
        <WorkImageCon>
          <Img src={InspoQuoteGenGif} />
        </WorkImageCon>
        <WorkTextCon>
          <WorkH1>"Inspirational Quote Generator"</WorkH1>
          <WorkP>Github: </WorkP>
          <WorkLink
            href="https://github.com/MagdalenaPizarroO/inspirational-quote-generator"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/MagdalenaPizarroO/inspirational-quote-generator
          </WorkLink>
          <WorkP>Website: </WorkP>
          <WorkLink href="https://prod.dikw667fsd31w.amplifyapp.com/" target="_blank" rel="noreferrer">
            https://prod.dikw667fsd31w.amplifyapp.com/
          </WorkLink>
          <WorkP>Personal project to practice React, Next.js, TypeScript and AWS</WorkP>
          <WorkP>
            With the help of FreeCodeCamp, I was able to create a random quote generator using the ZenQuotes API. The
            website was deployed using AWS.
          </WorkP>
        </WorkTextCon>
      </WorkCon>

      <WorkCon id="AppleGeeksCon">
        <WorkImageCon>
          <Img src={AppleGeeksGif} />
        </WorkImageCon>
        <WorkTextCon>
          <WorkH1>"Apple Geeks"</WorkH1>
          <WorkP>Github: </WorkP>
          <WorkLink href="https://github.com/MagdalenaPizarroO/Apple-Geeks" target="_blank" rel="noreferrer">
            https://github.com/MagdalenaPizarroO/Apple-Geeks
          </WorkLink>
          <WorkP>
            Final project that culminates with the attainment of the "FULL STACK SOFTWARE DEVELOPMENT" certification
            from 4Geeks Academy Santiago.
          </WorkP>
          <WorkP>
            Online platform dedicated exclusively to the publication and promotion of services related to the range of
            Apple products.
          </WorkP>
        </WorkTextCon>
      </WorkCon>
    </>
  );
};
