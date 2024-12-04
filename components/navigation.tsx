import Link from "next/link";

export default function Navigation(){
    return (
        <nav className="sm:p-0 md:p-2  md:px-10 flex gap-2 border-b border-black">
            <button className="sm:hidden p-3 border">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ HlZ_Tf I_qHp3" focusable="false" aria-hidden="true"><path d="M.75 2.25h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5m22.5 19.5H.75a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5m-22.5-9h12a.75.75 0 0 0 0-1.5h-12a.75.75 0 0 0 0 1.5"></path></svg>
            </button>
            <ul className="hidden md:flex items-center gap-2">
                <li className="">
                    <Link href="/">New in</Link>
                </li>
                <li className="">
                    <Link href="/">Bébé</Link>
                </li>
                <li className="">
                    <Link href="/">Fille</Link>
                </li>
                <li className="">
                    <Link href="/">Garçon</Link>
                </li>
                <li className="">
                    <Link href="/">Chaussures</Link>
                </li>
                <li className="">
                    <Link href="/">Sport</Link>
                </li>
                <li className="">
                    <Link href="/">Streetwear</Link>
                </li>
                <li className="">
                    <Link href="/">Luxe et Créateurs</Link>
                </li>
                <li className="">
                    <Link href="/">Asséssoires</Link>
                </li>
                <li className="">
                    <Link href="/">Promos</Link>
                </li>
            </ul>
            <div className="">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="m23.03 21.97-7.164-7.164A8.97 8.97 0 0 0 18 9a9 9 0 1 0-9 9 8.97 8.97 0 0 0 5.806-2.134l7.164 7.164a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06M1.5 9A7.5 7.5 0 0 1 9 1.5 7.51 7.51 0 0 1 16.5 9a7.5 7.5 0 1 1-15 0"></path></svg>

            </div>
        </nav>
    )
}