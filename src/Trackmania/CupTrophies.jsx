export function CupTrophies(props){
    const trophyGain = props.trophyGain;
    return(
        <div>
            <h2 className="table-title" style={{marginTop: '2em', textDecoration: 'underline'}}>{props.title}</h2>
            <table className="trophy-earnings-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Type 1 (top64)</th>
                        <th>Type 2 (top 10%)</th>
                        <th>Type 3 (top25%)</th>
                        <th>Type 4 (top 50%)</th>
                        <th>Type 5 (top 100%)</th>
                    </tr>
                </thead>
                <tbody>

                
                    {trophyGain.earnings.map(function(pos, index){
                        return(
                            <tr key={"top" + pos.top}>
                                <td>{pos.top}</td>
                                <td>{pos.type1.trophyCount}
                                    {pos.type1.trophyCount !== '?' && (
                                        <img 
                                        alt={"trophy" + pos.type1.trophyType}
                                        className="trophy-img" 
                                        title={"T" + pos.type1.trophyType}
                                        src={process.env.PUBLIC_URL + "/images/trophies/"+ (pos.type1.trophyType-1) + ".png"}
                                    />
                                    )}
                                        
                                </td>
                                <td>{pos.type2.trophyCount}
                                    {pos.type2.trophyCount !== '?' && (
                                            <img 
                                            alt={"trophy" + pos.type2.trophyType}
                                            className="trophy-img" 
                                            title={"T" + pos.type2.trophyType}
                                            src={process.env.PUBLIC_URL + "/images/trophies/"+ (pos.type2.trophyType-1) + ".png"}
                                        />
                                    )}
                                </td>
                                <td>{pos.type3.trophyCount}
                                    {pos.type3.trophyCount !== '?' && (
                                            <img 
                                            alt={"trophy" + pos.type3.trophyType}
                                            className="trophy-img" 
                                            title={"T" + pos.type3.trophyType}
                                            src={process.env.PUBLIC_URL + "/images/trophies/"+ (pos.type3.trophyType-1) + ".png"}
                                        />
                                    )}
                                </td>
                                <td>{pos.type4.trophyCount}
                                    {pos.type4.trophyCount !== '?' && (
                                                <img 
                                                alt={"trophy" + pos.type4.trophyType}
                                                className="trophy-img" 
                                                title={"T" + pos.type4.trophyType}
                                                src={process.env.PUBLIC_URL + "/images/trophies/"+ (pos.type4.trophyType-1) + ".png"}
                                            />
                                        )}
                                </td>
                                <td>{pos.type5.trophyCount}
                                    {pos.type5.trophyCount !== '?' && (
                                                <img 
                                                alt={"trophy" + pos.type5.trophyType}
                                                className="trophy-img" 
                                                title={"T" + pos.type5.trophyType}
                                                src={process.env.PUBLIC_URL + "/images/trophies/"+ (pos.type5.trophyType-1) + ".png"}
                                        />
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}