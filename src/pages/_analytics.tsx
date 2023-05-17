import Script from 'next/script';

export default function Analytics() {
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
