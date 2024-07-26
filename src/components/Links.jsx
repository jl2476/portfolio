import React from 'react';
import { linkedin, github } from '../assets'; // Adjust the path if necessary

//import styles from '../ComponentsCSS/Links.module.css'; // for custom styles for a later revision

// Descriptive function name
const Links = () => {
  console.log('Links component rendered');
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Feel free to reach out on LinkedIn or GitHub. I'm always happy to connect and chat.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/j0hnl1/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LinkedinIcon className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/jl2476" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <GithubIcon className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Icon components
const GithubIcon = (props) => {
  return <img src={github} alt="GitHub" {...props} />;
}

const LinkedinIcon = (props) => {
  return <img src={linkedin} alt="LinkedIn" {...props} />;
}

export default Links;
