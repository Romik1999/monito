import React from 'react';
import MySelect from "../../UI/MySelect";
import {MenuItem} from "@mui/material";
import {
    Sort, SortTitle

} from "./styled";

const SortComponent = () => {
    return (
        <Sort>
            <SortTitle>Sort by:</SortTitle>
            <MySelect defaultValue="popular">
                <MenuItem key="1" value="popular">Popular</MenuItem>
                <MenuItem key="2" value="price-up">Price up</MenuItem>
                <MenuItem key="3" value="price-down">Price down</MenuItem>
            </MySelect>
        </Sort>
    );
};

export default SortComponent;