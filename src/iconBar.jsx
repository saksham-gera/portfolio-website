import Icon from './icon.jsx'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

import './iconBar.css'

export default function IconBar() {
    return (
        <div className="icon-bar">
            <Icon IconTag= {HomeOutlinedIcon} jumpToId="#profile"/>
            <Icon IconTag={AccountCircleOutlinedIcon} jumpToId="#about"/>
            <Icon IconTag={TerminalOutlinedIcon} jumpToId="#technologies"/>
            <Icon IconTag={WorkOutlineOutlinedIcon} jumpToId="#experiences"/>
            <Icon IconTag={CallOutlinedIcon} jumpToId="#contact"/>
        </div>
    );
}