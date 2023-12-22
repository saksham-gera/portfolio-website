import './icon.css'

export default function Icon({IconTag, jumpToId}) {
    return (
        <div className="icons">
            <a href = {jumpToId}>
                <div className="icons ripple">
                <IconTag fontSize="medium"/>
                </div>
            </a>
        </div>
        );
}