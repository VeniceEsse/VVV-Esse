/**
 * Fusion Compatibility Tests
 * All agents must pass this before being merged into ESSE.
 */

import { describe, it, expect } from 'vitest'
import type { IAgent, AgentContext, FusionSession } from '../../src/core/types'
import { ResearchAgent } from '../../src/agents/research-agent'
import { WriterAgent } from '../../src/agents/writer-agent'
import { CriticAgent } from '../../src/agents/critic-agent'
import { CoderAgent } from '../../src/agents/coder-agent'
import { PlannerAgent } from '../../src/agents/planner-agent'
import { TesterAgent } from '../../src/agents/tester-agent'

const ALL_AGENTS: IAgent[] = [
  new ResearchAgent(),
  new WriterAgent(),
  new CriticAgent(),
  new CoderAgent(),
  new PlannerAgent(),
  new TesterAgent(),
]

const mockSession: FusionSession = {
  id: 'compat-test',
  mode: 'capability-assimilation',
  agents: [],
  startedAt: new Date(),
  iqBoost: 0,
  status: 'active',
}

const mockContext: AgentContext = {
  task: 'compatibility test',
  memory: [],
  messages: [],
  session: mockSession,
}

describe('Agent compatibility', () => {
  for (const agent of ALL_AGENTS) {
    describe(`${agent.name}`, () => {
      it('has a non-empty name', () => {
        expect(agent.name).toBeTruthy()
      })

      it('has a non-empty role', () => {
        expect(agent.role).toBeTruthy()
      })

      it('implements execute()', () => {
        expect(typeof agent.execute).toBe('function')
      })

      it('execute() returns a valid AgentResult', async () => {
        const result = await agent.execute('test task', mockContext)
        expect(result).toBeDefined()
        expect(typeof result.output).toBe('string')
        expect(result.output.length).toBeGreaterThan(0)
        if (result.confidence !== undefined) {
          expect(result.confidence).toBeGreaterThanOrEqual(0)
          expect(result.confidence).toBeLessThanOrEqual(1)
        }
      })

      it('onFuse() is callable if defined', async () => {
        if (agent.onFuse) {
          await expect(agent.onFuse(mockSession)).resolves.not.toThrow()
        }
      })
    })
  }
})
