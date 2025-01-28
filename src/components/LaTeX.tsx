import clsx from 'clsx';
import * as React from 'react';
import { BlockMath, InlineMath } from 'react-katex';

import 'katex/dist/katex.min.css';

type LaTeXProps = {
  children: string;
  block?: boolean;
};

export default function LaTeX({ children, block = false }: LaTeXProps) {
  return block ? (
    <div className={clsx('text-gray-700 dark:text-gray-200')}>
      <BlockMath math={children.toString()} />
    </div>
  ) : (
    <div className={clsx('inline text-gray-700 dark:text-gray-200')}>
      <InlineMath math={children.toString()} />
    </div>
  );
}
