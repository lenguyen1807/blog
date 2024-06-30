"use client"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import Image from "next/image"
import { useState } from "react"

const ProfileImage = [
    {
        value: "/profile/duck1.gif",
        name: "Duck 1"
    },
    {
        value: "/profile/duck2.gif",
        name: "Duck 2"
    },
    {
        value: "/profile/dog1.gif",
        name: "Dog 1"
    },
    {
        value: "/profile/dog2.gif",
        name: "Dog 2"
    }
]

export default function ProfileGif() {
    const [image, setImage] = useState(ProfileImage[2].value);

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <Image
                src={image}
                alt="Profile photo"
                style={{ width: "auto", height: "150px" }}
                sizes="100vw"
                width={0}
                height={0}
                />
            </ContextMenuTrigger>
            <ContextMenuContent>
                {ProfileImage.map((image) => {
                    return (
                        <ContextMenuItem 
                            key={image.value}
                            onClick={() => {setImage(image.value)}}
                        >
                            {image.name}
                        </ContextMenuItem>
                    )
                })}
            </ContextMenuContent>
        </ContextMenu>
    )
}