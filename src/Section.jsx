import React, { useState } from 'react';

export default function Section(props) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`section ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
            <div className="header">
                <p>{props.number}</p>
                <p>{props.name}</p>
            </div>
            {expanded && (
                <div className="expanded-info">
                    <p>{props['start date']}</p>
                    <p>{props['due date']}</p>
                    <p>{props.members}</p>
                    <p>{props.status}</p>
                </div>
            )}
        </div>
    );
}