import React, { FC } from 'react'
import { NavigationDots, SocialMedia } from '@/components/Navbar';


const AppWrap = <P extends {}>(WrappedComponent: FC<P>, idName: string, className?: string) => function HOC(props: P) {
  return (
    <div className={`app__container ${className}`} >
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <WrappedComponent {...props} />
        <div className="copyright">
          <p className="p-text">@2020 BETTY</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
