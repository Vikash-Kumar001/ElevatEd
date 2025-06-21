import React from 'react';

const LecturePlayer = ({ videoUrl, title }) => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src={videoUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-96 rounded"
                ></iframe>
            </div>
        </div>
    );
};

export default LecturePlayer;
