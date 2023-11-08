import React from "react";
import Avatar from "../components/Avatar";
import SkillsMenu from "../components/SkillsMenu";
import "../styles/Avatar.css";

export default function Skills() {
    return (
        <>
            <Avatar page="skills" />
            <SkillsMenu />
        </>
    );
}