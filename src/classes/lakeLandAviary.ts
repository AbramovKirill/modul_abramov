import Aviary from './aviary'
import Penguin from './penguin'

export default class LakeLandAviary extends Aviary {
	width: number
	length: number
	lakeWidth: number
	lakeLength: number
	penguin: Penguin

	constructor(penguin: Penguin) {
		super()
		this.width = 4
		this.length = 2
		this.lakeWidth = 3
		this.lakeLength = 3
		this.penguin = penguin
	}

	public getS(): number {
		return this.width * this.length + this.lakeWidth * this.lakeLength
	}

	public show(): string {
		return 'Площа вольєра з озером та сушею: ' + this.getS()
	}
} 