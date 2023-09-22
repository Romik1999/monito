import React from 'react';
import {
    BlockTitleWrap

} from "./styled";
interface IBlocktitle {
    children: string
}

const BlockTitle = (props: IBlocktitle) => {
    const {children} = props
    return (
        <BlockTitleWrap>
            {children}
        </BlockTitleWrap>
    );
};

export default BlockTitle;