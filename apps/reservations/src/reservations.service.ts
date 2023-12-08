import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationRepository
  ) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      ...createReservationDto,
      userId: "123",
      timsestamp: new Date(),
    });
  }

  findAll() {
    return this.reservationsRepository.find({})
  }

  findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id })
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate({_id}, { $set: updateReservationDto })
  }

  remove(_id: string) {
    return this.reservationsRepository.findOneAndDelete({_id})
  }
}
