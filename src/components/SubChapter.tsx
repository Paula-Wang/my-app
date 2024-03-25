import React from "react";
import {useState} from "react";
import Text from "./Text";

const SubChapter = ({book}:BookProps) => {
    return <Text book = {book} />;
};

export default SubChapter;