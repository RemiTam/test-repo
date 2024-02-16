import Section from './Section.jsx';
import data from './data.js';

export default function App() {
    let sections = data.map(data => {
        return <Section 
            key={data.number}
            {...data}
        />
    });
    return (
        <div>
            <section className='main-content'>
                {sections}
            </section>
        </div>
    )
}