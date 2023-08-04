"use client";
import Link from 'next/link';

import styled from 'styled-components';

const transitionDuration = '0.3s'; // replace this with your actual transition duration

export const LayoutTopbar = styled.div`
  position: fixed;
  height: 5rem;
  z-index: 997;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 2rem;
  background-color: #fff;
  transition: left ${transitionDuration};
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 5px rgba(0,0,0,.02), 0px 0px 2px rgba(0,0,0,.05), 0px 1px 4px rgba(0,0,0,.08);
`;

export const LayoutTopbarLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--surface-900);
  font-size: 1.5rem;
  font-weight: 500;
  width: 300px;
  border-radius: 12px;

  img {
    height: 2.5rem;
    margin-right: .5rem;
  }

  &:focus {
    outline: 1px solid var(--highlight-color); // you will need to define your "focussed" styles here.
  }
`;

export const LayoutTopbarButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--text-color-secondary);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: background-color ${transitionDuration};

  &:hover {
    color: var(--text-color);
    background-color: var(--surface-hover);
  }

  &:focus {
    outline: 1px solid var(--highlight-color); // you will need to define your "focussed" styles here.
  }

  i {
    font-size: 1.5rem;
  }

  span {
    font-size: 1rem;
    display: none;
  }
`;

// ... continue with the other components

// For the media query part
export const LayoutTopbarWrapper = styled.div`
  ${LayoutTopbar} {
    @media (max-width: 991px) {
      justify-content: space-between;
      // ... more styles here
    }
  }
`;

export const LayoutTopBarMenu = styled.div`
    margin: 0 0 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
`;