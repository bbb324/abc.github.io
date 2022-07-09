/**
 * Created by junxie on 18/5/27.
 */
import React, { useMemo } from 'react';
import './header.less';

const Header = () => useMemo(() => {
    return <div className={'header'}>
        <span>John's Site</span>
    </div>;
}, []);

export default Header;

