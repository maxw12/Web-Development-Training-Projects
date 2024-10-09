import { DisplayValue } from "@/components/value";

export default function About() {
    return (
        <>
            <DisplayValue heading="About" value={2000} />
            <DisplayValue heading="About: Number of Projects" value={5} />
        </>
    );
}
