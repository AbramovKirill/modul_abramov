import ReactDOM from 'react-dom'
import ResultContent from './ResultItem'

const RenderItem = () => {
	const number = parseInt((document.getElementById('number') as HTMLInputElement).value)
	ReactDOM.render(<ResultContent quantity={number} />, document.getElementById('result'))
}

export default RenderItem