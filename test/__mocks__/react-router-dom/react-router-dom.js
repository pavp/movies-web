export const mockNavigate = jest.fn()

const reactRouterDomMock = jest.requireActual('react-router-dom')

export const useNavigate = () => mockNavigate

export default reactRouterDomMock
