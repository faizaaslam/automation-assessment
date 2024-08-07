import { test, expect } from '@playwright/test';
import endpoint from "../config/endpoints";
import testData from '../../test-data/loginTestData.json';
import apitestData from '../../test-data/apiTestData.json';
import { generateRandomEmail } from '../../utilities/helpers';

const fs = require('fs');
const path = require('path');

test.describe('Respond.IO API Test Suite', () => {
    const tokenFilePath = path.join(__dirname, 'authToken.json');

    // Login Flow
    test('@API TC01 - Verify login api returns 200 status code with valid credentials', async ({request}) => {
        const loginPayload = {
            email: testData.email,
            password: testData.password
        }
        const response = await request.post(endpoint.loginEndPoint,{
            data: loginPayload
        });
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(responseBody)
        try {
            fs.mkdirSync(path.dirname(tokenFilePath), { recursive: true });
            const token = responseBody.data.idToken;
            fs.writeFileSync(tokenFilePath, JSON.stringify({ token }), 'utf8');
            console.log('Token stored successfully:', token);
        } catch (error) {
            console.error('Error writing token to file:', error);
        }
    });

    // Add Workflow User
    test('@API TC02 - Verify that the  workspace collaboration invite endpoint returns a 201 response with valid data', async ({request}) => {
        const fileData = fs.readFileSync(tokenFilePath, 'utf8');
        const { token } = JSON.parse(fileData);
        const inviteUserPayload = {
            "ownership":apitestData.ownership,
            "permissions":[],
            "email":generateRandomEmail()
        }
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Orgid': apitestData.orgId,
            'Botid': apitestData.botId
        };
        const response = await request.post(endpoint.inviteUserEndpoint,{
            data: inviteUserPayload,
            headers: headers
        });
        const responseBody = await response.json();
        console.log(responseBody)
        expect(response.status()).toBe(201);
    });

})
