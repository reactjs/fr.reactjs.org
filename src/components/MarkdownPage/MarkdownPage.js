/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import FeedbackForm from 'components/FeedbackForm';
import Flex from 'components/Flex';
import MarkdownHeader from 'components/MarkdownHeader';
import NavigationFooter from 'templates/components/NavigationFooter';
<<<<<<< HEAD
import type {Node} from 'types';
=======
// $FlowFixMe Update Flow
>>>>>>> 82b8c9f2ab094eb7b0268029ab72fc99ffcadaf6
import React from 'react';
import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import {colors} from 'theme';
import createCanonicalUrl from 'utils/createCanonicalUrl';
import findSectionForPath from 'utils/findSectionForPath';
import {sharedStyles} from 'theme';
<<<<<<< HEAD
import toCommaSeparatedList from 'utils/toCommaSeparatedList';
=======
import createCanonicalUrl from 'utils/createCanonicalUrl';
import {colors, media} from 'theme';

import type {Node} from 'types';
>>>>>>> 82b8c9f2ab094eb7b0268029ab72fc99ffcadaf6

type Props = {
  authors: Array<string>,
  createLink: Function, // TODO: Add better flow type once we Flow-type createLink
  date?: string,
  enableScrollSync?: boolean,
  ogDescription: string,
  location: Location,
  markdownRemark: Node,
  sectionList: Array<Object>, // TODO: Add better flow type once we have the Section component
  titlePostfix: string,
};

const getPageById = (sectionList: Array<Object>, templateFile: ?string) => {
  if (!templateFile) {
    return null;
  }

  const sectionItems = sectionList.map(section => section.items);
  const flattenedSectionItems = [].concat.apply([], sectionItems);
  const linkId = templateFile.replace('.html', '');

  return flattenedSectionItems.find(item => item.id === linkId);
};

const MarkdownPage = ({
  authors = [],
  createLink,
  date,
  enableScrollSync,
  ogDescription,
  location,
  markdownRemark,
  sectionList,
  titlePostfix = '',
}: Props) => {
  const hasAuthors = authors.length > 0;
  const titlePrefix = markdownRemark.frontmatter.title || '';

  const prev = getPageById(sectionList, markdownRemark.frontmatter.prev);
  const next = getPageById(sectionList, markdownRemark.frontmatter.next);

  return (
    <Flex
      direction="column"
      grow="1"
      shrink="0"
      halign="stretch"
      css={{
        width: '100%',
        flex: '1 0 auto',
        position: 'relative',
        zIndex: 0,
        '& h1, & h2, & h3, & h4, & h5, & h6': {
          scrollMarginTop: 'var(--banner-height-normal)',
          [media.lessThan('small')]: {
            scrollMarginTop: 'var(--banner-height-small)',
          },
        },
      }}>
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogType="article"
        canonicalUrl={createCanonicalUrl(markdownRemark.fields.slug)}
        title={`${titlePrefix}${titlePostfix}`}
      />
      <div css={{flex: '1 0 auto'}}>
        <Container>
          <div css={sharedStyles.articleLayout.container}>
            <Flex type="article" direction="column" grow="1" halign="stretch">
              <MarkdownHeader title={titlePrefix} />

              {(date || hasAuthors) && (
                <div css={{marginTop: 15}}>
                  {date}{' '}
                  {hasAuthors && (
                    <span>
                      par{' '}
                      {toCommaSeparatedList(authors, author => (
                        <a
                          css={sharedStyles.link}
                          href={author.frontmatter.url}
                          key={author.frontmatter.name}>
                          {author.frontmatter.name}
                        </a>
                      ))}
                    </span>
                  )}
                </div>
              )}

              <div css={sharedStyles.articleLayout.content}>
                <div
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{__html: markdownRemark.html}}
                />

                {markdownRemark.fields.path && (
                  <div css={{marginTop: 80}}>
                    <span
                      css={{
                        whiteSpace: 'nowrap',
                        paddingBottom: '1em',
                        marginRight: '36px',
                        display: 'inline-block',
                        color: colors.subtle,
                      }}>
                      <FeedbackForm />
                    </span>
                    <a
                      css={sharedStyles.articleLayout.editLink}
                      href={`https://github.com/reactjs/fr.reactjs.org/tree/master/${markdownRemark.fields.path}`}>
                      Modifier cette page
                    </a>
                  </div>
                )}
              </div>
            </Flex>

            <div css={sharedStyles.articleLayout.sidebar}>
              <StickyResponsiveSidebar
                enableScrollSync={enableScrollSync}
                createLink={createLink}
                defaultActiveSection={findSectionForPath(
                  location.pathname,
                  sectionList,
                )}
                location={location}
                sectionList={sectionList}
              />
            </div>
          </div>
        </Container>
      </div>

      {(next || prev) && (
        <NavigationFooter location={location} next={next} prev={prev} />
      )}
    </Flex>
  );
};

export default MarkdownPage;
