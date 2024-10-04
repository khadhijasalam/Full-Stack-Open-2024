import StatisticsLine from './StatisticsLine'

const Statistics =(props)=>{
  // console.log(props)
  return(<>
  <StatisticsLine text="good" val={props.good}/>
  <StatisticsLine text="neutral" val={props.neutral}/>
  <StatisticsLine text="bad" val={props.bad}/>
  <StatisticsLine text="all" val={props.all}  />   
  <StatisticsLine text="avaerage" val={props.average}/>
  <StatisticsLine text="positive" val={props.pos}/>
  </>)
}

export default Statistics;