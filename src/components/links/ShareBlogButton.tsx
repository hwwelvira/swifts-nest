import clsx from 'clsx';
import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiCopy } from 'react-icons/fi';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import ButtonLink, { ButtonLinkProps } from '@/components/links/ButtonLink';

type ShareBlogButtonProps = {
  url: string;
  title: string;
} & Omit<ButtonLinkProps, 'children' | 'href'>;

export default function ShareBlogButton({
  url,
  className,
  ...rest
}: ShareBlogButtonProps) {
  const [copy] = useCopyToClipboard();

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    copy(url).then((success) => {
      if (success) {
        toast.success('链接已复制到剪贴板！', {
          duration: 2000,
          position: 'bottom-center',
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '8px',
          },
        });
      }
    });
  };

  return (
    <>
      <ButtonLink
        {...rest}
        onClick={handleCopy}
        href='#'
        className={clsx('items-center gap-2', className)}
      >
        <FiCopy className='text-[1.2em]' />
        复制文章链接
      </ButtonLink>
      <Toaster />
    </>
  );
}
