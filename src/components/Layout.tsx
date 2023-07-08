import { ReactNode } from 'react';
import { classNames } from '../utils/functions';
import Header from './Header';
import { Helmet } from 'react-helmet';

export interface Props {
  title: string;
  styles: string;
  children?: ReactNode;
}

const Layout = ({ styles, title, children }: Props) => {
  return (
    <>
      <Helmet>
        <title>{title} | Space Tourism</title>
      </Helmet>
      <div
        className={classNames(
          styles,
          'bg-primary min-h-screen bg-fixed bg-no-repeat bg-cover flex flex-col overflow-y-auto'
        )}
      >
        <div className="z-50">
          <Header active={title.toLowerCase()} />
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
