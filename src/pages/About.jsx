import { Fade } from "react-awesome-reveal";
import {Section} from './About.styled'

const About = ({ dark }) => {
  return (
    <Section className="row d-flex flex-column-reverse flex-lg-row">
      <div className="img-fluid mx-auto d-block  align-self-center col-12 col-lg-4">
        <Fade>
          <img
            className={dark ? "imgDark" : "imgLight"}
            loading="lazy"
            src="https://res.cloudinary.com/trive/image/upload/q_auto:eco/v1670288333/PXL_20221106_214328354.jpg"
            alt="chukwuemeka collins anyanwu"
          />
        </Fade>
      </div>
      <div className="col-12 col-lg-7 fw-lighter">
        <h1
          className="display-4 fw-bolder text-start mt-4 mb-2 d-block"
          style={{ color: dark && "#1d9bf0" }}
        >
          Hi, I'm Chukwuemeka.
        </h1>

        <p className={dark && "dark"}>
          I'm an Electronic and Computer Engineer who loves building things with
          code.
        </p>

{/*         <p className={dark && "dark"}>
          I first became enthralled with programming in 2016, towards the end of
          my service year. A friend of mine called me and told me about a
          program where people were taught and paid to become developers. As a
          person who was looking for a way to get into the tech space but had no
          means (no
          <b style={{ fontFamily: "Bold" }}> computer</b> at the time), I was
          intrigued by this reality that people could get paid to code.
        </p>

        <p className={dark && "dark"}>
          The city where I lived was far a way from the city my friend told me
          he found this opportunity, so I started coding with my{" "}
          <b style={{ fontFamily: "Bold" }}> phone</b>. I jumped right into
          <b className="text-uppercase" style={{ fontFamily: "Bold" }}>
            {" "}
            HTML
          </b>{" "}
          and{" "}
          <b className="text-uppercase" style={{ fontFamily: "Bold" }}>
            {" "}
            CSS
          </b>
          . Soon, I started building webpages and websites based on the
          <b style={{ fontFamily: "Bold" }}> Freecodecamp's</b> responsive web
          design curriculum. Unfortunately, that is as far as it went. I got a
          job in the oil and gas industry shortly after my mandatory service to
          my country. I had less time to learn. I let programming fall by the
          way side and wasn't consistent with it anymore.
        </p>

        <p className={dark && "dark"}>
          But then, in <b style={{ fontFamily: "Bold" }}> 2020</b>, Covid hit
          and suddenly I had more time to commit to code as I was without a job
          that took my whole time. So, I started learning again. Specifically, I
          started from <b style={{ fontFamily: "Bold" }}> javaScript</b> as it
          is the language of the web and most versatile.
        </p>

        <p className={dark && "dark"}>
          After a few months of
          <b style={{ fontFamily: "Bold" }}> self-teaching</b>, I knew this was
          what I wanted to do for my career. So, I signed up for a
          <b style={{ fontFamily: "Bold" }}> remote</b> internship and put my
          heart and soul into it. I was coding every day, late into the night,
          and on weekends. Until I was ready to be unleashed on production code.
          I also had the opportunity to intern{" "}
          <b style={{ fontFamily: "Bold" }}> remotely</b> with a Canadian based
          tech company for 6 months to further hone my skills.
        </p>

        <p className={dark && "dark"}>
          Since having these <b style={{ fontFamily: "Bold" }}> remote</b>{" "}
          working experiences with team members all over the world, I have grown
          as a developer, working alongside{" "}
          <b style={{ fontFamily: "Bold" }}> senior</b> developers who have
          helped me raise my standards for what's expected of any web
          application.
        </p>

        <p className={dark && "dark"}>
          I'm now seeking a <b style={{ fontFamily: "Bold" }}> full-time</b>{" "}
          role where I can contribute my skills both in coding and business to
          help a company achieve their goals.
        </p>
        <p className={dark && "dark"}> */}

<p className={dark && "dark"}>
I am a seasoned DevOps Engineer with over five years of hands-on experience, specializing in infrastructure automation, code migration, configuration management, and system administration. My expertise spans a diverse set of DevOps tools and technologies, including Jenkins, Docker, Kubernetes, AWS, Git, Chef, Puppet, Ansible, Terraform, Grafana, Prometheus, Linux, and Windows PowerShell DSC.

Proficient in developing and managing CI/CD pipelines, I streamline software delivery processes and possess a deep understanding of cloud computing and Infrastructure-as-Code (IaC) principles. With a proven track record, I collaborate with cross-functional teams to optimize software development and deployment workflows, demonstrating an aptitude for architecting robust and scalable solutions.

My proficiency extends to scripting languages such as JavaScript, Python, and Bash, enhancing my ability to tackle diverse challenges. Exceptional interpersonal skills facilitate seamless communication and harmonious collaboration across multifaceted teams and roles.

Dedicated to implementing DevOps best practices, my unwavering passion drives efficiency, scalability, and reliability within software development life cycles. As evidenced by my participation in the multiCloud Specialization, I have successfully completed projects reflecting real-life scenarios. Notably, I led a project migrating on-premises infrastructure to AWS, utilizing fundamental services like EC2, S3, and RDS. These projects showcase my ability to skillfully employ cloud technologies for seamless transformations and enhanced infrastructure efficiency.
</p>
<p className={dark && "dark"}>        
<b style={{ fontFamily: "Bold" }}> Key Areas of Expertise:</b> <br />
- Strong grasp of cloud computing platforms: AWS, Microsoft Azure, and Google Cloud Platform (GCP).<br />
- Proficient in Infrastructure-as-Code (IaC) principles using tools like Terraform and CloudFormation.<br />
- Expertise in containerization technologies (Docker) and container orchestration using Kubernetes.<br />
- Knowledgeable in CI/CD pipelines, with hands-on experience using Jenkins.<br />
- Experience with configuration management tools like Ansible for system configurations.<br />
- Proficient in version control systems, particularly Git for collaborative coding efforts.<br />
- Knowledgeable about monitoring and logging tools: Prometheus, Grafana, and CloudWatch<br />
<br />
  <p className={dark && "dark"}> 
Confident in my ability to contribute meaningfully to DevOps initiatives, I bring a wealth of experience and a commitment to excellence in enhancing efficiency and reliability across software development processes.
</p>        
</p>
      </div>
    </Section>
  );
};

export default About;
