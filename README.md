# use-overflow

> A React Hook that allows you to detect X and Y overflow.

[![NPM](https://img.shields.io/npm/v/use-overflow.svg)](https://www.npmjs.com/package/use-overflow) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-overflow
OR
yarn add use-overflow
```

## Usage

[Check out the live example](https://amorriscode.github.io/use-overflow/).

```tsx
import * as React from 'react'

import { useOverflow } from 'use-overflow'

const Example = () => {
  const horizonstalRef = React.useRef(null);
  const { refXOverflowing, refXScrollBegin, refXScrollEnd } = useOverflow(horizonstalRef);

  const verticalRef = React.useRef(null);
  const { refYOverflowing, refYScrollBegin, refYScrollEnd } = useOverflow(verticalRef);

  return (
    <div>
      {/* Conditional do stuff based on overflow! */}
    </div>
  )
}
```

## License

MIT © [amorriscode](https://github.com/amorriscode)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
