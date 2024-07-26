import React, { useState } from "react";
import { download, eye, resume } from "../assets";

const Resume = () => {
  const [isViewing, setIsViewing] = useState(false);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg border bg-card p-6 shadow-md sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Curriculum Vitae
              </h1>
              <p className="mt-2 text-muted-foreground">
                View or download my latest resume.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={resume}
                download
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download
              </a>
              <button
                onClick={() => setIsViewing(!isViewing)}
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <EyeIcon className="mr-2 h-4 w-4" />
                {isViewing ? "Hide" : "View"}
              </button>
            </div>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${isViewing ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
          >
            {isViewing && (
              <div className="mt-8">
                <iframe
                  src={resume}
                  className="w-full aspect-[8/11] rounded-lg border"
                  title="Resume"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DownloadIcon = (props) => {
  return <img src={download} alt="Download" {...props} />;
};

const EyeIcon = (props) => {
  return <img src={eye} alt="Eye" {...props} />;
};

export default Resume;
