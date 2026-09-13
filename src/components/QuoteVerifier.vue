<script setup lang="ts">
import { computed, ref } from 'vue'

// The answer contract's deterministic check, run for real in the browser:
// a quoted span must appear verbatim in a served passage, or the answer is
// withheld. The excerpt is illustrative.
const passage =
  'The load-cell family shall be designated by its maximum capacity E_max. The test load D_max used for creep testing shall not exceed 0.8 · E_max.'

const claims = [
  {
    id: 'a',
    claim: 'Creep testing may use a test load up to 0.8 · E_max.',
    quote: '0.8 · E_max',
  },
  {
    id: 'b',
    claim: 'Creep testing may use a test load up to 0.7 · E_max.',
    quote: '0.7 · E_max',
  },
] as const

const selected = ref<'a' | 'b'>('a')
const run = ref(0)

const activeClaim = computed(() => claims.find((c) => c.id === selected.value)!)

const norm = (s: string) => s.replace(/\s+/g, ' ').trim()

const found = computed(() => {
  void run.value
  const idx = norm(passage).indexOf(norm(activeClaim.value.quote))
  return idx === -1 ? null : idx
})

const segments = computed(() => {
  if (found.value === null) return [{ text: passage, mark: false }]
  const p = norm(passage)
  const start = found.value
  const end = start + norm(activeClaim.value.quote).length
  return [
    { text: p.slice(0, start), mark: false },
    { text: p.slice(start, end), mark: true },
    { text: p.slice(end), mark: false },
  ]
})

const verdict = computed(() => (found.value === null ? 'withheld' : 'served'))

function check() {
  run.value++
}
</script>

<template>
  <div class="verifier">
    <div class="block">
      <p class="lab">Passage · served excerpt (illustrative)</p>
      <p class="passage">
        <template v-for="(seg, i) in segments" :key="i">
          <mark v-if="seg.mark" class="hit">{{ seg.text }}</mark>
          <template v-else>{{ seg.text }}</template>
        </template>
      </p>
    </div>

    <div class="block">
      <p class="lab">Claims under the contract</p>
      <fieldset class="claims">
        <label v-for="c in claims" :key="c.id">
          <input v-model="selected" :value="c.id" name="quote-claim" type="radio" @change="check" />
          <span>{{ c.claim }}</span>
          <code class="quoted">“{{ c.quote }}”</code>
        </label>
      </fieldset>
    </div>

    <div class="run-row">
      <button type="button" @click="check">Run the contract check</button>
      <p class="result" :class="verdict" aria-live="polite">
        <template v-if="verdict === 'served'">quote found in passage — answer served</template>
        <template v-else>quote not found · correction requested · still unsupported — answer withheld</template>
      </p>
    </div>

    <p class="note">
      Both checks here are real substring containment, the same shape as the deterministic battery: the quoted span
      must appear verbatim in a served passage. Judged components in the service are labeled as judged — this one is
      mechanical.
    </p>
  </div>
</template>

<style scoped>
.verifier {
  --lab-c: var(--color-ink-faint);
}
.lab {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--lab-c);
}
.block + .block {
  margin-top: 1.3rem;
}
.passage {
  margin-top: 0.5rem;
  border: 1px solid var(--color-rule);
  background: #fbfcfe;
  padding: 0.9rem 1rem;
  font-family: var(--font-serif);
  font-size: 0.98rem;
  line-height: 1.65;
}
.hit {
  background: #dce6f5;
  color: inherit;
  padding: 0 0.12em;
}
.claims {
  border: 0;
  margin: 0.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.6rem;
}
.claims label {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid var(--color-rule);
  background: var(--color-surface);
  padding: 0.65rem 0.9rem;
  cursor: pointer;
  font-size: 0.9rem;
}
.claims label:has(input:checked) {
  border-color: var(--color-keyline);
}
.claims input {
  accent-color: var(--color-blue);
  width: 0.95rem;
  height: 0.95rem;
}
.quoted {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-blue);
  background: #eef1f7;
  padding: 0.12rem 0.4rem;
}
.run-row {
  margin-top: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem 1.2rem;
}
.run-row button {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-blue);
  background: var(--color-surface);
  border: 1px solid var(--color-rule);
  padding: 0.5rem 0.9rem;
  cursor: pointer;
  transition: border-color 0.15s ease;
}
.run-row button:hover {
  border-color: var(--color-keyline);
}
.result {
  font-family: var(--font-mono);
  font-size: 0.78rem;
}
.result.served {
  color: var(--color-blue);
}
.result.withheld {
  color: var(--color-signal);
}
.note {
  margin-top: 1.1rem;
  font-size: 0.8rem;
  line-height: 1.55;
  color: var(--color-ink-faint);
}
</style>
