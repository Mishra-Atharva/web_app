function NavigationBar( { area } )
{
    const areaStyle = {
        gridArea: "header"
    };

    return (
        <nav style = { areaStyle } className="border-black border-2">
            <h1>Navigation Bar</h1>
        </nav>
    );
}

export default NavigationBar;