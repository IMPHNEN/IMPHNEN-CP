import { Button } from "../ui/button";

export default function Header(){
    return (
        <header className="sticky w-full top-0 border-b border-gray-400/40">
            <div className="mx-auto max-w-7xl px-5 py-3 flex justify-between items-center">
                <img src="/logo.webp" width={80} alt="" />
                <Button>
                    Masuk
                </Button>
            </div>
        </header>
    )
}