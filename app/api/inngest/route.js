import { CourierClient } from '@trycourier/courier'
import { serve } from "inngest/next"
import { inngest } from "../../../inngest/client"
import doggos from '../../../data/doggos.json' assert { type: 'json' }

const courier = CourierClient()

export const sendNotification = inngest.createFunction(
    { name: "Puppygram Send Notification" },
    //{ event: "puppygram.send_notification" },
    { cron: "* * * * *" },
    async ({ step }) => {
        //await step.run("Send Notification", async () => {
            // get random dog photo
            const randomIndex = Math.floor(Math.random() * doggos.length)
            const image = doggos[randomIndex]
            // send a notification with the URL to the random image
            await courier.send({
                message: {
                    to: {
                        user_id: process.env.NEXT_PUBLIC_COURIER_USER
                    },
                    content: {
                        title: "New pup!",
                        body: "A description of the pup, if we had one"
                    },
                    data: {
                        image_url: `https://random.dog/${image}`
                    },
                    routing: {
                        method: "single",
                        channels: [
                            "inbox"
                        ]
                    }
                }
            })
        //})
        /*
        // sleep for 1 minute
        await step.sleep("1m")
        // trigger this event for the next photo, unless we need to start from the beginning
        await step.sendEvent({
            name: "puppygram.send_notification",
        })*/
    }
)

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve(inngest, [
    sendNotification
])