import React from 'react';

export default function Intro() {
    const introTXT = (
        <p style={{ textAlign: 'left' }}>
            Hello, my name is Noah and I am currently 16 years old.<br /> <br />
            I spend most of my freetime codeing and developing my own little applications.
            You can find some of those on this portfolio. In most cases they are scripted using the libary React.
            But sometimes i like to keep it simple and use plain Javascript. <br /> <br />
            I am also familar with pure CSS and HTML, also i do like to implement Google libarys
            like fonts, icons etc into my applications.
            Next to Webdevelopment in the frontend i have experience with compiled languages
            like Python, C++, C# and even Java. I tried Hardware engineering a few moths ago with an arduino board
            but that did not went as successfully as web developing.

        </p>
    );

    return <div>{introTXT}</div>;
}
