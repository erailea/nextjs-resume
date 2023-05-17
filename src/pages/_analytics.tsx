import Script from 'next/script';
import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    function trackMousePosition(event) {
      const { clientX, clientY } = event;
      window.gtag('event', 'mousemove', {
        event_category: 'Mouse',
        event_label: `X: ${clientX}, Y: ${clientY}`,
      });
    }

    document.addEventListener('mousemove', trackMousePosition);

    return () => {
      document.removeEventListener('mousemove', trackMousePosition);
    };
  }, []);

  return (
    <>
      <Script
        id="gtm-script"
        src="https://www.googletagmanager.com/gtag/js?id=G-N4078EZZBM"
        strategy="afterInteractive"
      ></Script>
      <Script id="gtm-script-runner" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-N4078EZZBM');`}</Script>
    </>
  );
}

declare global {
  interface Window {
    gtag: any;
  }
}
