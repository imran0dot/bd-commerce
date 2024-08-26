import Img from 'next/image';

import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const Image = ( props: { [x: string]: any; altText: any; title: any; width: any; height: any; sourceUrl: any; className: any; layout: any; objectFit: any; containerClassNames: any; showDefault: any; } )=> {
	const {altText, title, width, height, sourceUrl, className, layout, objectFit, containerClassNames, showDefault, ...rest} = props;
	
	if ( ! sourceUrl && ! showDefault ) {
		return null;
	}
	
	/**
	 * If we use layout = fill then, width and height of the image cannot be used.
	 * and the image fills on the entire width and the height of its parent container.
	 * That's we need to wrap our image in a container and give it a height and width.
	 * Notice that in this case, the given height and width is being used for container and not img.
	 */
	if ( 'fill' === layout ) {
		const attributes = {
			alt: altText || title,
			src: sourceUrl || '' ,
			layout: 'fill',
			className: cn( 'object-cover', className ),
			...rest
		};
		
		return (
			<div className={cn( 'relative', containerClassNames ) }>
				<Img {...attributes}/>
			</div>
		);
	} else {
		const attributes = {
			alt: altText || title,
			src: sourceUrl || '' ,
			width: width || 'auto',
			height: height || 'auto',
			className,
			...rest
		};
		return <Img {...attributes} />;
	}
};

Image.propTypes = {
	altText: PropTypes.string,
	title: PropTypes.string,
	sourceUrl: PropTypes.string,
	layout: PropTypes.string,
	showDefault: PropTypes.bool,
	containerClassName: PropTypes.string,
	className: PropTypes.string
};

Image.defaultProps = {
	altText: '',
	title: '',
	sourceUrl: '',
	showDefault: true,
	containerClassNames: '',
	className: 'product__image',
};

export default Image;