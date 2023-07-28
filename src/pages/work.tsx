import {
  Img,
  WorkCon,
  WorkH1,
  WorkImageCon,
  WorkLink,
  WorkP,
  WorkTextCon,
} from "../components/work/WorkElements";
import InspoQuoteGenGif from "../assets/InspoQuoteGen.gif";
import AppleGeeksGif from "../assets/AppleGeeks.gif";

export const Work = () => {
  return (
    <>

        <WorkCon id="WorkCon1">
          <WorkImageCon>
            <Img src={AppleGeeksGif} />
          </WorkImageCon>
          <WorkTextCon>
            <WorkH1>"Apple Geeks"</WorkH1>
            <WorkP>Github: </WorkP>
            <WorkLink
              href="https://github.com/MagdalenaPizarroO/Apple-Geeks"
              target="_blank"
              rel="noopener noreferred"
            >
              https://github.com/MagdalenaPizarroO/Apple-Geeks
            </WorkLink>
            <WorkP>
              Proyecto final que concluye con la obtención de la certificación
              "FULL STACK SOFTWARE DEVELOPMENT" de 4Geeks Academy Santiago
            </WorkP>
            <WorkP>
              "Plataforma en línea dedicada exclusivamente a la publicación y
              promoción de servicios relacionados con la gama de productos de
              Apple"
            </WorkP>
          </WorkTextCon>
        </WorkCon>
        <WorkCon id="WorkCon2">
          <WorkImageCon>
            <Img src={InspoQuoteGenGif} />
          </WorkImageCon>
          <WorkTextCon>
            <WorkH1>"Inspirational Quote Generator"</WorkH1>
            <WorkP>Github: </WorkP>
            <WorkLink
              href="https://github.com/MagdalenaPizarroO/inspirational-quote-generator"
              target="_blank"
              rel="noopener noreferred"
            >
              https://github.com/MagdalenaPizarroO/inspirational-quote-generator
            </WorkLink>
            <WorkP>Website: </WorkP>
            <WorkLink
              href="https://prod.dikw667fsd31w.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferred"
            >
              https://prod.dikw667fsd31w.amplifyapp.com/
            </WorkLink>
            <WorkP>
              Personal project to practice React, Next.js, TypeScript and AWS
            </WorkP>
            <WorkP>
              With the help of FreeCodeCamp, I was able to create a random quote
              generator using the ZenQuotes API. The website was deployed using
              AWS.{" "}
            </WorkP>
          </WorkTextCon>
        </WorkCon>

    </>
  );
};
