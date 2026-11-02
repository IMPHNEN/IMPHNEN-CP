import type { TUserSchema } from "@apps/schemas";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { authClient } from "#/lib/auth-client";
import { Link } from "@tanstack/react-router";
import { DiscordOutlinedIcon } from "../icons/discord";

export default function Header(
    {
        authInfo
    }: {
        authInfo?: TUserSchema
    }
){
    return (
        <header className="sticky w-full top-0 border-b border-gray-400/40">
            <div className="mx-auto max-w-7xl px-5 py-3 flex justify-between items-center">
                <img src="/logo.webp" width={80} alt="" />
                { !authInfo ? (
                    <Button
                        size={"lg"}
                        onClick={() => {
                            authClient.signIn.social({
                                provider: "discord",
                                callbackURL: `${import.meta.env.VITE_WEB_URL || ""}/challenge`
                            })
                        }}
                    >
                        <DiscordOutlinedIcon />Masuk
                    </Button>
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger className={"cursor-pointer"} render={<div className="flex items-center gap-2 hover:bg-primary hover:text-white px-3 py-2 rounded-md" />}>
                            <img src={authInfo.image} alt="profile" width={30} className="rounded-full"/>
                            <h6 className="text-sm">{authInfo.name}</h6>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={"z-10"}>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Link to={"/"}>Tantangan</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => {
                                authClient.signOut()
                                setTimeout(() => {
                                    document.location.href = "/"
                                }, 200)
                            }}>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) }
            </div>
        </header>
    )
}