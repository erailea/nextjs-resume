import Link from 'next/link';
import React from 'react';
import { CMSProject } from '../../cms-integration/markdown/project';
import Heading from '../../strum-design-system/components/Heading/Heading';
import { articleStyle } from '../Articles/article.css';

const ProjectItem: React.FC<CMSProject> = (props) => {
  return (
    <article className={articleStyle}>
      <Heading level={4}>
        {props.attributes.link ? (
          <Link href={props.attributes.link ?? ''}>
            {props.attributes.name}
          </Link>
        ) : (
          <>{props.attributes.name}</>
        )}
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </article>
  );
};

export default ProjectItem;
