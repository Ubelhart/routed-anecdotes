import PropTypes from 'prop-types'

const AnecdoteDetail = ({ anecdote, vote }) => (
  <div>
    <h2>
      {anecdote.content} by {anecdote.author}
    </h2>
    has {anecdote.votes} votes{' '}
    <button onClick={() => vote(anecdote.id)}>vote</button>
    <p>for more info see {anecdote.info}</p>
  </div>
)

AnecdoteDetail.propTypes = {
  anecdote: PropTypes.object.isRequired,
  vote: PropTypes.func.isRequired,
}

export default AnecdoteDetail
