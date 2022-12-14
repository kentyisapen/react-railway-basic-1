export const createComponentTemplate = (
	name: string
): string => `import React from 'react';
import { use${name} } from "./hooks"

import { Div } from './styles';

export type ${name}Props = {
  name: string;
};

export const ${name}: React.FC<${name}Props> = ({ name }: ${name}Props) => {

  const [x, useX] = use${name}()
  
  return (<Div>
    <p>Enjoy {name} component life!!</p>
  </Div>)
);
`;

// Hooksのテンプレート
export const createHooksTemplate = (
	name: string
): string => `import  { useState } from 'react';

export const use${name} = () => {
  const [x, useX] = useState(0)

  return [
    x,
    useX
  ]
}

`;

// styled-componentのテンプレート
export const createStyleTemplate =
	(): string => `import styled from 'styled-components';

// import { ThemeProps } from 'styles/Theme';

export const Div = styled.div\`\`;
`;
