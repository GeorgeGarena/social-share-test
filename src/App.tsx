import "./App.css";

function App() {
  const url = 'https://www.garena.tw/';
  const encodedUrl = encodeURIComponent(url);
  const shareContent = 'hello';
  const lineShareLink = `https://social-plugins.line.me/lineit/share?text=${shareContent}&url=${encodedUrl}`;
  const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`; 
  const whatsappShareLink = `https://wa.me/?text=${encodedUrl}`;
  const twitterShareLink = `http://twitter.com/share?text=${shareContent}&url=${encodedUrl}`;

  function nativeShare() {
    if (navigator.share) {
       navigator.share({
         title: 'LOL is fantastic',
        text: 'LOL is awesome',
        url: 'https://lol.garena.tw',
      })
    } else {
      alert('api not available');
    }
  }

  return (
    <div className="App">
      <ul>
        <li>
          <a href={lineShareLink} target="_blank">line share</a>
        </li>
        <li>
          <a href={fbShareLink} target="_blank">FB share</a>
        </li>
        <li>
          <a href={whatsappShareLink} target="_blank">whatsapp share</a>
        </li>
        <li>
          <a href={twitterShareLink} target="_blank">Twitter share</a>
        </li>
      </ul>
      <button onClick={nativeShare}>nativeShare</button>
    </div>
  );
}

export default App;
