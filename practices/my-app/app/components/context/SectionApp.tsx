"use client";
import React from "react";
import Heading from "./Heading";
import Section from "./Section";
export default function SectionApp() {
  return (
    <div>
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}
