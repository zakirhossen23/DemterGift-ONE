import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router'
import { NavLink } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useContract from '../../../services/useContract';
import DonateNFTModal from '../../components/components/modals/DonateNFTModal';


export default function Donation() {
    const [CreatemodalShow, setModalShow] = useState(false);
    const { contract, signerAddress } = useContract('ERC721');
    const [list, setList] = useState([]);
    const [tokenName, setTokenName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [selectid, setselectid] = useState('');
    const [selectedtype, setselectedtype] = useState('');
    const [SelectedTitle, setSelectedTitle] = useState('');
    const [SelectedendDate, setSelectedendDate] = useState('');


    useEffect(() => {
        fetchContractData();

        window.ethereum.on('accountsChanged', fetchContractData);
        window.ethereum.on('chainChanged', fetchContractData);

        return () => {
            window.ethereum.removeListener('accountsChanged', fetchContractData);
            window.ethereum.removeListener('chainChanged', fetchContractData);
        };
    }, [contract]);
    setInterval(function () {
        calculateTimeLeft();
    }, 1000);



    function calculateTimeLeft() {
        try {
            var allDates = document.getElementsByName("DateCount");
            for (let i = 0; i < allDates.length; i++) {
                var date = (allDates[i]).getAttribute("date");
                allDates[i].innerHTML = LeftDate(date);
            }
        } catch (error) {

        }

    }

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    async function fetchContractData() {

        try {
            if (contract) {
                setTokenName(await contract.name());
                setTokenSymbol(await contract.symbol());

                const totalEvent = await contract.totalEvent();
                const arr = [];
                for (let i = 0; i < Number(totalEvent); i++) {
                    const value = await contract.eventURI(i);

                    if (value) {
                        const object = JSON.parse(value);
                        var pricedes1 = 0;
                        try { pricedes1 = Number(object.properties.Goal.description * 0.1534) } catch (ex) { }

                        arr.push({
                            eventId: i,
                            Title: object.properties.Title.description,
                            Date: object.properties.Date.description,
                            Goalusd: formatter.format(pricedes1),
                            Goal: object.properties.Goal.description,
                            logo: object.properties.logo.description,
                        });
                    }
                    console.log(value);
                }

                setList(arr);
                document.getElementById("Loading").style = "display:none";
            }
        } catch (error) {
            console.error(error);
        }
    }
    function activateCreateNFTModal(e) {
        setselectid(e.target.getAttribute("eventid"));
        setSelectedTitle(e.target.getAttribute("eventtitle"));
        setSelectedendDate(e.target.getAttribute("date"));
        setselectedtype("NFT");

        setModalShow(true);
    }
  
    function LeftDate(datetext) {
        var c = new Date(datetext).getTime();
        var n = new Date().getTime();
        var d = c - n;
        var da = Math.floor(d / (1000 * 60 * 60 * 24));
        var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((d % (1000 * 60)) / 1000);
        return (da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds");
    }

    return (
        <>
            <Head>
                <title>Donation</title>
                <meta name="description" content="Donation" />
                <link rel="icon" href="/Logo.svg" />
            </Head>

            <Row className='DonationBar'>
                <NavLink to='?q=All'>
                    <a className='DonationBarLink active'>
                        All
                    </a>
                </NavLink>
                <NavLink to='?q=Today'>
                    <a className='DonationBarLink'>
                        Today
                    </a>
                </NavLink>
                <NavLink to='?q=This Month'>
                    <a className='DonationBarLink'>
                        This Month
                    </a>
                </NavLink>
            </Row>
            <div id='Loading' className="LoadingArea">
                <h1>Loading...</h1>
            </div>

            {list.map((listItem) => (
                <div key={listItem.eventId} className="row" style={{height: 305,margin: 28,background: "white",color: "black",position: "relative",overflow: "hidden",padding: 0}}>
                    <div className="" style={{ top: 15, left: 25, position: "absolute" }}>
                        <h4 name="DateCount" date={listItem.Date}>{LeftDate(listItem.Date)}</h4>
                    </div>
                    <div style={{display: 'flex',top: '56px',position: 'absolute',left: '20px',height: '217px',right: '28px'}}>
                        <img src={listItem.logo} style={{ aspectRatio: '4',maxWidth: '250px',maxHeight: '220px' }} />
                        <div style={{ paddingTop: 10, marginLeft: 29, display: "flex", height: "100%", flexDirection: "column", width: "100%", rowGap: 10 }}>
                            <h4>{listItem.Title}</h4>
                            <div style={{ display: "flex", "whiteSpace": "pre-wrap" }}>
                                <h4>Goal:  </h4>
                                <h4>${listItem.Goalusd} ({listItem.Goal} ONE)</h4>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', height: '61px', float: 'right', gap: '26px', position: 'inherit', right: '-319px', bottom: '-104px', flexDirection: 'column' }}>
                        <div style={{ display: "flex", gap: 14 }}>
                            <div eventid={listItem.eventId} date={listItem.Date} eventtitle={listItem.Title} onClick={activateCreateNFTModal} className="card" style={{ color: "white", background: "rgb(0, 222, 205)", textAlign: "center", cursor: "pointer", height: "100%", float: "right", margin: 0, width: 245 }}>
                                <div eventid={listItem.eventId} date={listItem.Date} eventtitle={listItem.Title} className="card-body" style={{ height: "100%" }}>
                                    Donate NFT
                                </div>
                            </div>
                            <NavLink  to={`/donation/auction?[${listItem.eventId}]`}>
                                <div className="card" style={{ color: "white", background: "rgb(0, 222, 205)", textAlign: "center", cursor: "pointer", height: "100%", float: "right", margin: 0, width: 266 }}>
                                    <div className="card-body" style={{ height: "100%" }}>
                                        Go to auction
                                    </div>
                                </div>
                            </NavLink >
                        </div>
                    </div>
                </div>
            ))}
            <DonateNFTModal
                show={CreatemodalShow}
                onHide={() => {
                    setModalShow(false);
                }}
                contract={contract}
                senderAddress={signerAddress}
                EventID={selectid}
                type={selectedtype}
                SelectedTitle={SelectedTitle}
                enddate={SelectedendDate}
            />
        </>
    );
}
