import {v4 as uuidv4} from 'uuid'
import {Entity, Column, PrimaryColumn, CreateDateColumn} from 'typeorm'

@Entity('users')
class User {

	@PrimaryColumn()
	id: string;

	@Column()
	name: string;


	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	driver_license: string;

	@Column()
	isAdmin: boolean;

	@CreateDateColumn()
	created_at: Date;

	constructor() {
		if(!this.id) {
			this.id = uuidv4()
		}
	}
}

export {User}