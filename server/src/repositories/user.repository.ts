import {
  DefaultCrudRepository,
  juggler,
  HasOneRepositoryFactory,
  repository,
} from '@loopback/repository';
import {MongoDataSource} from '../datasources/mongo.datasource';
import {inject, Getter} from '@loopback/core';
import {Address, User, UserRelations} from '../models'
import {AddressRepository} from './address.repository'
export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  public readonly address: HasOneRepositoryFactory<
    Address,
    typeof User.prototype.id
  >
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter('AddressRepository')
    getAddressRepository: Getter<AddressRepository>,
  ) {
    super(User, dataSource);
    this.address = this.createHasOneRepositoryFactoryFor(
      'address',
      getAddressRepository
    )
  }
}
