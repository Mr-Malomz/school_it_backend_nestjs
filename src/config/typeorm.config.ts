import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'malom$1990',
  database: 'school_it',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
