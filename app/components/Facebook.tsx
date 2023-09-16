import React, { useEffect } from 'react';

const Facebook: React.FC = () => {
  useEffect(() => {
    var chatbox = document.getElementById('fb-customer-chat');
    if (chatbox) {
      chatbox.setAttribute("page_id", "537686649638747");
      chatbox.setAttribute("attribution", "biz_inbox");
    }
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function() {
              FB.init({
                xfbml: true,
                version: 'v18.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `
        }}
      />
    </div>
  );
};

export default Facebook;
