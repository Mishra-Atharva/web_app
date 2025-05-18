function Content({ area })
{
    const areaStyle = {
        gridArea: "content"
    };

    return (
        <div style = { areaStyle } className="rounded-2xl p-5 m-2 bg-[#ffffff]">
            <h1>Content</h1>
        </div>   
    );
}

export default Content;