import { client } from '@core/auth'
import { User } from '.'

const getDefaultParams = (): { UserPoolId: string } => {
  return {
    UserPoolId: process.env.USER_POOL_ID as string
  }
}

// TODO better this type
const createUser = async (email: string): Promise<any> => {
  const params = {
    ...getDefaultParams(),
    Username: email,
    UserAttributes: [{
      Name: 'email',
      Value: email
    },
    {
      Name: 'email_verified',
      Value: 'true'
    }
    ],
    MessageAction: 'SUPPRESS'
  }

  return await client.adminCreateUser(params).promise()
}

// TODO better this type
const setUserPassword = async (user: User): Promise<any> => {
  const paramsForSetPass = {
    ...getDefaultParams(),
    Password: user.password,
    Username: user.email,
    Permanent: true
  }

  return await client.adminSetUserPassword(paramsForSetPass).promise()
}

// TODO better this types
export const registerUser = async (user: User): Promise<any> => {
  await createUser(user.email)

  try {
    await setUserPassword(user)
  } catch (error) {
    await client.adminDeleteUser({
      ...getDefaultParams(),
      Username: user.email
    }).promise()

    throw error
  }
}
