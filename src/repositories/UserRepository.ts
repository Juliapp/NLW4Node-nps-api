import { EntityRepository, Repository } from "typeorm";
import User from "../models/Users";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {}
