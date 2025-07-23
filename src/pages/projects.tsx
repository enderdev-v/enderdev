import Navbar from "../components/Sections/navbar";
import '../index.css'
import Card from "@components/ProjectCard.tsx";

export default function Projects() {
    
    const img = "https://camo.githubusercontent.com/69bc9cf59c4e3cdf1b820d36ebf29db25348af198c2cfab99ec8615873b49dea/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f62616e6e6572732f3836323930353231313030313530333737342f38353265663261316433356237353461323433396265656136663133353462612e776562703f73697a653d34303936"
    return (
        
        <>
            <Navbar></Navbar>
            <div className="m-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                <Card description="Just a simple bot for discord" href="https://github.com/enderdev-v/enderbot" img={img} link="https://github.com/enderdev-v/enderbot" title="enderbot"></Card>
                <Card description="Is Close Code but util for discord" href="/" img={img} link="/" title="Ryosaki Bot"></Card>
            </div>
        </>
    );
};
