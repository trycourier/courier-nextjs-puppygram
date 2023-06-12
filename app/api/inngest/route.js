import { CourierClient } from '@trycourier/courier'
import { serve } from "inngest/next"
import { inngest } from "../../../inngest/client"
import doggos from '../../../data/doggos.json' assert { type: 'json' }
import twitter from '../../../data/twitter.json' assert { type: 'json' }
import descriptions from '../../../data/descriptions.json' assert { type: 'json' }

const courier = CourierClient()

export const sendNotification = inngest.createFunction(
    { name: "Puppygram Send Notification" },
    { cron: "* * * * *" },
    async () => {       
        // get random dog photo
        const randomIndex = Math.floor(Math.random() * doggos.length)
        const image = doggos[randomIndex]
        // EASTER EGG! 🥚
        // Thanks for checking out the source code. Otto is my Australian Labradoodle, and he's a very good boy.
        const imageUrl = (image === "otto" ? 'https://courier-nextjs-puppygram.vercel.app/otto.jpg' : `https://random.dog/${image}`)
        // select a random description
        const handle = twitter[Math.floor(Math.random() * twitter.length)]
        // select a random twitter handle
        const desc = descriptions[Math.floor(Math.random() * descriptions.length)]
        // send a notification with the URL to the random image
        await courier.send({
            message: {
                to: {
                    user_id: process.env.NEXT_PUBLIC_COURIER_USER
                },
                content: {
                    title: "",
                    body: desc,
                    version: "2020-01-01",
                    elements: [
                        {
                            type: "action",
                            content: "Click to view",
                            href: imageUrl
                        }
                    ]
                },
                data: {
                    image_url: imageUrl,
                    username: handle
                },
                routing: {
                    method: "single",
                    channels: [
                        "inbox"
                    ]
                }
            }
        })
    }
)

export const { GET, POST, PUT } = serve(inngest, [
    sendNotification
])