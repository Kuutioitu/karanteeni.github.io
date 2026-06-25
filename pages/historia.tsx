import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import history_plain from '../data/history.json';
import ImageCarouselSection from '../components/imagecarousel';

interface HistoryVideo {
    type: "video",
    content: string
}

interface HistoryImageItem {
    src: string,
    alt: string,
    description: string
}

interface HistoryImage {
    type: "image",
    content: HistoryImageItem[],
}

interface HistoryText {
    type: "text",
    content: string[]
}

type HistorySection = HistoryImage | HistoryText | HistoryVideo

interface HistoryBlock {
    title: string,
    date: string,
    sections: HistorySection[],
}

const history = history_plain as unknown as HistoryBlock[];

const History = () => {
    return (
        <Layout
            className="history"
            title="Historia"
            description="Karanteenin historia alusta nykypäivään"
        >
            <Heading heading="Karanteenin historia" lead="Alusta eteenpäin" />
            <div className='history-layout'>
                {
                    history.map((item, index) => (
                        <HistoryChapter key={index} block={item}></HistoryChapter>
                    ))
                }
            </div>
        </Layout>
    )
}

export default History

const TextSection = ({ section }: { section: HistoryText }) => (
  <div className="history-section history-section__text">
    {section.content.map((p, idx) => (
      <p key={idx}>{p}</p>
    ))}
  </div>
);

const VideoSection = ({ section }: { section: HistoryVideo }) => (
  <div className="history-section history-section__video">
    <div className="history-video-wrapper">
      <iframe
        src={section.content}
        allowFullScreen
      />
    </div>
  </div>
);

const renderSection = (section: HistorySection, idx: number) => {
  switch (section.type) {
    case 'text':
      return <TextSection key={idx} section={section} />;
    case 'image':
      return <ImageCarouselSection key={idx} images={section.content} />;
    case 'video':
      return <VideoSection key={idx} section={section} />;
    default:
      return null;
  }
};

const HistoryChapter = ({ block }: {block: HistoryBlock}) => {
  return (
    <section className="history-chapter">
      <div className="history-chapter__content">
        <div className='history-chapter__date'>
          <span className='history-chapter__date__content'>{block.date}</span>
        </div>
        <h2 className="history-chapter__title">{block.title}</h2>
        {block.sections.map(renderSection)}
      </div>
    </section>
  );
};
