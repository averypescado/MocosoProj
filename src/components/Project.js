export default function Project({title, anchor,year, category}) {

    return (
        <div className="menu-item">
            <div>
                <a href={"#"+anchor}>&#8212; {title} </a>
            </div>
            <div className="year">
                {year}
            </div>
            
        </div>
    )
}