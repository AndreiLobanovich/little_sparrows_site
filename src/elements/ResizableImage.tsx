import React from 'react';

interface ResizableImageProps {
  src: string;
  width?: number | string
  height?: number | string
  alt?: string;
  verticalMargin?: number | string;
  horizontalMargin?: number | string;
}

const ResizableImage: React.FC<ResizableImageProps> = ({
  src,
  width,
  height,
  alt,
  verticalMargin,
  horizontalMargin,
}) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt || 'Resizable Image'}
      style={{
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        marginTop: verticalMargin,
        marginBottom: verticalMargin,
        marginLeft: horizontalMargin,
        marginRight: horizontalMargin,
      }}
    />
  );
};

export default ResizableImage;
