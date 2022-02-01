export function TATrophies(props){
    const data = props.data
    return (
        <div>
          <h2 className="table-title" style={{marginTop: '2em', textDecoration: 'underline'}}>{props.title}</h2>  
          <table className='trophy-earnings-table'>
            <thead>
              <tr>
                <th>Top</th>
                <th>Reward</th>
              </tr>
              
            </thead>
            <tbody>
            {(data.earnings.map(function(pos, index){
              return(
                <tr>
                  <td>
                    {pos.top}
                    {index + 1 === data.earnings.length && (
                      <span>+</span>
                    )} 
                  </td>
                  <td>
                    {pos.trophyCount}
                    {pos.trophyType !== '?' && (
                      <img 
                        alt={"trophy" + pos.trophyType}
                        className="trophy-img" 
                        src={process.env.PUBLIC_URL + "/images/trophies/"+ (pos.trophyType-1) + ".png"}
                        title={"T" + pos.trophyType}
                      />
                    )}
                  </td>
                </tr>
              )
            }))}
            </tbody>
          </table>
        </div>
      );
}