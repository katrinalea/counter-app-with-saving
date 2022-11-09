import { useState } from "react";

function EmojiPicker(): JSX.Element {
  const [emojiValueFromRender, queueRerenderWithNewEmoji] = useState("");

  const [prevEmojiFromRender, queueRerenderWithPrevEmoji] = useState<string[]>(
    []
  );

  const sad = () => {
    queueRerenderWithNewEmoji("😭");
    newArray.push(emojiValueFromRender);
  };
  const happy = () => {
    queueRerenderWithNewEmoji("😃");
    newArray.push(emojiValueFromRender);
  };
  const tired = () => {
    queueRerenderWithNewEmoji("😴");
    newArray.push(emojiValueFromRender);
  };
  const cool = () => {
    queueRerenderWithNewEmoji("😎");
    newArray.push(emojiValueFromRender);
  };
  const sick = () => {
    queueRerenderWithNewEmoji("🤮");
    newArray.push(emojiValueFromRender);
  };
  const cowboy = () => {
    queueRerenderWithNewEmoji("🤠");
    newArray.push(emojiValueFromRender);
  };
  const stored = () => {
    queueRerenderWithPrevEmoji([...prevEmojiFromRender, emojiValueFromRender]);
  };

  return (
    <>
      <h1>Emoji Picker</h1>
      <p>Your previous emoji:{prevEmojiFromRender}</p>
      <button onClick={sad}>😭</button>
      <button onClick={happy}>😃</button>
      <button onClick={tired}>😴</button>
      <button onClick={cool}> 😎</button>
      <button onClick={sick}>🤮</button>
      <button onClick={cowboy}>🤠 </button>
      <button onClick={stored}>Store Emojis</button>
      <Array />
    </>
  );
}

const newArray: string[] = [];
const Array = () => {
  return (
    <>
      <p> Your previous emoji: </p>
      <ul>
        {newArray.slice(-5).map((newArray) => {
          return <>{newArray}</>;
        })}
      </ul>
    </>
  );
};


export default EmojiPicker;
