import { Box, Button, FormControl, OutlinedInput } from "@mui/material";
import React, { useState } from "react";

// export interface IMailingListProps {
//   postUrl: string;
//   U: string;
//   urlId: string;
// }

export default function MailingList() {
  const [email, setEmail] = useState("");

  return (
    <section className="mailingList-section section-wrapper">
      <div className="cma-mailing-list-box">
        <h1 className="mailinglist-header header">Stay In Touch</h1>
        <h2 className="mailingList-tagline">
          Subscribe to our newsletter to recieve the latest updates and gym
          specials.
        </h2>
        <Box
          className="form-box"
          component="form"
          noValidate
          autoComplete="off"
        >
          <FormControl>
            <OutlinedInput className="email-input" placeholder="Enter email" />
            <Button className="blk-bg form-btn">Subscribe</Button>
          </FormControl>
        </Box>
      </div>
    </section>
  );
}

//u: 82748537400f62d9bce099994
//id: 1c7eedbab5
//url: https://fit.us14.list-manage.com/subscribe/post

{
  /* <div class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
            <label for="MERGE0">Email Address <span class="req asterisk">*</span></label>
            <div class="field-group">
                <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">
                
                
            </div>
            
        </div>
        
        
        
        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
            <label for="MERGE1">First Name</label>
            <div class="field-group">
                <input type="text" name="MERGE1" id="MERGE1" size="25" value="">
                
                
            </div>
            
        </div> */
}
