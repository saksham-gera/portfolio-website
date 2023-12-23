import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Icon from './icon';
import './arrowButton.css';

export default function Arrowbutton() {
    return (
        <div className="arrow-button">
            <Icon IconTag = {KeyboardArrowDownOutlinedIcon}/>
        </div>
    );
}