import IRunnable from '../interfaces/irunnable'

export default class Ostrich implements IRunnable {
	public run() {
		console.log('I am running')
	}
}