export default function Project({title, anchor,year, category, background}) {

    

    return (
        
        <a href={"#"+anchor}>
            <div className="menu-item glassy">
                <div>
                    &#8212; {title}
                </div>
                <div className="year">
                    {year}
                </div>  
            </div>
        </a>
    )
}