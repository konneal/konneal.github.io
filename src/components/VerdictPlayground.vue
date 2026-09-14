<script setup lang="ts">
import { computed, ref } from 'vue'

// The constraint from the R 60 machine model used in the reference
// deployment, evaluated here in the browser — the same deterministic
// check the service attaches to answers as data.
const LIMIT_FACTOR = 0.8

const eMax = ref(30000)
const dMax = ref(26000)

const presets = [
  { label: '26 000 / 30 000', e: 30000, d: 26000 },
  { label: '24 000 / 30 000', e: 30000, d: 24000 },
  { label: '30 000 / 30 000', e: 30000, d: 30000 },
]

function apply(p: { e: number; d: number }) {
  eMax.value = p.e
  dMax.value = p.d
}

const fmt = (n: number) =>
  Number.isFinite(n) ? n.toLocaleString('en-US').replace(/,/g, ' ') : '—'

const validInput = computed(() => eMax.value > 0 && dMax.value >= 0)

const limit = computed(() => LIMIT_FACTOR * eMax.value)
const excess = computed(() => dMax.value - limit.value)
const verdict = computed<'valid' | 'invalid' | 'void'>(() => {
  if (!validInput.value) return 'void'
  return dMax.value <= limit.value ? 'valid' : 'invalid'
})

const ratio = computed(() =>
  validInput.value && eMax.value > 0 ? (dMax.value / eMax.value).toFixed(3) : '—',
)
</script>

<template>
  <div class="playground">
    <div class="constraint">
      <span class="lab">Constraint · R 60 model</span>
      <code>D_max ≤ 0.8 · E_max</code>
    </div>

    <div class="inputs">
      <label>
        <span>E<sub>max</sub> — rated capacity (v)</span>
        <input v-model.number="eMax" inputmode="numeric" type="number" min="1" step="500" />
      </label>
      <label>
        <span>D<sub>max</sub> — test load (v)</span>
        <input v-model.number="dMax" inputmode="numeric" type="number" min="0" step="500" />
      </label>
    </div>

    <div class="presets">
      <span class="lab">Presets</span>
      <div class="preset-row">
        <button v-for="p in presets" :key="p.label" type="button" @click="apply(p)">
          {{ p.label }}
        </button>
      </div>
    </div>

    <div class="computation" aria-live="polite">
      <div class="lines">
        <p><span>0.8 × E<sub>max</sub> = {{ fmt(limit) }} v</span></p>
        <p><span>D<sub>max</sub> / E<sub>max</sub> = {{ ratio }}</span></p>
        <p v-if="verdict === 'invalid'">exceeds the limit by {{ fmt(excess) }} v</p>
      </div>
      <p class="verdict" :class="verdict">
        <template v-if="verdict === 'valid'">VALID</template>
        <template v-else-if="verdict === 'invalid'">INVALID</template>
        <template v-else>VOID — E<sub>max</sub> must be positive</template>
      </p>
    </div>

    <p class="note">
      This constraint comes from a publication model in the reference deployment’s corpus, and it is computed here in
      your browser — the same deterministic evaluation the service attaches to answers as data, with the standard’s
      own word for the violation. Hypothetical values are evaluated the same way as real ones.
    </p>
  </div>
</template>

<style scoped>
.playground {
  color: var(--color-ramp-hi);
}
.lab {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-ramp-lo);
}
.constraint {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.6rem 1.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 0.9rem;
}
.constraint code {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: #fff;
}
.inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: 1.2rem;
  margin-top: 1.2rem;
}
.inputs label {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  font-size: 0.84rem;
  color: rgba(193, 202, 211, 0.85);
}
.inputs input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0;
}
.inputs input:focus-visible {
  outline: 2px solid var(--color-ramp-lo);
  outline-offset: 1px;
}
.presets {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.7rem;
}
.preset-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}
.preset-row button {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--color-ramp-hi);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  transition: border-color 0.15s ease, color 0.15s ease;
}
.preset-row button:hover {
  border-color: var(--color-ramp-lo);
  color: #fff;
}
.computation {
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 1.6rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  padding: 1rem 1.2rem;
}
.lines p {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.75;
  color: rgba(193, 202, 211, 0.9);
}
.verdict {
  font-family: var(--font-mono);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 0.45rem 0.9rem;
  border: 1px solid;
}
.verdict.valid {
  color: var(--color-ramp-lo);
  border-color: var(--color-ramp-lo);
  background: rgba(90, 148, 207, 0.12);
}
.verdict.invalid {
  color: #f2795f;
  border-color: #f2795f;
  background: rgba(242, 121, 95, 0.1);
}
.verdict.void {
  color: rgba(193, 202, 211, 0.8);
  border-color: rgba(193, 202, 211, 0.4);
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.04em;
}
.note {
  margin-top: 1.1rem;
  font-size: 0.8rem;
  line-height: 1.55;
  color: rgba(193, 202, 211, 0.65);
}
</style>
