import React from 'react';
import styled, { keyframes } from 'styled-components';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const About = () => {
  return (
    <AboutContainer>
      <Title>Welcome to Our Story</Title>
      <Description>
        At our e-commerce store, we're dedicated to providing you with the best shopping experience.
        Our journey began with a passion for quality products and exceptional customer service.
      </Description>
      <ImageContainer>
        <FloatingImage src="https://plus.unsplash.com/premium_photo-1682141916641-788c26579bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Floating Image" height={250} width={400} />
      </ImageContainer>
      <Subtitle>Why Choose Us</Subtitle>
      <FeatureList>
        <FeatureItem>
         <WorkspacePremiumIcon/>
          <Text>Premium Quality</Text>
        </FeatureItem>
        <FeatureItem>
        <LocalShippingIcon/>
          <Text>Fast Shipping</Text>
        </FeatureItem>
        <FeatureItem>
          <SupportAgentIcon/>
          <Text>24/7 Customer Support</Text>
        </FeatureItem>
      </FeatureList>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const FloatingImage = styled.img`
  position: absolute;
  margin:0px 0px 0px -50px;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  text-align: center;
`;


export default About;
