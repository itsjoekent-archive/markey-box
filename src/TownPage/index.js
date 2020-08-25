import React from 'react';
import copy from 'copy-to-clipboard';
import { useAppContext } from '../AppContext';
import Footer from '../Footer';
import './style.css';
import { ReactComponent as FacebookIcon } from './fb.svg';
import { ReactComponent as TwitterIcon } from './tw.svg';
import cover from './cover.jpg';

// FROM: https://stackoverflow.com/a/1500501
function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '">' + url + '</a>';
  });
}

export default function TownPage() {
  const { town } = useAppContext();

  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => setCopied(false), 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [copied, setCopied]);

  if (!town) {
    return null;
  }

  const { address, id, instructions, zip } = town;
  const joinedAddress = `${address.trim()}${zip ? `, ${zip}` : ''}`;

  const joinedAddressLowercase = joinedAddress.toLowerCase();
  const hideMaps = joinedAddressLowercase.includes('location 1') ||
    joinedAddressLowercase.includes('multiple location') ||
    joinedAddressLowercase.includes('•') ||
    joinedAddressLowercase.includes('.;') ||
    joinedAddressLowercase.includes('contact your town clerk');

  const shareLink = window.location.href;
  const customShareText = `How drop off your ballot in ${id}`;

  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${shareLink}&quote=${encodeURIComponent(customShareText || '')}`;
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${customShareText || ''}\n${shareLink}`)}`;

  function onCopy() {
    if (!copied) {
      copy(shareLink);
      setCopied(true);
    }
  }

  return (
    <React.Fragment>
      <div className="town">
        <h1 className="town-title">
          how drop off your ballot in
          <span>{id}</span>
        </h1>
        <div className="info-group">
          <h3>dropbox address</h3>
          <p>{joinedAddress}</p>
          {!hideMaps && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(joinedAddress)}`}
            >Google maps directions</a>
          )}
        </div>
        {instructions && (
          <div className="info-group">
            <h3>dropbox instructions</h3>
            <p dangerouslySetInnerHTML={{ __html: urlify(instructions) }} />
          </div>
        )}
        <div className="info-group">
          <h3>share this with your friends & family</h3>
          <p>Make sure everyone you know is able to safely vote early for Ed Markey.</p>
          <div className="share">
            <a target="_blank" rel="noopener noreferrer" href={facebookLink}>
              <FacebookIcon />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={twitterLink}>
              <TwitterIcon />
            </a>
            <button className="share-copy-button" onClick={onCopy}>
              {copied ? 'copied to clipboard!' : 'copy link'}
            </button>
          </div>
        </div>
        <img className="town-cover" src={cover} alt="Ed Markey casting his ballot at a polling site" />
      </div>
      <Footer />
    </React.Fragment>
  );
}
