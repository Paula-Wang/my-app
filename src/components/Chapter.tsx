import React from "react";
import {useState} from "react";
import SubChapter from "./SubChapter";

const Chapter = ({book}:BookProps) => {
    return <SubChapter book = {book} />;
};

export default Chapter;