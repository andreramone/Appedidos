import ComplaintController from './complaintController.js'



  describe('Complaint Controller', () => {

    // test('gets the test endpoint', async () => {
    //     const mReq = { 
    //         body: 
    //         { 
    //             latitude: -9.56918,
    //             longitude: -36.76422,
    //             denunciante: {
    //                 nome: "José de Oliveira",
    //                 cpf: "95761638037"
    //             },
    //             denuncia: {
    //                 titulo: "Esgoto a céu aberto",
    //                 descricao: "Existe um esgoto a céu aberto nesta localidade."
    //             }
    //         } 
    //     };
    //     const mRes = {};
    //     const response = await ComplaintController.init(mReq, mRes)
    //     expect(response.status).toBe(200)
    //   })

    test('Should return error if no longitude is provided', async () => {
        const sut = ComplaintController

        const ErrorMessage = {message: "Request inválido.", code: '01'}
        
        const httpRequest = {
          body: {
            latitude: -9.648198,
            denunciante: {
              nome: 'Carlos José',
              cpf: '321.312.454-09'
            },
            denuncia: {
              titulo: 'Titulo aleatório',
              descricao: 'Descricão aleatório'
            }
          }
        }
        const httpResponse = await sut.init(httpRequest)

        expect(httpResponse).toEqual(ErrorMessage)
      })

      test('Should return error if no latitude is provided', async () => {
        const sut = ComplaintController

        const ErrorMessage = {message: "Request inválido.", code: '01'}
        
        const httpRequest = {
          body: {
            longitude: -36.76422,
            denunciante: {
              nome: 'Carlos José',
              cpf: '321.312.454-09'
            },
            denuncia: {
              titulo: 'Titulo aleatório',
              descricao: 'Descricão aleatório'
            }
          }
        }
        const httpResponse = await sut.init(httpRequest)

        expect(httpResponse).toEqual(ErrorMessage)
      })
    
    })