import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { CarMakerModule } from "./modules/car-maker/car-maker.module";
import { CarModelFeaturesModule } from "./modules/car-model-features/car-model-features.module";
import { CarModelModule } from "./modules/car-model/car-model.module";
import { CarModule } from "./modules/car/car.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    CarModule,
    CarMakerModule,
    CarModelModule,
    CarModelFeaturesModule,
    UserModule,
  ],
})
export class AppModule {}
