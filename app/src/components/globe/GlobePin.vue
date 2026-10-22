<template>
  <div id="pins" class="pins"></div>
</template>

<style>
  /* ===== Pins ===== */
  .pins {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .pin {
    position: absolute;
    left: 0;
    top: 0;
  }
  .pin.off {
    visibility: hidden;
  }
  .pin-dot {
    position: absolute;
    left: -8px;
    top: -8px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 50%;
    background: var(--card);
    border: 3px solid var(--route);
  }
  .pin-label {
    position: absolute;
    left: 0;
    bottom: 14px;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 13px;
    padding: 7px 10px;
    border-radius: 999px;
    background: var(--card);
    border: 1px solid var(--line);
  }
</style>
