'use client'
import React, { useState } from 'react'
import styles from '../../../src/styles/Plans.module.css'

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  highlight?: boolean
  previous?: string
  savings?: string
}

const PLANS: Plan[] = [
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
  {
    name: 'FREE PLAN',
    price: '$0/month',
    description: 'To help you get started.',
    features: [
      'Access to GPT 4o-Mini',
      '5 downloads per month',
      'Access to basic templates',
    ],
  },
]

export default function Plans() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className={styles.container}>
      <h2>Plans for Your Carousel Creation Needs</h2>
      <p className={styles.subtitle}>
        From solo creators to agencies, we have a plan that fits your requirements.
      </p>

      <div className={styles.toggle}>
        <button 
          className={`${styles.toggleBtn} ${!isYearly ? styles.active : ''}`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button 
          className={`${styles.toggleBtn} ${isYearly ? styles.active : ''}`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </button>
      </div>

      <p className={styles.banner}>50% OFF ON YEARLY SUBSCRIPTION – ANNUAL50OFF</p>

      <div className={styles.plansGrid}>
        {PLANS.map((plan, index) => (
          <div key={index} className={`${styles.planCard} ${plan.highlight ? styles.highlight : ''}`}>
            {plan.previous && (
              <p className={styles.previous}>Previously: <s>{plan.previous}</s></p>
            )}
            <h3 className={styles.planName}>{plan.name}</h3>
            <h2 className={styles.planPrice}>{plan.price}</h2>
            {plan.savings && <p className={styles.savings}>{plan.savings}</p>}
            <p className={styles.description}>{plan.description}</p>
            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className={styles.button}>Get Started</button>
            <p className={styles.note}>* All prices are subject to applicable taxes.</p>
          </div>
        ))}
      </div>

      <p className={styles.footerNote}>
        If you require additional limits, you can <u>add them as Add-Ons</u> to your subscription.
      </p>
    </div>
  )
}
