import { render, screen } from '@testing-library/react'

import Car from '.'

describe('<Car />', () => {
  it('should render the heading', () => {
    const { container } = render(<Car />)

    expect(screen.getByRole('heading', { name: /Car/i })).toBeInTheDocument()
  })
})
