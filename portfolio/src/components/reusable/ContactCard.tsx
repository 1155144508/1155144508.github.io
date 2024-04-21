import React from "react";

type Props = {
  title: string,
  icon: string,
  content: string,
}

const ContactCard: React.FC<Props> = props => {
  return (
    <div className="card">
      <p className="h4 card-title">{props.title}</p>
      <div className="d-flex flex-row card-body">
        <p>
          <i className={props.icon} ></i> {props.content}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;