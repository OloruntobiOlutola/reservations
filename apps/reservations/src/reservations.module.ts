import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common/database/database.module';
import { ConfigModule } from '@app/common/config/config.module';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { ReservationRepository } from './reservations.repository';
import { ReservationDocument, ReservationSchema } from './models/reservation.schema';

@Module({
  imports: [ConfigModule, DatabaseModule, DatabaseModule.forFeature([{ name: ReservationDocument.name, schema: ReservationSchema }])],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationRepository],  
})
export class ReservationsModule {}
