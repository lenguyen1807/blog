import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mx-auto mt-24 w-full">
            <div className="border-t border-border pt-5">
                <div className="flex flex-col items-center gap-y-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-y-0">
                    <div className="flex text-sm gap-x-1">
                        © 2024 made by {" "}
                        <a href="https://github.com/lenguyen1807" className="hover:underline underline-offset-4">Le Nguyen</a>. All rights reserved.
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            <Link
                                className="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75"
                                href="https://github.com/lenguyen1807"
                            >
                                {/* ref: https://codepen.io/Leloush89/pen/QMQRPE */}
                                <svg 
                                    aria-hidden="true" 
                                    className="octicon octicon-mark-github" 
                                    height="20" 
                                    version="1.1" 
                                    viewBox="0 0 16 16" 
                                    width="20"
                                >
                                    <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </Link>
                            <Link
                                className="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75"
                                href="https://www.linkedin.com/in/le-nguyen-0929a42a2/"
                            >
                                {/* ref: https://webcomponents.ucla.edu/build/1.0.0-beta.8/components/detail/social-svg--linkedin.html */}
                                <svg 
                                width="30px" 
                                height="30px" 
                                viewBox="0 0 48 48" 
                                version="1.1" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" id="Shape" fill="currentColor"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}