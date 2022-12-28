import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
    return (
        
        <>
         <ScrollToTop smooth top={10}  />
            <footer className="footer">
                <p><i className="fab fa-github"></i>
                <a href="https://github.com/indrayanipitri" target="_blank" rel="noreferrer">
                Github.
                </a>
                </p>
            </footer>
        </>
    )
}