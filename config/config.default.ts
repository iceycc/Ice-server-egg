import {EggAppConfig, EggAppInfo, PowerPartial} from 'egg';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1564305845333_5058';

    // config.security = {
    //     csrf:false , // 是否开启csrf
    // }
    config.session = {
        renew : false
    }
    // add your egg config in here
    config.middleware = [];
    // add view
    // tslint:disable-next-line:no-multi-spaces
    config.view = {
        defaultExtension: '.html',
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html':'nunjucks'
        }
        // defaultViewEngine: 'nunjucks',
        // mapping: {
        //     '.nj': 'nunjucks',
        // },
    };
    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
