import { DiscordOutlinedIcon } from "#/components/icons/discord";
import Header from "#/components/layout/header";
import { Button } from "#/components/ui/button";
import { authClient } from "#/lib/auth-client";

export default function Home(){
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center min-h-screen items-center">
                <Button 
                    size={"lg"}
                    onClick={() => {
                        authClient.signIn.social({
                            provider: "discord",
                            callbackURL: `/challenge`
                        })
                    }}
                >
                    <DiscordOutlinedIcon />
                    Masuk dengan discord
                </Button>
            </div>
        </>
    )
}