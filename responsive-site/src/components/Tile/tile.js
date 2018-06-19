import React from 'react';


function Tile(props) {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="ImgContainer">
                <img src={props.skillImg} alt={props.skillName} />
            </div>
            <div className="SkillName">
                {props.skillName}
            </div>
            <div className="SkillWriteup">
                {props.skillDescription}
            </div>
        </div>
    )
}

export default Tile;
