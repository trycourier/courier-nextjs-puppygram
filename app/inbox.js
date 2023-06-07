'use client';
import { CourierProvider } from "@trycourier/react-provider";
import { Inbox } from "@trycourier/react-inbox";
import { Toast } from "@trycourier/react-toast";

export default async function AppInbox(props = {}) {
    //console.log("inbox", props)
    return (
        <CourierProvider 
            userId={process.env.NEXT_PUBLIC_COURIER_USER} 
            userSignature={props.userSignature}
            clientKey={process.env.NEXT_PUBLIC_COURIER_CLIENT_KEY}>
            <Inbox/>
            <Toast/>
        </CourierProvider>
    );
  }
