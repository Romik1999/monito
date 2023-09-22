import React from 'react';
import MyCheckbox from "../../UI/MyCheckbox";
import MyInput from "../../UI/MyInput";
import BlockTitle from "../BlockTitle";
import {
    FilterGroupCheckboxes, FilterGroupTitle,
    FilterGroupInputs, FilterGroup, FilterGroups, Filters

} from "./styled";

const Filter = () => {
    return (
        <Filters>
            <BlockTitle>Filter</BlockTitle>
            <FilterGroups>
                <FilterGroup>
                    <FilterGroupTitle>Gender</FilterGroupTitle>
                    <FilterGroupCheckboxes>
                        <MyCheckbox label="Male"/>
                        <MyCheckbox label="Female"/>
                    </FilterGroupCheckboxes>
                </FilterGroup>
                <FilterGroup>
                    <FilterGroupTitle>Color</FilterGroupTitle>
                    <FilterGroupCheckboxes>
                        <MyCheckbox label="Red"/>
                        <MyCheckbox label="Apricot"/>
                        <MyCheckbox label="Black"/>
                        <MyCheckbox label="Black & White"/>
                        <MyCheckbox label="Silver"/>
                        <MyCheckbox label="Tan"/>
                    </FilterGroupCheckboxes>
                </FilterGroup>
                <FilterGroup>
                    <FilterGroupTitle>Price</FilterGroupTitle>
                    <FilterGroupInputs>
                        <MyInput
                            name="min"
                            type="number"
                        />
                        <MyInput
                            name="max"
                            type="number"
                        />
                    </FilterGroupInputs>
                </FilterGroup>
                <FilterGroup>
                    <FilterGroupTitle>Breed</FilterGroupTitle>
                    <FilterGroupCheckboxes>
                        <MyCheckbox label="Small"/>
                        <MyCheckbox label="Medium"/>
                        <MyCheckbox label="Black"/>
                        <MyCheckbox label="Large"/>
                    </FilterGroupCheckboxes>
                </FilterGroup>
            </FilterGroups>
        </Filters>
    );
};

export default Filter;