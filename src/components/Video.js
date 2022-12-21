export default function Video({link, title, anchor, passedDowntwo, bgcolor}) {
    return (
        <div id={anchor} onMouseEnter={() => passedDowntwo(bgcolor)} onMouseLeave={() => passedDowntwo("#f3f1ed")}>
            <div className="proj">
                <div className="title">
                    {title}
                </div>
                
                <div>
                    <iframe class="iframe" src={link} width="90%" height="700" frameborder="0"></iframe>
                </div>
                <button>Extras</button>
            </div>
        </div>
    )
}