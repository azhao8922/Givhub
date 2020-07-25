import express from 'express'
import request from 'supertest'
import routes from '.'

describe('The Server', () => {
  const app = express()
  app.use('/', routes)

  test('returns HTML on an unknown endpoint', done => {
    request(app)
      .get('/*')
      .expect(response =>
        expect(response.header['content-type']).toContain('text/html')
      )
      .then(() => done())
  })
})
