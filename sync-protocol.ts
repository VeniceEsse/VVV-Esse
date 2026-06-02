/**
 * Example: Software Development Pipeline
 *
 * Fuses PlannerAgent + CoderAgent + TesterAgent in
 * Perfect Convergence mode for maximum output quality.
 *
 * Run: npx ts-node examples/software-dev.ts
 */

import { ESSE, PlannerAgent, CoderAgent, TesterAgent, CriticAgent } from '../src'

async function main() {
  console.log('⚡ ESSE — Software Development Pipeline\n')

  const esse = new ESSE({
    mode: 'perfect-convergence',
    sharedMemory: true,
    debug: true,
  })

  await esse.fuse([
    new PlannerAgent(),
    new CoderAgent(),
    new TesterAgent(),
    new CriticAgent(),
  ])

  const result = await esse.execute(
    'Build a secure REST API for user authentication with JWT and refresh tokens'
  )

  console.log('\n🚀 Unified Output:\n')
  console.log(result)

  await esse.defuse()
}

main().catch(console.error)
