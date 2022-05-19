import IFlyable from '../interfaces/iflyable'

export default class Dove implements IFlyable {
	public fly() {
		console.log('I am flying')
	}
}