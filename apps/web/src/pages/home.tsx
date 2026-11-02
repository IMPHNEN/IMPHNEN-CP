import { DiscordOutlinedIcon } from "#/components/icons/discord";
import Header from "#/components/layout/header";
import { Button } from "#/components/ui/button";
import { useAuth } from "#/hooks/use-auth";
import { authClient } from "#/lib/auth-client";

export default function Home(){
    const auth = useAuth()

    return (
        <>
            <Header authInfo={auth.sessionUser} />
            <div className="flex flex-col justify-center min-h-screen items-center">
                { auth.sessionUser && auth.sessionUser.id != "" ? (
                    <Button 
                        size={"lg"}
                        onClick={() => {
                            
                        }}
                    >
                        <DiscordOutlinedIcon />
                        Tantangan
                    </Button>
                ) : (
                    <Button 
                        size={"lg"}
                        onClick={() => {
                            authClient.signIn.social({
                                provider: "discord",
                                callbackURL: `${import.meta.env.VITE_WEB_URL || ""}/challenge`
                            })
                        }}
                    >
                        <DiscordOutlinedIcon />
                        Masuk dengan discord
                    </Button>
                ) }
            </div>
        </>
    )
}