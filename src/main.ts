import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

export const start = async () => {
  const port = process.env.PORT;

  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => console.log(`Server started on port ${port}`));
};
start();
