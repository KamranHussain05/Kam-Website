'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useTheme } from 'next-themes'

const SVG_NAME_DATA = `
<svg width="669" height="71.401" viewBox="0 0 669 71.401" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="#000" style="stroke:#000;stroke-width:0.25mm;fill:#000"><path d="M 0 70.1 L 0 1.9 L 8.4 1.9 L 8.4 33.4 L 37 1.9 L 47.5 1.9 L 21.3 30.5 L 51.5 70.1 L 41 70.1 L 15.5 36.7 L 8.4 44.5 L 8.4 70.1 L 0 70.1 Z" id="0" vector-effect="non-scaling-stroke"/><path d="M 86.9 70.9 L 85.9 65.4 A 86.116 86.116 0 0 1 81.431 67.804 Q 79.224 68.904 77.182 69.737 A 53.52 53.52 0 0 1 77.15 69.75 A 22.664 22.664 0 0 1 69.42 71.381 A 26.19 26.19 0 0 1 68.4 71.4 A 22.374 22.374 0 0 1 64.029 70.999 Q 60.311 70.258 57.75 68.15 Q 54.557 65.523 53.945 60.118 A 24.194 24.194 0 0 1 53.8 57.4 A 12.826 12.826 0 0 1 54.332 53.644 A 10.952 10.952 0 0 1 55.8 50.6 A 16.479 16.479 0 0 1 60.354 46.188 A 19.23 19.23 0 0 1 61.05 45.75 Q 64.3 43.8 68.4 42.7 Q 72.5 41.6 76.8 41.3 Q 78.6 41.1 81.5 40.95 Q 84.4 40.8 86 40.7 A 104.919 104.919 0 0 0 85.956 37.584 Q 85.912 36.12 85.826 34.819 A 61.491 61.491 0 0 0 85.8 34.45 Q 85.6 31.7 84.6 29.75 Q 83.6 27.8 81.65 26.8 A 7.518 7.518 0 0 0 80.114 26.231 Q 78.567 25.828 76.397 25.802 A 25.187 25.187 0 0 0 76.1 25.8 Q 73.2 25.8 70.5 26.15 A 100.047 100.047 0 0 0 68.101 26.489 Q 66.976 26.663 65.982 26.847 A 58.184 58.184 0 0 0 65.7 26.9 A 64.957 64.957 0 0 0 63.014 27.494 A 51.47 51.47 0 0 0 61.1 28 L 59.5 21.1 A 79.06 79.06 0 0 1 62.781 20.389 A 96.703 96.703 0 0 1 64.9 20 A 51.632 51.632 0 0 1 67.241 19.592 Q 68.844 19.347 70.7 19.15 A 62.528 62.528 0 0 1 75.02 18.85 A 76.587 76.587 0 0 1 77.8 18.8 A 28.398 28.398 0 0 1 81.076 18.978 Q 83.983 19.316 86.05 20.3 Q 89.2 21.8 90.95 24.35 A 15.324 15.324 0 0 1 93.218 29.547 A 17.719 17.719 0 0 1 93.35 30.15 A 34.06 34.06 0 0 1 93.977 35.663 A 38.815 38.815 0 0 1 94 37 L 94 61 Q 94 62.4 94.05 63.95 Q 94.1 65.5 94.25 67 A 124.898 124.898 0 0 0 94.551 69.702 A 138.048 138.048 0 0 0 94.6 70.1 L 86.9 70.9 Z M 86 58.4 L 86 47 Q 84 47.1 82.2 47.2 Q 80.4 47.3 78.65 47.45 Q 76.928 47.598 75.545 47.794 A 40.889 40.889 0 0 0 75.5 47.8 A 45.095 45.095 0 0 0 71.971 48.374 Q 68.55 49.081 66.457 50.216 A 9.355 9.355 0 0 0 65.3 50.95 Q 62.3 53.2 62.3 57.4 Q 62.3 60.9 64.45 62.65 Q 66.532 64.345 69.879 64.399 A 13.746 13.746 0 0 0 70.1 64.4 Q 74.9 64.4 78.65 62.75 Q 82.4 61.1 86 58.4 Z" id="1" vector-effect="non-scaling-stroke"/><path d="M 108.2 70.1 L 108.2 28.9 Q 108.2 26.563 107.916 23.564 A 95.943 95.943 0 0 0 107.6 20.7 L 115.1 19.7 L 116.2 26 A 59.354 59.354 0 0 1 119.536 23.696 A 50.106 50.106 0 0 1 121.5 22.5 Q 124.1 21 127.1 19.9 Q 130.1 18.8 133.2 18.8 A 23.191 23.191 0 0 1 136.255 18.989 Q 137.794 19.194 139.065 19.622 A 10.26 10.26 0 0 1 141.1 20.55 A 8.724 8.724 0 0 1 143.856 23.246 Q 144.777 24.63 145.4 26.5 Q 149.5 23.6 153.95 21.2 A 19.438 19.438 0 0 1 161.709 18.859 A 18.925 18.925 0 0 1 163.2 18.8 A 24.06 24.06 0 0 1 165.999 18.954 Q 167.946 19.183 169.5 19.75 Q 172.1 20.7 173.7 22.9 A 11.329 11.329 0 0 1 174.965 25.182 Q 175.617 26.732 176 28.7 A 33.28 33.28 0 0 1 176.427 31.653 Q 176.589 33.24 176.655 35.074 A 73.181 73.181 0 0 1 176.7 37.7 L 176.7 70.1 L 168.7 70.1 L 168.7 38.6 Q 168.7 35.8 168.613 33.565 A 89.109 89.109 0 0 0 168.6 33.25 A 17.501 17.501 0 0 0 168.436 31.456 Q 168.307 30.575 168.086 29.821 A 9.328 9.328 0 0 0 167.9 29.25 A 5.399 5.399 0 0 0 167.019 27.67 A 4.817 4.817 0 0 0 165.95 26.7 A 4.668 4.668 0 0 0 164.692 26.126 Q 164.088 25.945 163.357 25.865 A 11.519 11.519 0 0 0 162.1 25.8 A 14.54 14.54 0 0 0 158.429 26.255 A 13.387 13.387 0 0 0 157.75 26.45 A 22.035 22.035 0 0 0 155.263 27.416 A 27.767 27.767 0 0 0 153.5 28.3 A 18.952 18.952 0 0 0 152.25 29.057 Q 150.173 30.411 146.775 33.14 A 156.596 156.596 0 0 0 146.7 33.2 L 146.7 70.1 L 138.7 70.1 L 138.7 38.6 Q 138.7 35.8 138.613 33.565 A 89.109 89.109 0 0 0 138.6 33.25 A 17.501 17.501 0 0 0 138.436 31.456 Q 138.307 30.575 138.086 29.821 A 9.328 9.328 0 0 0 137.9 29.25 A 5.399 5.399 0 0 0 137.019 27.67 A 4.817 4.817 0 0 0 135.95 26.7 A 4.668 4.668 0 0 0 134.692 26.126 Q 134.088 25.945 133.357 25.865 A 11.519 11.519 0 0 0 132.1 25.8 A 13.652 13.652 0 0 0 128.623 26.268 A 17.256 17.256 0 0 0 126.7 26.9 Q 123.9 28 121.4 29.5 A 59.584 59.584 0 0 0 118.279 31.514 A 73.672 73.672 0 0 0 116.2 33 L 116.2 70.1 L 108.2 70.1 Z" id="2" vector-effect="non-scaling-stroke"/><path d="M 190.9 70.1 L 190.9 27.9 A 31.366 31.366 0 0 0 190.869 26.588 Q 190.78 24.486 190.437 21.063 A 201.652 201.652 0 0 0 190.4 20.7 L 197.8 19.7 L 198.6 27 L 198.7 27 Q 200.5 24.7 202.2 23 A 24.654 24.654 0 0 1 205.062 20.535 A 22.19 22.19 0 0 1 205.75 20.05 Q 207.271 19.023 208.69 18.84 A 4.768 4.768 0 0 1 209.3 18.8 A 15.388 15.388 0 0 1 209.814 18.787 Q 212.039 18.765 215.7 19.3 L 213.9 27 Q 210.777 26.432 209.445 26.492 A 4.491 4.491 0 0 0 209.3 26.5 A 4.199 4.199 0 0 0 207.718 26.829 Q 207.122 27.07 206.503 27.49 A 9.67 9.67 0 0 0 205.7 28.1 A 23.326 23.326 0 0 0 203.131 30.613 A 20.623 20.623 0 0 0 202.4 31.5 A 40.292 40.292 0 0 0 200.216 34.445 A 49.861 49.861 0 0 0 198.9 36.5 L 198.9 70.1 L 190.9 70.1 Z" id="3" vector-effect="non-scaling-stroke"/><path d="M 252.7 70.9 L 251.7 65.4 A 86.116 86.116 0 0 1 247.231 67.804 Q 245.024 68.904 242.982 69.737 A 53.52 53.52 0 0 1 242.95 69.75 A 22.664 22.664 0 0 1 235.22 71.381 A 26.19 26.19 0 0 1 234.2 71.4 A 22.374 22.374 0 0 1 229.829 70.999 Q 226.111 70.258 223.55 68.15 Q 220.357 65.523 219.745 60.118 A 24.194 24.194 0 0 1 219.6 57.4 A 12.826 12.826 0 0 1 220.132 53.644 A 10.952 10.952 0 0 1 221.6 50.6 A 16.479 16.479 0 0 1 226.154 46.188 A 19.23 19.23 0 0 1 226.85 45.75 Q 230.1 43.8 234.2 42.7 Q 238.3 41.6 242.6 41.3 Q 244.4 41.1 247.3 40.95 Q 250.2 40.8 251.8 40.7 A 104.919 104.919 0 0 0 251.756 37.584 Q 251.712 36.12 251.626 34.819 A 61.491 61.491 0 0 0 251.6 34.45 Q 251.4 31.7 250.4 29.75 Q 249.4 27.8 247.45 26.8 A 7.518 7.518 0 0 0 245.914 26.231 Q 244.367 25.828 242.197 25.802 A 25.187 25.187 0 0 0 241.9 25.8 Q 239 25.8 236.3 26.15 A 100.047 100.047 0 0 0 233.901 26.489 Q 232.776 26.663 231.782 26.847 A 58.184 58.184 0 0 0 231.5 26.9 A 64.957 64.957 0 0 0 228.814 27.494 A 51.47 51.47 0 0 0 226.9 28 L 225.3 21.1 A 79.06 79.06 0 0 1 228.581 20.389 A 96.703 96.703 0 0 1 230.7 20 A 51.632 51.632 0 0 1 233.041 19.592 Q 234.644 19.347 236.5 19.15 A 62.528 62.528 0 0 1 240.82 18.85 A 76.587 76.587 0 0 1 243.6 18.8 A 28.398 28.398 0 0 1 246.876 18.978 Q 249.783 19.316 251.85 20.3 Q 255 21.8 256.75 24.35 A 15.324 15.324 0 0 1 259.018 29.547 A 17.719 17.719 0 0 1 259.15 30.15 A 34.06 34.06 0 0 1 259.777 35.663 A 38.815 38.815 0 0 1 259.8 37 L 259.8 61 Q 259.8 62.4 259.85 63.95 Q 259.9 65.5 260.05 67 A 124.898 124.898 0 0 0 260.351 69.702 A 138.048 138.048 0 0 0 260.4 70.1 L 252.7 70.9 Z M 251.8 58.4 L 251.8 47 Q 249.8 47.1 248 47.2 Q 246.2 47.3 244.45 47.45 Q 242.728 47.598 241.345 47.794 A 40.889 40.889 0 0 0 241.3 47.8 A 45.095 45.095 0 0 0 237.771 48.374 Q 234.35 49.081 232.257 50.216 A 9.355 9.355 0 0 0 231.1 50.95 Q 228.1 53.2 228.1 57.4 Q 228.1 60.9 230.25 62.65 Q 232.332 64.345 235.679 64.399 A 13.746 13.746 0 0 0 235.9 64.4 Q 240.7 64.4 244.45 62.75 Q 248.2 61.1 251.8 58.4 Z" id="4" vector-effect="non-scaling-stroke"/><path d="M 274 70.1 L 274 29.8 A 12.017 12.017 0 0 0 274.011 29.475 Q 274.057 27.2 273.5 20.7 L 280.9 19.7 L 282 26.1 A 60.686 60.686 0 0 1 286.472 23.382 A 53.411 53.411 0 0 1 287.95 22.6 Q 290.9 21.1 294 19.95 A 18.848 18.848 0 0 1 297.424 19.02 A 15.491 15.491 0 0 1 300 18.8 A 29.313 29.313 0 0 1 302.885 18.934 Q 305.131 19.157 306.85 19.75 Q 309.6 20.7 311.3 22.9 A 11.265 11.265 0 0 1 312.685 25.27 Q 313.185 26.408 313.534 27.769 A 20.876 20.876 0 0 1 313.75 28.7 A 31.206 31.206 0 0 1 314.207 31.653 Q 314.381 33.24 314.452 35.074 A 68.308 68.308 0 0 1 314.5 37.7 L 314.5 70.1 L 306.5 70.1 L 306.5 38.6 Q 306.5 35.8 306.413 33.565 A 89.109 89.109 0 0 0 306.4 33.25 Q 306.3 30.9 305.55 29.25 Q 304.8 27.6 303.25 26.7 Q 302.154 26.064 300.433 25.878 A 14.271 14.271 0 0 0 298.9 25.8 A 13.31 13.31 0 0 0 295.793 26.185 A 17.685 17.685 0 0 0 293.4 26.95 Q 290.5 28.1 287.7 29.6 A 57.297 57.297 0 0 0 283.623 32.015 A 66.946 66.946 0 0 0 282 33.1 L 282 70.1 L 274 70.1 Z" id="5" vector-effect="non-scaling-stroke"/><path d="M 353.1 70.1 L 353.1 1.9 L 361.5 1.9 L 361.5 31.4 L 396 31.4 L 396 1.9 L 404.4 1.9 L 404.4 70.1 L 396 70.1 L 396 38.9 L 361.5 38.9 L 361.5 70.1 L 353.1 70.1 Z" id="7" vector-effect="non-scaling-stroke"/><path d="M 450.6 70.9 L 450 64.6 L 449.8 64.6 Q 449.111 65.136 447.953 65.936 A 94.909 94.909 0 0 1 447.2 66.45 Q 445.5 67.6 443.3 68.7 A 28.945 28.945 0 0 1 440.082 70.064 A 34.637 34.637 0 0 1 438.45 70.6 Q 435.8 71.4 433.1 71.4 A 24.06 24.06 0 0 1 430.301 71.247 Q 428.354 71.018 426.8 70.45 Q 424.2 69.5 422.6 67.3 A 11.329 11.329 0 0 1 421.335 65.019 Q 420.683 63.469 420.3 61.5 A 33.28 33.28 0 0 1 419.873 58.547 Q 419.711 56.961 419.645 55.126 A 73.181 73.181 0 0 1 419.6 52.5 L 419.6 19.8 L 427.6 19.8 L 427.6 51.3 A 155.009 155.009 0 0 0 427.623 54.066 Q 427.648 55.463 427.7 56.7 A 18.338 18.338 0 0 0 427.864 58.535 Q 428.044 59.791 428.4 60.8 A 5.732 5.732 0 0 0 429.249 62.395 A 5.02 5.02 0 0 0 430.35 63.45 A 4.576 4.576 0 0 0 431.637 64.065 Q 432.244 64.254 432.979 64.336 A 10.981 10.981 0 0 0 434.2 64.4 A 13.652 13.652 0 0 0 437.677 63.932 A 17.256 17.256 0 0 0 439.6 63.3 A 34.853 34.853 0 0 0 443.137 61.687 A 29.55 29.55 0 0 0 444.7 60.8 Q 447.4 59.2 450 57.2 L 450 19.8 L 458 19.8 L 458 63.6 Q 458.1 67.2 458.5 70.1 L 450.6 70.9 Z" id="8" vector-effect="non-scaling-stroke"/><path d="M 501.1 20.9 L 499.7 28 A 61.342 61.342 0 0 0 496.325 27.055 Q 494.129 26.51 492.25 26.25 Q 489 25.8 486.3 25.8 A 11.899 11.899 0 0 0 483.599 26.092 A 8.657 8.657 0 0 0 480.45 27.5 Q 478.1 29.2 478.1 31.9 Q 478.2 34.3 480.2 36 A 22.447 22.447 0 0 0 483.181 38.127 A 27.219 27.219 0 0 0 484.85 39.05 Q 487.5 40.4 490.75 42 Q 494 43.6 496.85 45.6 Q 499.7 47.6 501.5 50.4 Q 503.3 53.2 503.4 57.1 Q 503.313 60.74 501.987 63.291 A 10.028 10.028 0 0 1 501.55 64.05 Q 499.8 66.8 497.05 68.45 Q 494.3 70.1 491.1 70.75 A 33.467 33.467 0 0 1 487.627 71.276 A 26.56 26.56 0 0 1 485.1 71.4 Q 481.5 71.4 477.65 71 A 41.182 41.182 0 0 1 473.145 70.266 A 53.204 53.204 0 0 1 469.4 69.3 L 470.9 62.1 A 88.482 88.482 0 0 0 475.072 63.11 Q 477.06 63.538 478.861 63.814 A 53.872 53.872 0 0 0 479.1 63.85 A 65.245 65.245 0 0 0 481.49 64.163 Q 482.558 64.282 483.485 64.341 A 27.049 27.049 0 0 0 485.2 64.4 Q 487 64.4 488.75 64 A 13.495 13.495 0 0 0 490.795 63.366 A 11.259 11.259 0 0 0 491.9 62.85 A 6.672 6.672 0 0 0 493.549 61.623 A 6.067 6.067 0 0 0 494.15 60.9 Q 495 59.7 495 58.2 Q 494.9 55.4 493.1 53.45 A 15.531 15.531 0 0 0 490.891 51.491 A 21.112 21.112 0 0 0 488.45 49.95 Q 485.6 48.4 482.35 46.85 Q 479.1 45.3 476.25 43.25 Q 473.4 41.2 471.5 38.35 A 11.008 11.008 0 0 1 469.896 34.404 A 15.49 15.49 0 0 1 469.6 31.3 A 9.89 9.89 0 0 1 470.232 27.733 A 9.219 9.219 0 0 1 471.15 25.95 Q 472.7 23.6 475.15 22.05 Q 477.6 20.5 480.55 19.65 A 21.574 21.574 0 0 1 484.669 18.871 A 18.941 18.941 0 0 1 486.3 18.8 A 44.505 44.505 0 0 1 489.324 18.909 Q 490.972 19.022 492.8 19.25 A 51.8 51.8 0 0 1 495.655 19.693 Q 497.222 19.979 498.957 20.379 A 94.417 94.417 0 0 1 501.1 20.9 Z" id="9" vector-effect="non-scaling-stroke"/><path d="M 542.8 20.9 L 541.4 28 A 61.342 61.342 0 0 0 538.025 27.055 Q 535.829 26.51 533.95 26.25 Q 530.7 25.8 528 25.8 A 11.899 11.899 0 0 0 525.299 26.092 A 8.657 8.657 0 0 0 522.15 27.5 Q 519.8 29.2 519.8 31.9 Q 519.9 34.3 521.9 36 A 22.447 22.447 0 0 0 524.881 38.127 A 27.219 27.219 0 0 0 526.55 39.05 Q 529.2 40.4 532.45 42 Q 535.7 43.6 538.55 45.6 Q 541.4 47.6 543.2 50.4 Q 545 53.2 545.1 57.1 Q 545.013 60.74 543.687 63.291 A 10.028 10.028 0 0 1 543.25 64.05 Q 541.5 66.8 538.75 68.45 Q 536 70.1 532.8 70.75 A 33.467 33.467 0 0 1 529.327 71.276 A 26.56 26.56 0 0 1 526.8 71.4 Q 523.2 71.4 519.35 71 A 41.182 41.182 0 0 1 514.845 70.266 A 53.204 53.204 0 0 1 511.1 69.3 L 512.6 62.1 A 88.482 88.482 0 0 0 516.772 63.11 Q 518.76 63.538 520.561 63.814 A 53.872 53.872 0 0 0 520.8 63.85 A 65.245 65.245 0 0 0 523.19 64.163 Q 524.258 64.282 525.185 64.341 A 27.049 27.049 0 0 0 526.9 64.4 Q 528.7 64.4 530.45 64 A 13.495 13.495 0 0 0 532.495 63.366 A 11.259 11.259 0 0 0 533.6 62.85 A 6.672 6.672 0 0 0 535.249 61.623 A 6.067 6.067 0 0 0 535.85 60.9 Q 536.7 59.7 536.7 58.2 Q 536.6 55.4 534.8 53.45 A 15.531 15.531 0 0 0 532.591 51.491 A 21.112 21.112 0 0 0 530.15 49.95 Q 527.3 48.4 524.05 46.85 Q 520.8 45.3 517.95 43.25 Q 515.1 41.2 513.2 38.35 A 11.008 11.008 0 0 1 511.596 34.404 A 15.49 15.49 0 0 1 511.3 31.3 A 9.89 9.89 0 0 1 511.932 27.733 A 9.219 9.219 0 0 1 512.85 25.95 Q 514.4 23.6 516.85 22.05 Q 519.3 20.5 522.25 19.65 A 21.574 21.574 0 0 1 526.369 18.871 A 18.941 18.941 0 0 1 528 18.8 A 44.505 44.505 0 0 1 531.024 18.909 Q 532.672 19.022 534.5 19.25 A 51.8 51.8 0 0 1 537.355 19.693 Q 538.922 19.979 540.657 20.379 A 94.417 94.417 0 0 1 542.8 20.9 Z" id="10" vector-effect="non-scaling-stroke"/><path d="M 584.8 70.9 L 583.8 65.4 A 86.116 86.116 0 0 1 579.331 67.804 Q 577.124 68.904 575.082 69.737 A 53.52 53.52 0 0 1 575.05 69.75 A 22.664 22.664 0 0 1 567.32 71.381 A 26.19 26.19 0 0 1 566.3 71.4 A 22.374 22.374 0 0 1 561.929 70.999 Q 558.211 70.258 555.65 68.15 Q 552.457 65.523 551.845 60.118 A 24.194 24.194 0 0 1 551.7 57.4 A 12.826 12.826 0 0 1 552.232 53.644 A 10.952 10.952 0 0 1 553.7 50.6 A 16.479 16.479 0 0 1 558.254 46.188 A 19.23 19.23 0 0 1 558.95 45.75 Q 562.2 43.8 566.3 42.7 Q 570.4 41.6 574.7 41.3 Q 576.5 41.1 579.4 40.95 Q 582.3 40.8 583.9 40.7 A 104.919 104.919 0 0 0 583.856 37.584 Q 583.812 36.12 583.726 34.819 A 61.491 61.491 0 0 0 583.7 34.45 Q 583.5 31.7 582.5 29.75 Q 581.5 27.8 579.55 26.8 A 7.518 7.518 0 0 0 578.014 26.231 Q 576.467 25.828 574.297 25.802 A 25.187 25.187 0 0 0 574 25.8 Q 571.1 25.8 568.4 26.15 A 100.047 100.047 0 0 0 566.001 26.489 Q 564.876 26.663 563.882 26.847 A 58.184 58.184 0 0 0 563.6 26.9 A 64.957 64.957 0 0 0 560.914 27.494 A 51.47 51.47 0 0 0 559 28 L 557.4 21.1 A 79.06 79.06 0 0 1 560.681 20.389 A 96.703 96.703 0 0 1 562.8 20 A 51.632 51.632 0 0 1 565.141 19.592 Q 566.744 19.347 568.6 19.15 A 62.528 62.528 0 0 1 572.92 18.85 A 76.587 76.587 0 0 1 575.7 18.8 A 28.398 28.398 0 0 1 578.976 18.978 Q 581.883 19.316 583.95 20.3 Q 587.1 21.8 588.85 24.35 A 15.324 15.324 0 0 1 591.118 29.547 A 17.719 17.719 0 0 1 591.25 30.15 A 34.06 34.06 0 0 1 591.877 35.663 A 38.815 38.815 0 0 1 591.9 37 L 591.9 61 Q 591.9 62.4 591.95 63.95 Q 592 65.5 592.15 67 A 124.898 124.898 0 0 0 592.451 69.702 A 138.048 138.048 0 0 0 592.5 70.1 L 584.8 70.9 Z M 583.9 58.4 L 583.9 47 Q 581.9 47.1 580.1 47.2 Q 578.3 47.3 576.55 47.45 Q 574.828 47.598 573.445 47.794 A 40.889 40.889 0 0 0 573.4 47.8 A 45.095 45.095 0 0 0 569.871 48.374 Q 566.45 49.081 564.357 50.216 A 9.355 9.355 0 0 0 563.2 50.95 Q 560.2 53.2 560.2 57.4 Q 560.2 60.9 562.35 62.65 Q 564.432 64.345 567.779 64.399 A 13.746 13.746 0 0 0 568 64.4 Q 572.8 64.4 576.55 62.75 Q 580.3 61.1 583.9 58.4 Z" id="11" vector-effect="non-scaling-stroke"/><path d="M 606 70.1 L 606 19.7 L 614 18.8 L 614 70.1 L 606 70.1 Z M 605.081 3.303 A 5.612 5.612 0 0 0 604.7 5.4 A 6.774 6.774 0 0 0 604.7 5.472 A 5.214 5.214 0 0 0 606.25 9.25 A 5.175 5.175 0 0 0 608.003 10.419 A 5.612 5.612 0 0 0 610.1 10.8 A 7.326 7.326 0 0 0 610.249 10.799 A 5.665 5.665 0 0 0 614.15 9.25 A 5.218 5.218 0 0 0 615.31 7.684 A 5.252 5.252 0 0 0 615.8 5.4 A 6.293 6.293 0 0 0 615.797 5.222 A 5.047 5.047 0 0 0 614.15 1.55 Q 612.5 0 610.1 0 A 6.774 6.774 0 0 0 610.028 0.001 A 5.214 5.214 0 0 0 606.25 1.55 A 5.175 5.175 0 0 0 605.081 3.303 Z" id="12" vector-effect="non-scaling-stroke"/><path d="M 628.5 70.1 L 628.5 29.8 A 12.017 12.017 0 0 0 628.511 29.475 Q 628.557 27.2 628 20.7 L 635.4 19.7 L 636.5 26.1 A 60.686 60.686 0 0 1 640.972 23.382 A 53.411 53.411 0 0 1 642.45 22.6 Q 645.4 21.1 648.5 19.95 A 18.848 18.848 0 0 1 651.924 19.02 A 15.491 15.491 0 0 1 654.5 18.8 A 29.313 29.313 0 0 1 657.385 18.934 Q 659.631 19.157 661.35 19.75 Q 664.1 20.7 665.8 22.9 A 11.265 11.265 0 0 1 667.185 25.27 Q 667.685 26.408 668.034 27.769 A 20.876 20.876 0 0 1 668.25 28.7 A 31.206 31.206 0 0 1 668.707 31.653 Q 668.881 33.24 668.952 35.074 A 68.308 68.308 0 0 1 669 37.7 L 669 70.1 L 661 70.1 L 661 38.6 Q 661 35.8 660.913 33.565 A 89.109 89.109 0 0 0 660.9 33.25 Q 660.8 30.9 660.05 29.25 Q 659.3 27.6 657.75 26.7 Q 656.654 26.064 654.933 25.878 A 14.271 14.271 0 0 0 653.4 25.8 A 13.31 13.31 0 0 0 650.293 26.185 A 17.685 17.685 0 0 0 647.9 26.95 Q 645 28.1 642.2 29.6 A 57.297 57.297 0 0 0 638.123 32.015 A 66.946 66.946 0 0 0 636.5 33.1 L 636.5 70.1 L 628.5 70.1 Z" id="13" vector-effect="non-scaling-stroke"/></g></svg>`;

const SVG_NS = "http://www.w3.org/2000/svg";
const TWO_PI = 2 * Math.PI;

const NUM_PATH_SAMPLES = 400;
const MAX_FOURIER_TERMS = 80; 

interface Point { x: number; y: number }
interface FourierCoeff { freq: number; amp: number; phase: number }
interface LetterShape {
  fourier: FourierCoeff[];
  path: Point[];
}

export function FourierName() {
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const shapesRef = useRef<LetterShape[]>([]);
  const timeRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const isSetupCompleteRef = useRef(false);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  const cssCanvasSizeRef = useRef({ width: 0, height: 0 });
  const themeColorsRef = useRef({ stroke: '#FFFFFF', fill: 'rgba(255, 255, 255, 0.8)' });

  const dft = (points: Point[]): FourierCoeff[] => {
    const N = points.length;
    if (N === 0) return [];
    const coeffs: FourierCoeff[] = [];
    
    // Compute the Discrete Fourier Transform for complex input z[n] = x[n] + i * y[n]
    // This allows us to represent any closed loop as a sum of rotating circles (epicycles)
    for (let k = 0; k < N; k++) {
      let re = 0;
      let im = 0;
      for (let n = 0; n < N; n++) {
        const phi = (TWO_PI * k * n) / N;
        // X[k] = sum( z[n] * exp(-i * phi) )
        // Using Euler's formula: exp(-i * phi) = cos(phi) - i * sin(phi)
        // (x + iy) * (cos - i * sin) = (x*cos + y*sin) + i(y*cos - x*sin)
        re += points[n].x * Math.cos(phi) + points[n].y * Math.sin(phi);
        im += points[n].y * Math.cos(phi) - points[n].x * Math.sin(phi);
      }
      
      re /= N;
      im /= N;

      const freq = k > N / 2 ? k - N : k; // Center frequencies
      const amp = Math.sqrt(re * re + im * im);
      const phase = Math.atan2(im, re);
      coeffs.push({ freq, amp, phase });
    }
    return coeffs;
  };

  /**
   * Samples points from an SVG path element at regular intervals.
   */
  const samplePointsFromPath = (pathElement: SVGPathElement, numSamples: number): Point[] => {
    const totalLength = pathElement.getTotalLength();
    if (totalLength === 0) return [];
    const points: Point[] = [];
    for (let i = 0; i < numSamples; i++) {
      const point = pathElement.getPointAtLength((i / numSamples) * totalLength);
      points.push({ x: point.x, y: point.y });
    }
    return points;
  };

  /**
   * Calculates the position of the "pen" at a given time t by summing the Fourier series.
   */
  const calculateFourierPoint = (
    time: number,
    fourier: FourierCoeff[]
  ): Point => {
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < fourier.length; i++) {
      const { freq, amp, phase } = fourier[i];
      const theta = freq * time + phase;
      x += amp * Math.cos(theta);
      y += amp * Math.sin(theta);
    }
    
    return { x, y };
  };

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvasContextRef.current;
    const { width: cssWidth, height: cssHeight } = cssCanvasSizeRef.current;

    if (!canvas || !ctx || cssWidth === 0 || cssHeight === 0) return;

    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const shapes = shapesRef.current;
    if (shapes.length === 0) return;

    // Draw all paths
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 2;

    shapes.forEach(shape => {
       if (shape.path.length < 2) return;
       
       ctx.strokeStyle = themeColorsRef.current.stroke;
       ctx.beginPath();
       ctx.moveTo(shape.path[0].x, shape.path[0].y);
       
       for (let i = 1; i < shape.path.length; i++) {
         ctx.lineTo(shape.path[i].x, shape.path[i].y);
       }
       ctx.stroke();
       
       // Draw a small "pen" tip at the end
       const lastPoint = shape.path[shape.path.length - 1];
       ctx.fillStyle = themeColorsRef.current.fill;
       ctx.beginPath();
       ctx.arc(lastPoint.x, lastPoint.y, 2, 0, TWO_PI);
       ctx.fill();
    });
  }, []);

  const animate = useCallback(() => {
    if (!isSetupCompleteRef.current) {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      return;
    }

    const shapes = shapesRef.current;
    if (shapes.length === 0) return;

    // Iterate through all shapes simultaneously
    shapes.forEach(shape => {
      // Calculate current point for this shape
      const point = calculateFourierPoint(timeRef.current, shape.fourier);
      
      // Add to path
      shape.path.push(point);
    });

    drawFrame();

    // Increment time
    const dt = TWO_PI / 250; 
    
    if (timeRef.current < TWO_PI) {
      timeRef.current += dt;
      animationFrameIdRef.current = requestAnimationFrame(animate);
    } else {
      // Animation complete
      animationFrameIdRef.current = null;
    }
  }, [drawFrame]);

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      themeColorsRef.current = { stroke: '#FFFFFF', fill: 'rgba(255, 255, 255, 0.8)' };
    } else {
      themeColorsRef.current = { stroke: '#2563eb', fill: 'rgba(37, 99, 235, 0.8)' };
    }
    
    // If animation is finished (not running), redraw with new colors
    if (!animationFrameIdRef.current && isSetupCompleteRef.current) {
        requestAnimationFrame(drawFrame);
    }
  }, [resolvedTheme, drawFrame]);

  const setup = useCallback(async () => {
    setIsLoading(true); setErrorMessage(null); isSetupCompleteRef.current = false;
    if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
        requestAnimationFrame(setup);
        return;
    }
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    cssCanvasSizeRef.current = { width: rect.width, height: rect.height };

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    canvasContextRef.current = ctx;

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(SVG_NAME_DATA, "image/svg+xml");
    const pathElements = Array.from(svgDoc.querySelectorAll('path'));

    const allShapesPoints: Point[][] = [];
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

    pathElements.forEach(pathEl => {
       const d = pathEl.getAttribute('d');
       if (!d) return;
       const tempPath = document.createElementNS(SVG_NS, "path");
       tempPath.setAttribute("d", d);
       const points = samplePointsFromPath(tempPath, NUM_PATH_SAMPLES);
       if (points.length > 0) {
           points.forEach(p => {
               minX = Math.min(minX, p.x);
               maxX = Math.max(maxX, p.x);
               minY = Math.min(minY, p.y);
               maxY = Math.max(maxY, p.y);
           });
           allShapesPoints.push(points);
       }
    });

    if (allShapesPoints.length === 0) {
        setErrorMessage("No paths found");
        setIsLoading(false);
        return;
    }

    const { width: cWidth, height: cHeight } = cssCanvasSizeRef.current;
    const padding = 15;
    const availWidth = cWidth - padding * 2;
    const availHeight = cHeight - padding * 2;
    
    const svgWidth = maxX - minX;
    const svgHeight = maxY - minY;
    
    const scaleX = availWidth / svgWidth;
    const scaleY = availHeight / svgHeight;
    const scale = Math.min(scaleX, scaleY);
    
    const scaledWidth = svgWidth * scale;
    const scaledHeight = svgHeight * scale;
    const offsetX = padding + (availWidth - scaledWidth) / 2 - minX * scale;
    const offsetY = padding + (availHeight - scaledHeight) / 2 - minY * scale;

    const newShapes: LetterShape[] = [];

    allShapesPoints.forEach(originalPoints => {
        const scaledPoints = originalPoints.map(p => ({
            x: p.x * scale + offsetX,
            y: p.y * scale + offsetY
        }));

        let fourier = dft(scaledPoints);
        
        fourier.sort((a, b) => b.amp - a.amp);
        fourier = fourier.slice(0, MAX_FOURIER_TERMS);
        
        newShapes.push({
            fourier,
            path: []
        });
    });

    shapesRef.current = newShapes;
    timeRef.current = 0;
    isSetupCompleteRef.current = true;
    setIsLoading(false);
    animate();

  }, [animate]);

  useEffect(() => {
    setup();
    window.addEventListener('resize', setup);
    return () => {
        window.removeEventListener('resize', setup);
        if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [setup]);

  return (
    <div className="w-full h-full relative">
      {isLoading && <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">Loading...</div>}
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
