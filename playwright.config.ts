import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {

    expect: {
        timeout: 20000
    },
    //sets timeout for each test case
    timeout: 120000,

    //number of retries if test case fails
    retries: 0,

    reporter: [
        ['list'],
        [`allure-playwright`,
            { outputFolder: 'allure-results' }],
        [`html`,
            { outputFolder: 'html-report', open: 'never' }]
    ],

    projects: [
        {
            name: `Chrome`,
            use: {
                // Configure the browser to use.
                browserName: `chromium`,
                //Chrome Browser Config
                channel: `chrome`,
                baseURL: `https://app.respond.io/user/login`,
                //Browser Mode
                headless: false,
                //Browser height and width
                viewport: null, //{ width: 1366, height: 768 },
                ignoreHTTPSErrors: true,
                //Enable File Downloads in Chrome
                acceptDownloads: true,
                //Artifacts
                screenshot: `only-on-failure`,
                video: `retain-on-failure`,
                trace: `retain-on-failure`,
                //Slows down execution by ms
                launchOptions: {
                    slowMo: 0,
                    args: ["--start-maximized"]
                },
            },
        },
        {
            name:"Functional",
            grep:/@Functional/,
            use: {
                browserName: `chromium`,
                channel: `chrome`,
                baseURL: `https://app.respond.io/user/login`,
                headless: false,
                viewport: { width: 1500, height: 730 },
                ignoreHTTPSErrors: true,
                acceptDownloads: true,
                screenshot: `only-on-failure`,
                video: `retain-on-failure`,
                trace: `retain-on-failure`,
                launchOptions: {
                    slowMo: 0
                }
            }
        },
        {
            name: `API`,
            grep:/@API/,
            use: {
                baseURL: "https://app.respond.io",
                extraHTTPHeaders:{
                    'Accept': 'application/json',
                },
                ignoreHTTPSErrors: true
            }
        }
    ],
};
export default config;