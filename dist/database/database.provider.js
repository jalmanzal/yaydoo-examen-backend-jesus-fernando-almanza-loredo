"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProvider = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const enum_1 = require("../common/enum");
exports.DatabaseProvider = typeorm_1.TypeOrmModule.forRootAsync({
    inject: [config_1.ConfigService],
    async useFactory(config) {
        const isDevelopmentEnvironment = config.get('NODE_ENV') !== enum_1.Environment.Production;
        const dbConfig = {
            type: 'mysql',
            host: config.get('DB_HOST'),
            port: +config.get('DB_PORT'),
            username: config.get('DB_USER'),
            password: config.get('DB_PASSWORD'),
            database: config.get('DB_NAME'),
            autoLoadEntities: true,
            synchronize: isDevelopmentEnvironment,
            logging: config.get('DB_LOGGING'),
        };
        return dbConfig;
    },
});
//# sourceMappingURL=database.provider.js.map