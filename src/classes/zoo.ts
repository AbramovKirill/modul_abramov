import Dove from './dove'
import GridAviary from './gridAviary'
import HighFenceAviary from './highFenceAviary'
import LakeLandAviary from './lakeLandAviary'
import Ostrich from './ostrich'
import Penguin from './penguin'

export default class Zoo {
	public gridAviary: GridAviary[] = []
	public lakeLandAviary: LakeLandAviary[] = []
	public highFenceAviary: HighFenceAviary[] = []

	constructor(quantity: number) {
		this.create(quantity)
	}

	private create(quantity: number): void {
		for (let i = 0; i < quantity; i++) {
			this.gridAviary.push(new GridAviary(new Dove()))
			this.lakeLandAviary.push(new LakeLandAviary(new Penguin()))
			this.highFenceAviary.push(new HighFenceAviary(new Ostrich()))
		}
	}

	private calculate(): number {
		let square = 0
		for (let elem of this.gridAviary) {
			square += elem.getS()
		}
		for (let elem of this.lakeLandAviary) {
			square += elem.getS()
		}
		for (let elem of this.highFenceAviary) {
			square += elem.getS()
		}
		return square
	}

	public showAll(): string {
		return 'Сумарна площа: ' + this.calculate()
	}
}