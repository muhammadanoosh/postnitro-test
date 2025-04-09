'use client'

import React from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import '../styles/Hero.css' // Import the CSS

const HeroSection = () => {
  return (
    <section className="hero-container">
      <span className="hero-badge">
        ● AI-Powered Carousel Generator For Viral Content
      </span>

      <h1 className="hero-title">
        AI-Powered Carousel Generator for Instagram, LinkedIn <br /> & More
      </h1>

      <p className="hero-description">
        PostNitro's AI-powered platform creates stunning carousels for Instagram, LinkedIn, TikTok, and more. Boost your social media engagement with customizable, brand-aligned content generated in minutes.
      </p>

      <div className="hero-content-row">
        <div className="hero-avatars">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/150?img=${i + 1}`}
              alt="avatar"
              className="hero-avatar"
            />
          ))}
        </div>

        <div className="hero-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span> <span>5.0</span>
          <p>Join 32,000+ Creators</p>
        </div>

        <div className="hero-integrations">
          <strong>Embedded Into</strong>
          <span>40+ SMM Platforms</span>
        </div>
        <div className="integration-icons">
          <span>🌐</span>
          <span>📘</span>
          <span>🐦</span>
          <span>💬</span>
          <span>🅿️</span>
        </div>
      </div>

      <button className="hero-button">
        Start Creating Free Carousels <ArrowRight size={18} />
      </button>

      <p className="hero-footer-note">
        ✓ No Credit Card Required | Free Downloads Every Month
      </p>
    </section>
  )
}

export default HeroSection
