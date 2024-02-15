"use client";
import Script from 'next/script'
// import Head from 'next/head';
import { signOut, useSession } from "next-auth/react";
import { defaultCordova } from '@/util/cordova';
import { useEffect } from 'react';

export function HEADER() {
    // export const HEADER = () => {

    useEffect(() => {
        defaultCordova();
    }, [])

    return (
        <>
            <Script async src="https://connect.facebook.net/en_US/fbevents.js"></Script>
            <Script src="https://developers.kakao.com/sdk/js/kakao.js" async defer></Script>
            <Script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js" async defer></Script>
            <Script src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js" async defer></Script>
            <Script src="https://wcs.naver.net/wcslog.js" async defer></Script>

        </>
    );
};
