function Footer( { area } )
{
    const areaStyle = {
        gridArea: "footer"
    };

    return (
        <footer style = { areaStyle } className = "border-black border-2">
            <h1>Footer</h1>
        </footer>
    );
}

export default Footer;