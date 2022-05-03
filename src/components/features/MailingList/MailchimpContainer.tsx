import { id } from "date-fns/locale";
import * as React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export interface IMailchimpContainerProps {
  postUrl: string;
  U: string;
  urlId: string;
}

export default function MailchimpContainer({
  urlId,
  U,
  postUrl,
}: IMailchimpContainerProps) {
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl.concat(U, urlId)}
        // render={({ subscribe, status, message }) => {}}
      />
    </div>
  );
}
