import { useEffect, useRef } from 'react';
import { HtmlElement } from 'react-pdf-html/dist/parse';

export const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (
        ref.current &&
        !(ref.current as HtmlElement).innerHTML.includes(
          (event.target as HtmlElement).innerHTML,
        )
      ) {
        callback();
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback]);

  return ref;
};
