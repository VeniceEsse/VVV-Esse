/**
 * Example: Content Creation Pipeline
 *
 * Fuses ResearchAgent + WriterAgent + CriticAgent
 * to produce a high-quality research-backed article.
 *
 * Run: npx ts-node examples/content-creation.ts
 */

import { ESSE, ResearchAgent, WriterAgent, CriticAgent } from '../src'

async function main() {
  console.log('⚡ ESSE — Content Creation Pipeline\n')

  const esse = new ESSE({
    mode: 'capability-assimilation',
    sharedMemory: true,
    debug: true,
  })

  await esse.fuse([
    new ResearchAgent(),
    new WriterAgent(),
    new CriticAgent(),
  ])

  const result = await esse.execute(
    'Write a comprehensive article about the future of AI agents in 2025'
  )

  console.log('\n📄 Final Output:\n')
  console.log(result)

  const session = esse.getSession()
  console.log(`\n✅ Session ${session?.id} completed in mode: ${session?.mode}`)
  console.log(`📈 IQ Boost: +${session?.iqBoost}%`)

  await esse.defuse()
}

main().catch(console.error)
