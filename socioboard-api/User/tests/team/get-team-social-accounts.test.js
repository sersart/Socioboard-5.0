import request from 'supertest';
import {
  GET_TEAM_SOCIAL_ACCOUNTS, SERVER,
} from '../constants';
import UnauthorizedLibs from '../../../Common/Models/unauthorized.model.js';
import TeamLibs from '../../../Common/Models/team.model.js';

const unauthorizedLibs = new UnauthorizedLibs();
const teamLibs = new TeamLibs();

let accessToken = '';
let userId = 0;

const user = {
  username: 'testGetTeamSocialAccounts',
  email: 'testGetTeamSocialAccounts@testtest.com',
  password: 'String_12345',
};

beforeAll(async () => {
  const newUser = await unauthorizedLibs.registerUser(user);

  const authorized = await unauthorizedLibs.getUserAccessToken(
    newUser.userInfo.user.dataValues.user_id,
    newUser.userInfo.activations.dataValues.id,
  );

  accessToken = authorized.accessToken;
  userId = newUser.userInfo.user.dataValues.user_id;
});

describe('Get team social accounts', () => {
  test('If access token is not provided', async () => {
    await request(SERVER)
      .post(GET_TEAM_SOCIAL_ACCOUNTS)
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect(200)
      .expect(({ body }) => expect(body.code).toBe(401));
  });

  test('If access token is provided but request params are missing', async () => {
    await request(SERVER)
      .post(GET_TEAM_SOCIAL_ACCOUNTS)
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('x-access-token', accessToken)
      .expect(200)
      .expect(({ body }) => expect(body.code).toBe(400));
  });

  test('If access token is provided and team is exist', async () => {
    const createdTeam = await teamLibs.createTeam(userId, {
      name: 'getTeamSocialAccounts',
      description: 'Short note about the team activity.',
      logoUrl: 'https://i.imgur.com/p0px2iu.png',
    });

    await request(SERVER)
      .post(GET_TEAM_SOCIAL_ACCOUNTS)
      .query({
        teamId: createdTeam.dataValues.team_id,
        network: 0,
      })
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('x-access-token', accessToken)
      .expect(200)
      .expect(({ body }) => expect(body.code).toBe(200));
  });
});
