import {
  H1Con,
  PCon,
  PresentacionCon,
} from "../components/home/HomeElements";

export const Home = () => {
  return (
    <>
      <PresentacionCon id="PresentacionCon">
        <H1Con id="H1Con">
          I'm Magdalena Pizarro Ortega, a passionate and dedicated full-stack
          developer.
        </H1Con>
        <PCon id="PCon">
          <p>
          I am enthusiastic in further developing my skills in creating dynamic and interactive web applications. My goal is to build user-friendly and visually appealing websites that deliver seamless user experiences.
          </p><br/>
          <p>
          As a beginner in the field, I am continuously improving my skills and expanding my knowledge to stay at the forefront of web development trends. 
          </p><br/>
          <p>
            Please take a moment to browse through my portfolio and explore the
            projects I have worked on. If you have any questions or would like
            to discuss potential collaborations, feel free to reach out to me
            through the contact form.
            </p><br/>
          <p>
            Thank you for visiting, and I look forward to connecting with you!
          </p>
        </PCon>
      </PresentacionCon>
    </>
  );
};
