/**
 * Example: Creative Brainstorming
 *
 * Uses Synchronization Link mode to get multiple
 * agent perspectives simultaneously, then merges them.
 *
 * Run: npx ts-node examples/brainstorming.ts
 */

import { ESSE, ResearchAgent, WriterAgent, PlannerAgent } from '../src'

async function main() {
  console.log('⚡ ESSE — Creative Brainstorming\n')

  const esse = new ESSE({
    mode: 'synchronization-link',
    sharedMemory: true,
    debug: true,
  })

  await esse.fuse([
    new ResearchAgent(),
    new WriterAgent(),
    new PlannerAgent(),
  ])

  const result = await esse.execute(
    'Generate innovative startup ideas in the AI + health space for 2025'
  )

  console.log('\n💡 Brainstorm Results:\n')
  console.log(result)

  await esse.defuse()
}

main().catch(console.error)

