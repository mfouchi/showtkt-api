import { server, use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';
import { auth } from 'nexus-plugin-jwt-auth';
import { protectedPaths } from './permissions';
import { APP_SECRET } from './utils';
// import { settings } from 'nexus';
import cors from 'cors';

// Enables CORS
server.express.use(cors());

// Enables the Prisma plugin
use(prisma({ features: { crud: true } }));

// Enables the JWT Auth plugin
use(
  auth({
    appSecret: APP_SECRET,
    protectedPaths,
  }),
);

// settings.change({
//   server: {
//     cors: true
//   }
// })
