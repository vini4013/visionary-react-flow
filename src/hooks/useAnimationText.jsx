import { useEffect, useState } from 'react';
import TypeIt from 'typeit-react';

export function useAnimatedText() {
  const [instance, setInstance] = useState(null);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!instance) return ;

    instance.type(text, { instant: true }).flush();
  }, [text]);

  const el = (
    <TypeIt options={{ cursor: false }}
      getAfterInit={(i) => {
        setInstance(i);

        return i;
      }}
    ></TypeIt>
  );

  return [el, setText];
}