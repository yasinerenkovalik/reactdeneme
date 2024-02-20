import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { useParams } from "react-router-dom";
import myImage from "../../assets/img/conseptss/consept1.jpg"; 


// ...

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    // Resmi items dizisine ekleyerek Carousel için hazırlık yapın
    const newItems = [
      { src: myImage, altText: "Resim 1", captionText: "Merhaba", captionHeader: "" },
      // Diğer resimleri ekleyebilirsiniz
    ];
    setItems(newItems);
  }, [id]);

  return (
    <>
      <div className="section pt-0" id="carousel">
        <Container>
          <Row>
            <Col className="mr-auto" md="4">
              <Card className="page-carousel bg-transparent">
                <div style={{ width: '400px' }}>
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items.map((item, index) => (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={index}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.captionText}
                          captionHeader={item.captionHeader}
                        />
                      </CarouselItem>
                    ))}
                  </Carousel>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionCarousel;
