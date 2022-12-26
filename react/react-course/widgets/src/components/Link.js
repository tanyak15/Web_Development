import React from "react";

const Link = ({className , href , children} ) => {
    const onClick = (e) => {
        if(e.metaKey || e.ctrlKey){
            return;
        }

        // to prevent full pg reload
        e.preventDefault();

        // changing the url
        window.history.pushState({} , '' , href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

        const newEvent = new Event('tanya');
        window.dispatchEvent(newEvent);

    };

    return (
    <a onClick={onClick} className={className} href={href}>{children}</a>
    )
}

export default Link;