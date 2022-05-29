import { string } from 'prop-types'

const NewAccountCreation = ({headline = 'Connect to your wallet'}) => 
<div>
  <h2> {headline}</h2>
</div>

NewAccountCreation.propTypes = {
  headline: string
}

export default  NewAccountCreation