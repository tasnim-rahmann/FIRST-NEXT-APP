import Link from "next/link";

const AboutPage = () => {
    return (
        <div>
            <h1>About Page!</h1>
            <Link href="/about/address">Address</Link>
        </div>
    );
};

export default AboutPage;