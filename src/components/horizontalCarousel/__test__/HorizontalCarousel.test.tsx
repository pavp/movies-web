import { faker } from '@faker-js/faker'
import { Movie } from 'interfaces'
import { fireEvent, render, screen } from '@testing-library/react'
import { HorizontalCarousel } from 'components'

const item1: Movie = {
  id: faker.string.uuid(),
  title: faker.lorem.words(),
}
const item2: Movie = {
  id: faker.string.uuid(),
  title: faker.lorem.words(),
}

describe('HorizontalCarousel', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render all items', () => {
    const handlePressMovieMock = jest.fn()

    const { container } = render(
      <HorizontalCarousel data={[item1, item2]} handlePressMovie={handlePressMovieMock} title={faker.lorem.word()} />
    )

    expect(container.getElementsByClassName('slick-slide').length).toEqual(4) //equal 4 because infite: true
  })

  it('should call handlePressMovie', async () => {
    const handlePressMovieMock = jest.fn()

    render(
      <HorizontalCarousel data={[item1, item2]} handlePressMovie={handlePressMovieMock} title={faker.lorem.word()} />
    )

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(handlePressMovieMock).toBeCalled()
  })
})
