import React, { useState } from "react";

type Props = {
  video: {
    title: string;
    description: string;
  };
};

const Thumbnail = () => (
  <div className="xs:w-36 flex aspect-video w-32 select-none items-center justify-center rounded-lg bg-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-50 via-blue-50 to-purple-60 bg-cover align-middle text-white/50 shadow-inner-border">
    <svg
      className="drop-shadow-xl"
      width="36"
      height="36"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM52.1716 38.6337L28.4366 51.5801C26.4374 52.6705 24 51.2235 24 48.9464V23.0536C24 20.7764 26.4374 19.3295 28.4366 20.4199L52.1716 33.3663C54.2562 34.5034 54.2562 37.4966 52.1716 38.6337Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

const VideoText = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex-1">
    <h3 className="text-base font-bold leading-tight text-primary">{title}</h3>
    <p className="text-sm leading-snug text-tertiary">{description}</p>
  </div>
);

const VideoContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full flex-row items-center gap-3">{children}</div>
);

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      className={[
        "cursor-pointer rounded-full p-2 hover:bg-card focus:text-red-50 active:scale-95 active:text-red-50",
        isLiked && "bg-red-50/5",
      ].join(" ")}
      onClick={() => {
        setIsLiked((v) => !v);
      }}
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m12 5.184-.808-.771-.004-.004C11.065 4.299 8.522 2.003 6 2.003c-3.736 0-6 2.558-6 6.677 0 4.47 5.471 9.848 10 13.079.602.43 1.187.82 1.74 1.167A.497.497 0 0 0 12 23v-.003c.09 0 .182-.026.26-.074C16.977 19.97 24 13.737 24 8.677 24 4.557 21.743 2 18 2c-2.569 0-5.166 2.387-5.192 2.413L12 5.184zm-.002 15.525c2.071-1.388 4.477-3.342 6.427-5.47C20.72 12.733 22 10.401 22 8.677c0-1.708-.466-2.855-1.087-3.55C20.316 4.459 19.392 4 18 4c-.726 0-1.63.364-2.5.9-.67.412-1.148.82-1.266.92-.03.025-.037.031-.019.014l-.013.013L12 7.949 9.832 5.88a10.08 10.08 0 0 0-1.33-.977C7.633 4.367 6.728 4.003 6 4.003c-1.388 0-2.312.459-2.91 1.128C2.466 5.826 2 6.974 2 8.68c0 1.726 1.28 4.058 3.575 6.563 1.948 2.127 4.352 4.078 6.423 5.466z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export const Video = ({ video }: Props) => {
  return (
    <VideoContainer>
      <Thumbnail />
      <VideoText title={video.title} description={video.description} />
      <LikeButton />
    </VideoContainer>
  );
};