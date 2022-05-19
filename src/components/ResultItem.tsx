import Zoo from '../classes/zoo'

interface ResultProps {
	quantity: number
}

const ResultItem: React.FC<ResultProps> = ({ quantity }) => {
	const zoo = new Zoo(quantity)
	return (<div style={{ fontSize: '16px' }}>
		<ul>
			<li>{zoo.gridAviary.map(e => {
				return <li>{e.show()}</li>
			})}</li>
			<li>{zoo.lakeLandAviary.map(e => {
				return <li>{e.show()}</li>
			})}</li>
			<li>{zoo.highFenceAviary.map(e => {
				return <li>{e.show()}</li>
			})}</li>
			<h2>{zoo.showAll()}</h2>
		</ul>
	</div>)
}

export default ResultItem