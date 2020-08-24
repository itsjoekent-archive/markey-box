import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="faq">
          <h3>What is a secure ballot drop box?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="faq">
          <h3>Pretium aenean pharetra magna ac placerat vestibulum?</h3>
          <p>Elit sed vulputate mi sit amet. Integer malesuada nunc vel risus commodo viverra. Id diam vel quam elementum pulvinar etiam non quam lacus. Sapien faucibus et molestie ac feugiat. Consectetur libero id faucibus nisl tincidunt. Libero id faucibus nisl tincidunt eget.</p>
        </div>
        <p className="footnote">If you have more question about voting, visit <a href="https://edmarkey.com/vote">edmarkey.com/vote</a>.</p>
      </div>
      <span className="disclaimer">paid for by the markey campaign</span>
    </footer>
  );
}
