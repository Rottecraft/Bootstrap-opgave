
export default function Homepage(){
    return(
        <>
            <head>

                <title>Mads' chiptuning</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            </head>
            <div>
                <div className="company-name-container">
                    <div className="company-name">Mads' chiptuning</div>
                    <div className="company-logo">insert logo here</div>
                </div>
                <nav className="navigation">
                    <button>Kontakt</button>
                    <button>Find din bil</button>
                    <button>Tilbud</button>
                    <button>Galleri</button>
                </nav>
            </div>
            <body>
                <section className="hero-section">
                     <h1>UNLOCK BILENS FULDE POTENTIALE</h1>
                     <h3> Optimering af benzin- og dieselmotorer</h3>
                     <h3>på Falster</h3>
                     <button>Kontakt</button>
                     <button>Find din bil</button>
                     <button>Tilbud</button>
                </section>
            </body>
            <footer>
                <div> 
                    <h5>Åbningstider:</h5>
                    <h5>Hverdage: 8-16</h5>
                </div>
                <div className="contact-form">
                    <h5>Tlf: 22 23 24 25</h5>
                    <h5><a href="mailto:madschiptuning@mads.com">madschiptuning@mads.com</a></h5>
                </div>
            </footer>
        </>

    )
}