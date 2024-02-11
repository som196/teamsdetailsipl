import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <div className="team-container">
      <img src={teamImageUrl} alt={id} className="team-logo" />
      <h1 className="team-name">{name}</h1>
    </div>
  )
}
export default TeamCard
