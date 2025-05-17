function Content({ area })
{
    const areaStyle = {
        gridArea: "content"
    };

    return (
        <div style = { areaStyle } className="border-black border-2">
            <h1>Content</h1>
        </div>   
    );
}

export default Content;