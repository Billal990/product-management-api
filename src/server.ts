import { connect } from 'mongoose';
import { app } from './app';
import config from './app/config';

async function main() {
  try {
    await connect(config.database_url as string);
    console.log('DB Connected Successfully');
    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in DB==> ', error.message);
    }
  }
}

main();
