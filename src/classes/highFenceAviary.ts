import Aviary from './aviary'
import Ostrich from './ostrich'

export default class HighFenceAviary extends Aviary {
	width: number
	length: number
	ostrich: Ostrich

	constructor(ostrich: Ostrich) {
		super()
		this.width = 15
		this.length = 3
		this.ostrich = ostrich
	}

	public getS(): number {
		return this.width * this.length
	}

	public show(): string {
		return 'Площа вольєра з високим парканом: ' + this.getS()
	}
} 