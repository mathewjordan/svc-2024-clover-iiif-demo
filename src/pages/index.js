import { Box, Container, Heading, Section, Text } from "@radix-ui/themes";
import {
  CloverPrimitives,
  CloverScroll,
  CloverSlider,
  CloverViewer,
} from "@/components/CloverIIIF";
import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import Link from "@/components/Link";
import { upgrade } from "@iiif/parser/upgrader";
import { useDemo } from "@/context/demo-context";

const IndexPage = () => {
  const [json, setJson] = useState({});
  const [collection, setCollection] = useState({});

  const {
    state: { appearance, font, manifest },
  } = useDemo();

  useEffect(() => {
    fetch(manifest)
      .then((response) => response.json())
      .then((data) => {
        const upgraded = upgrade(data);
        setJson(upgraded);

        if (upgraded?.partOf && upgraded?.partOf?.length) {
          setCollection(upgraded?.partOf[0]?.id);
        } else {
          setCollection(null);
        }
      });
  }, [manifest]);

  /**
   * Custom value content for a metadata value entry
   */
  const MetadataValueContent = (props) => (
    <Link href={`?${props.param}=${encodeURIComponent(props.value)}`}>
      {props.value}
    </Link>
  );

  return (
    <Layout appearance={appearance} font={font}>
      {/* viewer */}
      <div style={{ position: "relative", zIndex: "0" }}>
        <CloverViewer
          iiifContent={manifest}
          options={{
            openSeadragon: {
              gestureSettingsMouse: {
                scrollToZoom: false,
              },
            },
            informationPanel: {
              renderToggle: false,
              renderAbout: false,
            },
            showTitle: false,
            showIIIFBadge: false,
          }}
        />
      </div>
     

      <Container px="5">
        {/* primitives - label and summary */}
        <Section size="1" asChild>
          <header>
            <Heading size="9" my="4" asChild>
              <CloverPrimitives.Label as="h1" label={json.label} />
            </Heading>
            <Text size="5" color="gray" asChild>
              <CloverPrimitives.Summary as="p" summary={json.summary} />
            </Text>
          </header>
        </Section>

        {/* primitives - metadata & required statement */}
        <Section>
          <Heading as="h2" weight="light" color="gray" mb="5">
            Details
          </Heading>
          <CloverPrimitives.Metadata
            metadata={json.metadata}
            customValueDelimiter="<br/>"
            className="demo-datalist"
            customValueContent={[
              {
                matchingLabel: { none: ["Date"] },
                Content: <MetadataValueContent param="date" />,
              },
              {
                matchingLabel: { none: ["Lyricist"] },
                Content: <MetadataValueContent param="lyricist" />,
              },
            ]}
          />
          <CloverPrimitives.RequiredStatement
            requiredStatement={json.requiredStatement}
            className="demo-datalist"
          />
        </Section>

        {/* scroll with annotations as textual bodies */}
        <Section>
          <Heading as="h2" weight="light" color="gray" mb="5">
            Transcriptions
          </Heading>
          <CloverScroll iiifContent={manifest} />
        </Section>

        {/*slider */}
        <Section>
          <Heading as="h2" weight="light" color="gray" mb="5">
            Explore More
          </Heading>
          <CloverSlider iiifContent={collection} />
        </Section>
      </Container>
    </Layout>
  );
};

export default IndexPage;

{
  /* <Box
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          maskImage:
            "linear-gradient(183deg, #000 0, #0001 calc(100% - 500px), transparent calc(100% - 200px))",
        }}
      >
        <CloverPrimitives.Thumbnail
          thumbnail={[ 
            {
              id: "https://meadow-streaming.rdc.library.northwestern.edu/b0/ce/0a/56/-a/5b/a-/41/a0/-8/42/8-/bc/d2/9d/6d/89/48/numedia_33159-mp107.m3u8#t=570,600",
              type: "Video",
              format: "application/x-mpegurl",
              width: "100%",
              height: "100%",
              duration: 30,
            },
          ]}
          label={json.label}
        />
      </Box> */
}
