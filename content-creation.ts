import { describe, it, expect, beforeEach } from 'vitest'
import { MemoryHub } from '../src/memory/memory-hub'

describe('MemoryHub', () => {
  let hub: MemoryHub

  beforeEach(() => {
    hub = new MemoryHub()
  })

  it('stores and retrieves entries', async () => {
    await hub.store({
      id: '1',
      agent: 'ResearchAgent',
      content: 'AGI timeline research findings',
      storedAt: new Date(),
    })
    const results = await hub.recall('AGI')
    expect(results).toHaveLength(1)
    expect(results[0].agent).toBe('ResearchAgent')
  })

  it('returns empty array for no matches', async () => {
    const results = await hub.recall('nonexistent topic xyz')
    expect(results).toHaveLength(0)
  })

  it('deletes an entry by id', async () => {
    await hub.store({ id: 'del-1', agent: 'A', content: 'hello', storedAt: new Date() })
    hub.delete('del-1')
    expect(hub.size()).toBe(0)
  })

  it('clears all entries', async () => {
    await hub.store({ id: '1', agent: 'A', content: 'foo', storedAt: new Date() })
    await hub.store({ id: '2', agent: 'B', content: 'bar', storedAt: new Date() })
    hub.clear()
    expect(hub.size()).toBe(0)
  })

  it('filters by agent', async () => {
    await hub.store({ id: '1', agent: 'AgentA', content: 'foo', storedAt: new Date() })
    await hub.store({ id: '2', agent: 'AgentB', content: 'bar', storedAt: new Date() })
    expect(hub.getAll('AgentA')).toHaveLength(1)
    expect(hub.getAll('AgentB')).toHaveLength(1)
    expect(hub.getAll()).toHaveLength(2)
  })
})
