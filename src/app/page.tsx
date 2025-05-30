import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Background } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, mailchimp, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Meta, Schema } from "@/once-ui/modules";
import { SpacingToken } from "@/once-ui/types";


export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <>
      <Background
        position="absolute"
        style={{
          borderRadius: "24px",   // 👈 Rounded corners
          overflow: "hidden"      // 👈 Ensures inner content stays within curve
        }}
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="m" gap="xl" horizontal="center" style={{ position: "relative" }}>
        {/* <Background
      position="absolute"
      mask={{
        x: mailchimp.effects.mask.x,
        y: mailchimp.effects.mask.y,
        radius: mailchimp.effects.mask.radius,
        cursor: mailchimp.effects.mask.cursor,
      }}
      gradient={{
        display: mailchimp.effects.gradient.display,
        opacity: mailchimp.effects.gradient.opacity as opacity,
        x: mailchimp.effects.gradient.x,
        y: mailchimp.effects.gradient.y,
        width: mailchimp.effects.gradient.width,
        height: mailchimp.effects.gradient.height,
        tilt: mailchimp.effects.gradient.tilt,
        colorStart: mailchimp.effects.gradient.colorStart,
        colorEnd: mailchimp.effects.gradient.colorEnd,
      }}
      dots={{
        display: mailchimp.effects.dots.display,
        opacity: mailchimp.effects.dots.opacity as opacity,
        size: mailchimp.effects.dots.size as SpacingToken,
        color: mailchimp.effects.dots.color,
      }}
      grid={{
        display: mailchimp.effects.grid.display,
        opacity: mailchimp.effects.grid.opacity as opacity,
        color: mailchimp.effects.grid.color,
        width: mailchimp.effects.grid.width,
        height: mailchimp.effects.grid.height,
      }}
      lines={{
        display: mailchimp.effects.lines.display,
        opacity: mailchimp.effects.lines.opacity as opacity,
        size: mailchimp.effects.lines.size as SpacingToken,
        thickness: mailchimp.effects.lines.thickness,
        angle: mailchimp.effects.lines.angle,
        color: mailchimp.effects.lines.color,
      }}
    /> */}

        <Schema
          as="webPage"
          baseURL={baseURL}
          path={home.path}
          title={home.title}
          description={home.description}
          image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Column fillWidth paddingY="24" gap="m">
          <Column maxWidth="s">
            {home.featured && (
              <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
                <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
                  href={home.featured.href}>
                  <Row paddingY="2">Sherload.Adi</Row>
                </Badge>
              </RevealFx>
            )}
            <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                {home.subline}
              </Text>
            </RevealFx>
            <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                arrowIcon
              >
                <Flex gap="8" vertical="center">
                  {about.avatar.display && (
                    <Avatar
                      style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Flex>
              </Button>
            </RevealFx>
          </Column>
        </Column>
      </Column>
    </>


  );
}
