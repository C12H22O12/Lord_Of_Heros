import React from "react";

function Header() {
    const menuItem = [
        {
            title: "공식 블로그",
            uri: 'https://blog-ko.lordofheroes.com/'
        }, {
            title: "쿠폰 입력하기",
            uri: 'https://www.coupon.lordofheroes.com/'
        }
    ]
    return (
        <div id="Header">
            {
                menuItem.map(
                    item => <a href={item.uri} key={item.title} className="HeaderItem">{item.title}</a>
                )
            }
        </div>
    );
}

export default Header;
