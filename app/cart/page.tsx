"use client";

export default function Page() {
    return (
        <div className="p-3 lg:px-4 2xl:px-32">
            <div className="flex flex-col lg:flex-row gap-2">
                <div className="">
                    <h1 className="text-2xl font-bold">Mon panier</h1>
                    <div className="flex gap-1 items-center">
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="m16.5 14.5-4.195-1.864a.76.76 0 0 0-.61 0L7.5 14.5l.042-7.62L9.5 1.25h5l2 5.877zM9 7.254v4.937l2.086-.926a2.26 2.26 0 0 1 1.828 0L15 12.19V7.254L13.434 2.75h-2.868z"></path><path d="M20.5 22.75h-17c-1.24 0-2.25-1.01-2.25-2.25V7.29q0-.434.161-.836l1.516-3.79A2.24 2.24 0 0 1 5.016 1.25h13.968a2.24 2.24 0 0 1 2.09 1.415l1.515 3.789c.106.265.161.546.161.835V20.5c0 1.24-1.01 2.25-2.25 2.25m-15.484-20a.75.75 0 0 0-.697.471l-1.515 3.79a.8.8 0 0 0-.054.278V20.5c0 .413.336.75.75.75h17c.413 0 .75-.337.75-.75V7.29a.7.7 0 0 0-.054-.278l-1.515-3.79a.75.75 0 0 0-.697-.472z"></path><path d="M2 7h20v1.5H2z"></path></svg>
                        <p>Envoyé par Zalando</p>
                    </div>
                </div>
                <div className="">B</div>
            </div>
        </div>
    )
}