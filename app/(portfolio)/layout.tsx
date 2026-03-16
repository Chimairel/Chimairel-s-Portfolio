import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}