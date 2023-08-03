import { render, screen } from '@testing-library/react'
import { ActivityIndicator } from 'components'

describe('ActivityIndicator', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render correctly', () => {
    render(<ActivityIndicator />)

    expect(screen.getByTestId('activity-indicator-container')).toBeInTheDocument()
  })
})
