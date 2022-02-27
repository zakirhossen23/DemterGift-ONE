import React, { useState, useEffect } from 'react';
// import {ContentLoader} from '@/components/common/ContentLoader'
import { useIntl } from 'react-intl'
import { NavLink } from 'react-router-dom'
import { Button, Grid, makeStyles } from "@material-ui/core";
import './index.scss'
import Router from 'next/router'
import * as nearAPI from "near-api-js"
import getConfig from "@/config"

export function Nav(): JSX.Element {
   
    function NavButtons(): JSX.Element {
        if (window.localStorage.getItem("Type") == null || window.localStorage.getItem("Type") == "") {
            return (<>
                <li>
                    <NavLink to="/donation" id="donationbtnNav">
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/CreateEvents">
                        Create Events
                    </NavLink>
                </li>
            </>);
        }
        if (window.localStorage.getItem("Type") == "user") {
            return (<>
                <li>
                    <NavLink to="/donation" id="donationbtnNav">
                        Donation
                    </NavLink>
                </li></>);
        }
        return (<>
            <li>
                <NavLink to="/donation" id="donationbtnNav">
                    Donation
                </NavLink>
            </li>
            <li>
                <NavLink to="/CreateEvents">
                    Create Events
                </NavLink>
            </li>
        </>)
    }
    const [modalShow, setModalShow] = useState(false);
    return (
        <nav className="main-nav">
            <ul>
                <NavButtons />

                
            </ul>


        </nav>
    )
}
