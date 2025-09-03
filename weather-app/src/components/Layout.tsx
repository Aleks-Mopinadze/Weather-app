import type {PropsWithChildren} from "react";
import Header from "@/components/Header.tsx";

const Layout = ({children} : PropsWithChildren) => {
    return (
        <div className='bg-gardient-to-br from-background to-muted'>
            <Header />
            <main className='min-h-screen container mx-auto px-4 py-8'>
                {children}
            </main>
            <footer className='border-t border-blur py-12 supports-[backdrop-filter]:bg-background/60'>
                <div className='container mx-auto px-4 text-center text-gray-400'>
                    made with love
                </div>
            </footer>
        </div>
    )
}

export default Layout