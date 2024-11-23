/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container } from "react-bootstrap";

export const TOS = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Terms of Service | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <h1>Terms of Service</h1>
        <i>Last Update: November 24rd, 2024</i>
        <br></br>
        <br></br>
        <h2>Assets and Content Copyright</h2>
        <br></br>
        <p>- With Permission, you may allow use the Assets we provide for personal work. As long they are not used for monetizing (this can be thru social media, web ADs, marketing, etc...). For monetizing and commercial work, please contact me by email only with reason why.</p>
        <p>- <strong>[Personal]</strong> By using our assets, you are required to put our watermark in your work plus your watermark to prevent ownership rights being stolen.</p>
        <p>- By using our assets, you are not allowed to replicate it and claiming as your own. For corporate reason, if you wish to license, please email me for anything marketing uses.</p>
        <p>- By using our assets, you are not allowed to use it for AI Training purposes.</p>
        <br></br>
        <h2>Media Commissions</h2>
        <br></br>
        <h3>Payment Methods and Commission Conditions</h3>
        <br></br>
        <p>- For Normal Commission. We accept: PayPal (International) abd E-Wallet services (Vietnam Only). Please email me on how to pay.</p>
        <p>- For Special Commission (commission related to game gifting). Payment is processed in-game/in-service when it’s payment day or depending on what game gifting limitation.</p>
        <p>- Payment Upfront. Payment needs to be processed first before the work can continue once I sent the Work in Progress work.</p>
        <p>- I will required reference work or description before continue.</p>
        <p>- I can only make up to 4 revisions.</p>
        <p><strong>Rejected requests</strong>: Most common are Blood related, Complex things, sensitive works including NSFW. For non-common ones are depends on the creator. Generally these are for art but graphic related and video editing varies on the workflow you asking.</p>
        <br></br>
        <h3>Refund Policy</h3>
        <br></br>
        <p>- Normal Refund can be made but you might receive less than the original price depending on the processed work.</p>
        <p>- Game gifting: Some Game Terms of Service rules may apply as well.</p>
        <p>- Depending on what situation, I can cancel some commissions or put them on hold in case of heath issue or emergency. If canceled, you will receive a refund through the provided Payment Method.</p>
        <p>• For game gifting, they can be refunded if supported by game or platform or an approval from the Game's Customer Support is required before doing an IAP Refund to prevent account bans. If the refund fails, you can request the Artwork to be put on hold. Hold request are not limited during these situation. You are allowed to cancel the artwork if you don't want to request a hold but do note in certain situation where refunds are not available, you have to accept the lost. Sorry.</p> 
        <p>- Upon request, Commission can be hold up to 3 days for normal days. Any more is not allow.</p>
        <br></br>
        <h3>Client Communitcation</h3>
        <br></br>
        <p>- Use Common Sense.</p>
        <p>- Be active when discussing commissions.</p>
        <p>- Be constructive about your request.</p>
        <p>- Do not ghost me. You are allow be inactive for at least a week (7 days).</p>
        <strong>Fail to follow the Terms will lead to action taken by the creator. For Copyright content, a takedown request will be sent.</strong>
        <br></br>
        <br></br>
      </Container>
    </HelmetProvider>
  );
};
