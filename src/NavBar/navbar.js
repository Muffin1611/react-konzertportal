/**
 * Created by Marvin on 13.02.2018.
 */
import React from 'react';
import './navbar.css';


export class NavBar extends React.Component {


    componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

    componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

    handleScroll = (event) => {
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    render() {
        return (
            <div class="header" id="myHeader">
                <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li class="rightAligned"><a href="placeholder.asp">Warenkorb</a></li>
                    <li class="rightAligned"><a href="placeholder.asp">Anmelden</a></li>
                    <li class="rightAligned"><input type="text" placeholder="Search.."></input></li>
                </ul>
            </div>
        );


    }
}

