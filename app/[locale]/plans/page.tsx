'use client'
import React, { useState } from 'react'
import styles from '../../../src/styles/Plans.module.css'
import { CheckCircle } from 'lucide-react'
import { Lightning } from '@phosphor-icons/react'

const plans = [
  {
    name: 'STARTER PLAN',
    price: '$10/month',
    highlight: false,
    description: 'Perfect for getting started.',
    features: [
      'Watermark-free exports',
      'Access to basic AI models (GPT-4o, Claude Haiku)',
      '30 downloads/month',
      '8 AI Generated Slides per Carousel',
    ],
  },
  {
    name: 'SOLOPRENEUR PLAN',
    price: '$10/month',
    highlight: true,
    previous: '$20/month',
    savings: 'Saves you $120 per year.',
    description: 'Perfect for solo creators.',
    features: [
      'Watermark-free exports',
      'Access to advanced AI models (GPT-4, Claude Sonnet)',
      '15 AI Generated Slides per Carousel',
      'Up to 5 Brands',
      'Unlimited downloads',
      'Access to all templates',
      'Custom color palettes',
      'Create custom templates',
    ],
  },
  {
    name: 'TEAM PLAN',
    price: '$25/month',
    previous: '$50/month',
    savings: 'Saves you $300 per year.',
    highlight: false,
    description: 'Perfect for small teams.',
    features: [
      '100 AI generated images per month',
      'Up to 5 workspaces',
      'Up to 20 slides per carousel',
      '15 custom templates',
    ],
  },
]

const freePlan = {
  name: 'FREE PLAN',
  price: '$0/month',
  description: 'To help you get started.',
  features: [
    'Access to GPT 4o-Mini',
    '5 downloads per month',
    'Access to basic templates',
  ],
}

const PlansSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className={styles['plans-section']}>
      <h2>Plans for Your Carousel Creation Needs</h2>
      <p className={styles['plans-subtitle']}>
        From solo creators to agencies, we have a plan that fits your requirements.
      </p>
      <div className={styles['plans-toggle']}>
        <button 
          className={`${styles['toggle-btn']} ${styles['active']}`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button 
          className={`${styles['toggle-btn']}`}
          onClick={() => setIsMonthly(false)}
        >
          Yearly
        </button>
      </div>

      <p className={styles['plans-banner']}>50% OFF ON YEARLY SUBSCRIPTION – ANNUAL50OFF</p>

      <div className={styles['plans-grid']}>
        {/* Starter Plan */}
        <div className={styles['plan-card-1-3']}>
          <h3 className={styles['plan-name']}>STARTER PLAN</h3>
          <h2 className={styles['plan-price']}>$10/month</h2>
          <p className={styles['plan-description']}>Perfect for getting started.</p>
          <ul className={styles['plan-features']}>
            <li>✓ Watermark-free exports</li>
            <li>✓ Access to basic AI models (GPT-4o, Claude Haiku)</li>
            <li>✓ 30 downloads/month</li>
            <li>✓ 8 AI Generated Slides per Carousel</li>
          </ul>
          <button className={styles['plan-button']}>Get Started</button>
          <p className={styles['plan-note']}>* All prices are subject to applicable taxes.</p>
        </div>

        {/* Solopreneur Plan */}
        <div className={`${styles['plan-card']} ${styles['highlight']}`}>
          <p className={styles['plan-previous']}>Previously: <s>$20/month</s></p>
          <h3 className={styles['plan-name']}>SOLOPRENEUR PLAN</h3>
          <h2 className={styles['plan-price']}>$10/month</h2>
          <p className={styles['plan-savings']}>Saves you $120 per year.</p>
          <p className={styles['plan-description']}>Perfect for solo creators.</p>
          <ul className={styles['plan-features']}>
            <li>✓ Watermark-free exports</li>
            <li>✓ Access to advanced AI models (GPT-4, Claude Sonnet)</li>
            <li>✓ 15 AI Generated Slides per Carousel</li>
            <li>✓ Up to 5 Brands</li>
            <li>✓ Unlimited downloads</li>
            <li>✓ Access to all templates</li>
            <li>✓ Custom color palettes</li>
            <li>✓ Create custom templates</li>
          </ul>
          <button className={styles['plan-button']}>Get Started</button>
          <p className={styles['plan-note']}>* All prices are subject to applicable taxes.</p>
        </div>

        {/* Team Plan */}
        <div className={styles['plan-card-1-3']}>
          <p className={styles['plan-previous']}>Previously: <s>$50/month</s></p>
          <h3 className={styles['plan-name']}>TEAM PLAN</h3>
          <h2 className={styles['plan-price']}>$25/month</h2>
          <p className={styles['plan-savings']}>Saves you $300 per year.</p>
          <p className={styles['plan-description']}>Perfect for small teams.</p>
          <ul className={styles['plan-features']}>
            <li>✓ 100 AI generated images per month</li>
            <li>✓ Up to 5 workspaces</li>
            <li>✓ Up to 20 slides per carousel</li>
            <li>✓ 15 custom templates</li>
          </ul>
          <button className={styles['plan-button']}>Get Started</button>
          <p className={styles['plan-note']}>* All prices are subject to applicable taxes.</p>
        </div>
      </div>

      <p className={styles['plans-footer-note']}>
        If you require additional limits, you can <u>add them as Add-Ons</u> to your subscription.
      </p>

      <div className={`${styles['free-plan-card']} ${styles['free-plan']}`}>
        <div>
          <h3 className={styles['plan-name']}>{freePlan.name}</h3>
          <h2 className={styles['plan-price']}>{freePlan.price}</h2>
          <p className={styles['plan-description']}>{freePlan.description}</p>
        </div>
        <div>
          <ul className={styles['plan-features']}>
            {freePlan.features.map((feature, i) => (
              <li key={i}>
                <CheckCircle size={20} color="#059669" height="fill" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className={styles['plan-button']}>
            <Lightning size={16} weight="bold" />
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default PlansSection
