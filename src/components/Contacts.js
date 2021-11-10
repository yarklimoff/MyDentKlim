import React from "react";
export function Contacts() {
    return(
        <>
        <div className="contacts"><h1>Контакты</h1>
        <ul>
            <li>
                <img src="Medium/location-pin.svg"/>
                <p>г. Волгоград, улица 10-й Дивизии НКВД, 5</p>
            </li>
            <li>
                <img src="Medium/iphone.svg"/>
                <a href="tel:+79275038485" className="tel">+7 927 503-84-85</a>
            </li>
        </ul>
        </div>
        </>
    )
}
