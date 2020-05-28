import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User, UserWithRelations} from './user.model';

@model()
export class Address extends Entity {
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
  streetName: string;

  @property({
    type: 'string',
    required: true,
  })
  ward: string;

  @property({
    type: 'string',
    required: true,
  })
  district: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @belongsTo(() => User, {name: 'address'})
  userId?: string;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
  user?: UserWithRelations
}

export type AddressWithRelations = Address & AddressRelations;
