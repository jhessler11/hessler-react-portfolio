

function Resume() {
    
    // const proficiencies = ['Javascript', 'React', 'CSS', 'Html5', 'MySQL', 'MongoDB', 'Express', 'PWA', 'VSCode', 'Rest API', 'Github', 'AcrGIS Software', 'AutoCAD Civil 3D', 'Googling']
    
    // let list = document.getElementById('pList')
    // console.log(list)
    
    // proficiencies.forEach((item) => {
    //     console.log('stuff', item)
    //     let li = document.createElement("li");
    //     li.innerText = item;
    //     console.log(item)
    //     list.appendChild(li);
    //     console.log("bang", li)
    // })
    return (
       
       <section className="resume">
            <div className="is-size-3 p-3">
                <a href="https://github.com/jhessler11/hessler-react-portfolio/blob/main/public/pdf/jhessler.pdf" download="jhessler">Download Resume</a>
            </div>
           <h2 className="is-size-4 p-3">Proficiencies:</h2>
            <ul className="is-size-5 p-5" id="pList">
                <li>Javascript</li>
                <li>React</li>
                <li>Html5</li>
                <li>CSS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>PWA</li>
                <li>Apollo</li>
                <li>GraphQL</li>
                <li>VScode</li>
                <li>Rest API</li>
                <li>Github</li>
                <li>Bulma</li>
                <li>Bootstrap</li>
                <li>ArcGIS Software</li>
                <li>AutoCAD Civil 3d</li>
            </ul>
       </section>
    )

}

export default Resume;