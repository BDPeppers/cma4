import * as React from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../Navbar/NavigationBar';

export interface ILayoutProps {
    children?: JSX.Element | JSX.Element[]
}

var links: Array<string> = ['Home', 'About']
export default function Layout (props: ILayoutProps) {
  return (
    <div>
      <NavigationBar navLinks={links}/>
        {props.children}
      <Footer/>
    </div>
  );
}
