"use client";
import Link from "next/link";
import { useRouter} from "next/navigation";
import { useCart } from "../contexts/cartContext";
import { useGender } from "../contexts/genderContext";

export default function Header() {
    const router = useRouter();
    const {cart} = useCart();
    const {gender, setGender} = useGender();
    const handleGenderChange = (e, newGender) => {
        e.preventDefault();
        setGender(newGender);
        router.push(`/home-${newGender.toLowerCase()}`);
    }
    return(
        <header className="bg-white p-5 max-xl:px-4 xl:px-32 2xl:px-96">
            <div className="flex justify-between items-center">
                <ul className="w-full hidden md:flex gap-3">
                    <li>
                        <Link onClick={(e)=>handleGenderChange(e, "MEN")} className={`px-3 py-2 font-bold ${gender === "MEN" ? "bg-black text-white" : "text-black"}`} href="/home-men">Homme</Link>
                    </li>
                    <li>
                        <Link onClick={(e)=>handleGenderChange(e, "WOMEN")} className={`px-3 py-2 font-bold ${gender === "WOMEN" ? "bg-black text-white" : "text-black"}`} href="/home-women">Femme</Link>
                    </li>
                    <li>
                        <Link onClick={(e)=>handleGenderChange(e, "CHILDREN")} className={`px-3 py-2 font-bold ${gender === "CHILDREN" ? "bg-black text-white" : "text-black"}`} href="/home-children">Enfant</Link>
                    </li>
                </ul>
                <div className="w-full flex md:justify-center sm:justify-start">
                    <Link href="/">
                        <svg width="132" height="24" fill="none" viewBox="0 0 132 24" aria-labelledby=":R365e5:" aria-hidden="false" role="img" data-testid="zalando-logo"><title id=":R365e5:">Zalando</title><path fill="#FF4C00" d="M21.803 9.411c-1.69-2.11-4.056-4.157-7.152-6.004l-.012-.006C11.518 1.598 8.591.539 5.95.105 4.299-.166 3.512.15 3.153.36c-.358.21-1.021.746-1.615 2.334C.588 5.238.025 8.343 0 11.994v.013c.025 3.65.587 6.755 1.538 9.299.594 1.588 1.257 2.124 1.615 2.334s1.147.526 2.796.255c2.642-.434 5.569-1.493 8.69-3.295l.012-.007c3.096-1.847 5.461-3.895 7.152-6.004 1.056-1.317 1.181-2.168 1.181-2.59 0-.42-.125-1.271-1.18-2.588"></path><path fill="#000" d="m28.986 17.42 10.15-9.848h-9.879V5.065h13.805v2.87l-10.15 9.847h10.392v2.508H28.986zM43.787 16.151c0-3.383 2.9-4.32 5.467-4.651l4.773-.605c1.148-.15 1.48-.664 1.48-1.359v-.03c0-1.36-1.178-2.356-3.745-2.356-2.477 0-3.867.936-4.109 2.507h-3.202c.363-3.081 3.051-4.984 7.401-4.984 4.864 0 6.857 2.054 6.857 5.437v10.18h-3.05v-2.417c-1.3 1.873-3.626 2.81-6.254 2.81-3.474 0-5.618-1.752-5.618-4.532m11.72-2.748v-.725c-.513.211-1.087.332-1.722.422l-3.806.514c-1.963.272-2.87.997-2.87 2.326 0 1.42 1.209 2.266 3.172 2.266 3.233 0 5.226-2.206 5.226-4.803M60.13 1.199h3.202v19.09H60.13zM64.389 16.151c0-3.383 2.9-4.32 5.467-4.651l4.773-.605c1.148-.15 1.48-.664 1.48-1.359v-.03c0-1.36-1.178-2.356-3.746-2.356-2.477 0-3.866.936-4.108 2.507h-3.202c.363-3.081 3.051-4.984 7.401-4.984 4.863 0 6.857 2.054 6.857 5.437v10.18h-3.05v-2.417c-1.3 1.873-3.626 2.81-6.254 2.81-3.474 0-5.618-1.752-5.618-4.532m11.72-2.748v-.725c-.513.211-1.087.332-1.722.422l-3.806.514c-1.963.272-2.87.997-2.87 2.326 0 1.42 1.209 2.266 3.172 2.266 3.232 0 5.226-2.206 5.226-4.803M80.73 5.065h3.203v2.477c1.147-1.812 3.322-2.87 5.98-2.87 3.988 0 6.344 2.296 6.344 6.526v9.092h-3.202v-8.64c0-2.809-1.48-4.35-4.199-4.35-2.93 0-4.923 1.964-4.923 4.743v8.247H80.73zM97.315 12.617c0-4.924 3.413-7.945 7.491-7.945 2.447 0 4.562.876 5.83 2.689V1.199h3.202v19.09h-3.202v-2.325c-1.389 1.873-3.383 2.718-5.83 2.718-4.078 0-7.491-3.08-7.491-8.065m13.412.03c0-3.172-1.873-5.377-5.045-5.377-3.141 0-5.044 2.175-5.044 5.347 0 3.202 1.903 5.468 5.044 5.468 3.172 0 5.045-2.266 5.045-5.438M114.896 12.647c0-4.682 3.172-7.974 8.397-7.974 5.257 0 8.398 3.292 8.398 7.974s-3.141 8.036-8.398 8.036c-5.225 0-8.397-3.353-8.397-8.036m13.472 0c0-2.96-1.631-5.376-5.075-5.376s-5.074 2.416-5.074 5.376c0 2.991 1.631 5.438 5.074 5.438 3.444 0 5.075-2.447 5.075-5.438"></path></svg>
                    </Link>
                </div>
                <ul className="w-full justify-end flex items-center gap-3">
                    <li>
                            <svg viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor" aria-labelledby="switch-language-:R4dm5e5:" focusable="false" aria-hidden="true" role="img" data-testid="language-switcher-icon"><title id="switch-language-:R4dm5e5:">Switch Language</title><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12h.001c6.624-.008 11.991-5.376 11.999-12m-1.501-.024c-1.24-.38-2.502-.67-3.775-.904-.15-3.641-1.174-6.775-2.714-8.77a10.51 10.51 0 0 1 6.489 9.674M11.25 1.626v8.89a33.5 33.5 0 0 0-4.462.295c.277-4.66 2.15-8.49 4.462-9.186m0 10.389v10.36c-2.453-.74-4.41-5.01-4.492-10.053a32 32 0 0 1 4.492-.307m1.5 10.36v-10.36c1.505.003 3.006.093 4.492.307-.082 5.042-2.04 9.314-4.492 10.053m0-11.86v-8.89c2.311.697 4.185 4.527 4.462 9.186a33.5 33.5 0 0 0-4.462-.295m-4.756-8.22c-1.542 1.996-2.568 5.133-2.718 8.777a34 34 0 0 0-3.775.904c.01-4.37 2.69-8.109 6.493-9.68m-6.378 11.18c.046-.007.093-.004.139-.02a32 32 0 0 1 3.511-.859c.1 3.785 1.14 7.053 2.728 9.109a10.5 10.5 0 0 1-6.378-8.23m14.39 8.23c1.588-2.056 2.627-5.324 2.728-9.109 1.183.228 2.358.498 3.511.859.045.016.092.017.139.024a10.5 10.5 0 0 1-6.378 8.226"></path></svg>
                    </li>
                    <li className="relative">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor" aria-labelledby="mon-compte-:Ralm5e5:" focusable="false" aria-hidden="false" role="img" data-testid="user-account"><title id="mon-compte-:Ralm5e5:">Mon compte</title><path d="M21.645 22.866a28.7 28.7 0 0 0-6.46-7.817c-2.322-1.892-4.048-1.892-6.37 0a28.7 28.7 0 0 0-6.46 7.817.75.75 0 0 0 1.294.76 27.3 27.3 0 0 1 6.113-7.413A3.98 3.98 0 0 1 12 15.125a3.8 3.8 0 0 1 2.236 1.088 27.3 27.3 0 0 1 6.115 7.412.75.75 0 1 0 1.294-.76M12 12.002A6.01 6.01 0 0 0 18.003 6 6.003 6.003 0 1 0 12 12.002m0-10.505a4.502 4.502 0 1 1 0 9.005 4.502 4.502 0 0 1 0-9.005"></path></svg>
                        <Link className="absolute top-0 left-0 w-full h-full z-index-5" href="#"></Link>
                    </li>
                    <li className="relative">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor" aria-labelledby="wish-list-:Rtm5e5:" focusable="false" aria-hidden="false" role="img" data-testid="wishlist"><title id="wish-list-:Rtm5e5:">Wish list</title><path d="M17.488 1.11h-.146a6.55 6.55 0 0 0-5.35 2.81A6.57 6.57 0 0 0 6.62 1.116 6.406 6.406 0 0 0 .09 7.428c0 7.672 11.028 15.028 11.497 15.338a.75.75 0 0 0 .826 0c.47-.31 11.496-7.666 11.496-15.351a6.43 6.43 0 0 0-6.42-6.306M12 21.228C10.018 19.83 1.59 13.525 1.59 7.442c.05-2.68 2.246-4.826 4.934-4.826h.088c2.058-.005 3.93 1.251 4.684 3.155.226.572 1.168.572 1.394 0 .755-1.907 2.677-3.17 4.69-3.16h.02c2.7-.069 4.96 2.118 5.01 4.817 0 6.089-8.429 12.401-10.41 13.8"></path></svg>
                        <Link className="absolute top-0 left-0 w-full h-full z-index-5" href="#"></Link>
                    </li>
                    <li className="relative">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor" focusable="false" aria-hidden="true" data-testid="cart" aria-label="Mon panier"><path d="M21.193 8.712a2.984 2.984 0 0 0-2.986-2.726h-.952v-.751a5.255 5.255 0 0 0-10.51 0v.75h-.951a2.983 2.983 0 0 0-2.986 2.727L1.715 20.73q-.012.135-.012.27A3 3 0 0 0 4.7 24h.005l14.599-.026q.133 0 .265-.012a3 3 0 0 0 2.715-3.258zM8.246 5.235a3.754 3.754 0 0 1 7.508 0v.75H8.246zm11.056 17.238-14.599.025h-.002q-.067 0-.135-.006a1.496 1.496 0 0 1-1.355-1.625l1.093-12.02a1.49 1.49 0 0 1 1.49-1.36h.95V9.74a.75.75 0 0 0 1.502 0V7.487h7.508V9.74c0 .415.336.75.75.75h.002a.75.75 0 0 0 .75-.75V7.487h.951a1.49 1.49 0 0 1 1.49 1.361l1.092 11.993q.006.067.007.133a1.496 1.496 0 0 1-1.494 1.499"></path></svg>
                        <div className={`absolute top-1/2 right-0 bg-red-500 text-white rounded-full w-4 h-4 ${cart.length >= 1 ? "flex" : "hidden"} justify-center items-center`}>{cart.length}</div>
                        <Link className="absolute top-0 left-0 w-full h-full z-index-5" href="/cart"></Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}