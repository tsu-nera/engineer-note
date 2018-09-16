import React from "react";

const MicroPostList = props => {
  if (props.microposts !== undefined) {
    return (
      <div>
        <h3>Microposts ( {props.microposts.length})</h3>
        <ol className="microposts">
          {props.microposts.map(micropost => (
            <li key={`micropost-${micropost.id}`}>
              <div dangerouslySetInnerHTML={{ __html: props.gravatar }} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
  return <div />;
};

export default MicroPostList;
