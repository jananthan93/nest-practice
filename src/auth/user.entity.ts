import {BaseEntity, Entity, Column, PrimaryGeneratedColumn, Unique} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['userName'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    userName:string;
    @Column()
    password:string;
    @Column()
    salt:string;

    async validatePassword(password:string):Promise<boolean>{
        const hash = await bcrypt.hash(password,this.salt);
        return hash === this.password;
    }
}
