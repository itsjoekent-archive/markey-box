import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="faq">
          <h3>What is a secure ballot dropbox?</h3>
          <p>Across Massachusetts, cities and towns are installing dropboxes where voters can return their completed ballots that they received in the mail. If you requested and received a mail-in ballot, returning your ballot via a dropbox in your community is a safe and secure way to make sure that your vote is counted. Please make sure to first complete your ballot (vote for Ed) and put it in the signed yellow envelope and white return envelope.</p>
        </div>
        <p className="footnote">This directory will be updated frequently. Please use this tool to search for the location of the ballot drop boxes in your community.  You can only drop off your ballot in a dropbox in your own community. You can also return your completed ballot at the designated early vote times and locations in your community, which can be found <a href="https://www.sec.state.ma.us/EarlyVotingWeb/EarlyVotingSearch.aspx">here</a>.</p>
        <p className="footnote">If you have more question about voting, visit <a href="https://edmarkey.com/vote">edmarkey.com/vote</a>. Voter helpdesk: vote@edmarkey.org, Voter protection hotline: (774) 202-9178</p>
      </div>
      <span className="disclaimer">paid for by the markey committee</span>
    </footer>
  );
}
