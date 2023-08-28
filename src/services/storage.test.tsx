import { createLocalStorage, getAllLocalStorage, changeLocalStorage } from "./storage"
const diobank = {
    login:false,
}
describe('storage', () =>{
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localStorage', () =>{
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage',() =>{
        
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank',JSON.stringify(diobank) )
    })

    it('Deve alterar o valor do objeto do localStorage', () =>{
        changeLocalStorage(diobank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
})