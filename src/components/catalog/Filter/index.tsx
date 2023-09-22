import React from 'react';
import MyCheckbox from "../../UI/MyCheckbox";
import MyInput from "../../UI/MyInput";

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter__title block-title">Filter</div>
            <div className="filter__groups">
                <div className="filter__group">
                    <div className="filter-group">
                        <div className="filter-group__title">Gender</div>
                        <div className="filter-group__checkboxes">
                            <MyCheckbox label="Male"/>
                            <MyCheckbox label="Female"/>
                        </div>
                    </div>
                </div>
                <div className="filter__group">
                    <div className="filter-group">
                        <div className="filter-group__title">Color</div>
                        <div className="filter-group__checkboxes">
                            <MyCheckbox label="Red"/>
                            <MyCheckbox label="Apricot"/>
                            <MyCheckbox label="Black"/>
                            <MyCheckbox label="Black & White"/>
                            <MyCheckbox label="Silver"/>
                            <MyCheckbox label="Tan"/>
                        </div>
                    </div>
                </div>
                <div className="filter__group">
                    <div className="filter-group">
                        <div className="filter-group__title">Price</div>
                        <div className="filter-group__inputs">
                            <MyInput
                                name="min"
                                type="number"
                            />
                            <MyInput
                                name="max"
                                type="number"
                            />
                        </div>
                    </div>
                </div>
                <div className="filter__group">
                    <div className="filter-group">
                        <div className="filter-group__title">Breed</div>
                        <div className="filter-group__checkboxes">
                            <MyCheckbox label="Small"/>
                            <MyCheckbox label="Medium"/>
                            <MyCheckbox label="Black"/>
                            <MyCheckbox label="Large"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;