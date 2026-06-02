import type { ESSEConfig } from './src/core/types'

/**
 * Default ESSE configuration.
 * Override per-instance in your code:
 *
 * const esse = new ESSE({ mode: 'perfect-convergence' })
 */
const config: ESSEConfig = {
  mode: 'capability-assimilation',
  maxAgents: 5,
  sharedMemory: true,
  provider: 'openai',
  model: 'gpt-4o',
  debug: false,
}

export default config
