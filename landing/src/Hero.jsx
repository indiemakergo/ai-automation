import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>Speech Forge</span>
        <h1 className={styles.title}>
          让文字开口说话
        </h1>
        <p className={styles.subtitle}>
          一键将文字转化为自然流畅的语音，支持多种音色，瞬间生成高质量音频。
        </p>
        <div className={styles.cta}>
          <a href="#" className={styles.buttonPrimary}>
            开始使用
          </a>
          <a href="#" className={styles.buttonSecondary}>
            试听 Demo
          </a>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <span>向下滚动了解更多</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}
