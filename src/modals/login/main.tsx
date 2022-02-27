
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as dotenv from 'dotenv';
import Button from 'react-bootstrap/Button';
import Router from 'next/router'
import React from 'react';
import { useRouter } from 'next/router';


declare let window: any;
export default function CreateEvents() {
    const router = useRouter();
    const regex = /\[(.*)\]/g;
    const str = decodeURIComponent(window.location.search);
    let m;
    let redirecting = "";
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        redirecting = m[1];
    }

    async function web3Connect() {
        let result = await window.ethereum.request({ method: 'eth_requestAccounts' });
        result;
        try {
            const getacc = await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x6357D2E0' }],
            });
            getacc;
            window.location.href = redirecting;
        } catch (switchError: any) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: '0x6357D2E0',
                                chainName: 'Harmony Testnet',
                                nativeCurrency: {
                                    name: 'Harmony',
                                    symbol: 'ONE',
                                    decimals: 18,
                                },
                                rpcUrls: ['https://api.s0.b.hmny.io'],
                            },
                        ],
                    });
                } catch (addError) {
                    // handle "add" error
                    console.log(addError);
                }
            }
            // handle other "switch" errors
        }



    }

    return (
        <><>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Row>
                <Col style={{ padding: "3% 37%", "paddingTop": 0, width: "100%" }}>
                    <div style={{ width: "500px", background: "transparent", padding: "19px", borderRadius: "4px", height: "100%", border: "white solid" }}>
                        <div style={{ margin: "0px 0px 53px 0px" }}>
                            <h1>Login</h1>
                        </div>
                        <div style={{ margin: "0px 0px 12px 0px" }}>
                            <h4 style={{ fontSize: 24 }}>Please select one of the option to Login</h4>
                        </div>

                        <div onClick={web3Connect} style={{ display: "flex",padding: 10,color: "white",borderRadius: 5,height: 69,backgroundColor: "#0d6efd",cursor: "pointer",margin: "20px 0px",alignItems: "center",alignContent: "center" }} className="btn-primary">
                            <img style={{ height: "45px", width: "46px" }} src="https://polis.metis.io/static/img/metamask-fox.c06f3a3e.svg" />
                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "11px", gap: 24 }}>
                                <span style={{ fontWeight: "bolder", fontFamily: "sans-serif" , lineHeight: 0 }}>
                                    Metamask
                                </span>
                                <span style={{ fontSize: "15px", fontFamily: "sans-serif", lineHeight: 0  }}>
                                    Connect With MetaMask
                                </span>
                            </div>

                        </div>

                    </div>
                </Col>

            </Row>

        </>
        </>
    );
}