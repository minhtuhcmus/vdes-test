import {Entity, model, property, hasOne} from '@loopback/repository';
import {Address, AddressWithRelations} from './address.model'
@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @hasOne(() => Address, {keyTo: 'userId'})
  address?: Address;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
  address?: AddressWithRelations
}

export type UserWithRelations = User & UserRelations;
