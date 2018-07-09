const teste = require('tape');
const supertest = require('supertest');
const usuario = require('./controller/usuario_controller');

test('GET /', (t) => {
    supertest(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) =>{
            t.error(err, 'Sem erros')
            t.end()
        })
})