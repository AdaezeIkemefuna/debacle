import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  bgClassName?: string;
  sectionClassName?: string;
  // eslint-disable-next-line
  children: any;
  style?: any;
  id?: string;
  innerRef?: React.LegacyRef<HTMLElement>;
}

const Section = (props: Props) => {
  const { bgClassName, sectionClassName, children, id, innerRef, style } =
    props;
  return (
    <section {...props} id={id} className={bgClassName} style={style}>
      <section ref={innerRef} className={`container ${sectionClassName}`}>
        {children}
      </section>
    </section>
  );
};

export { Section };
