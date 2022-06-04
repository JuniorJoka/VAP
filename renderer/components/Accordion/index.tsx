import { useTransition } from '@react-spring/web';
import AccordionProps from './Accordion.types';

const Accordion = ({ open, children }: AccordionProps) => {
  const transition = useTransition(open, {
    from: { maxHeight: 0, opacity: 0 },
    enter: { maxHeight: 70, opacity: 1 },
    leave: { maxHeight: 0, opacity: 0 },
  });

  return (
    <>
      <div>{(children as any)[0]}</div>
      {transition((style, item) => item && <div style={style as any}>{(children as any)[1]}</div>)}
    </>
  );
};

export default Accordion;
