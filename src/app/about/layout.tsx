
import '../about.css'
export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <html>
            <body>
                <header>this is a header about</header>
              <main>{children}</main>
            </body>
        </html>)
}