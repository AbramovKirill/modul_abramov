import Aviary from './aviary'
import Dove from './dove'

export default class GridAviary extends Aviary {
	width: number
	length: number
	dove: Dove

	constructor(dove: Dove) {
		super()
		this.width = 10
		this.length = 5
		this.dove = dove
	}

	public getS(): number {
		return this.width * this.length
	}

	public show(): string {
		return 'Площа вольєра з сіткою: ' + this.getS()
	}
} 