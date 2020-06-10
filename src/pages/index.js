import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>No more muffin tears!</h1>
    <p>
      Do you need to prevent your muffins from getting soggy in the shower? Buy
      a Muffums starter pack.
    </p>
    <ProductGrid />
  </>
)

export default IndexPage
