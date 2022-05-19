import ISwimmable from '../interfaces/iswimmable'

export default class Penguin implements ISwimmable {
	public swim() {
		console.log('I am swimming')
	}
}