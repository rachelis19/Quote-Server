import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {

  const logger = new Logger('bootstrap')

  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000)

  logger.log('App context is ready')
}

bootstrap()








