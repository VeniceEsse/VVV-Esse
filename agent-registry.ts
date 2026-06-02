/**
 * ESSE — Existence Synchronization System Entity
 * Meta-agent orchestration framework
 *
 * @website http://vvvesse.xyz/
 * @x https://x.com/VeniceEsse
 */

export { ESSE } from './core/esse'
export { FusionEngine } from './core/fusion-engine'
export { SyncProtocol } from './sync/sync-protocol'
export { MemoryHub } from './memory/memory-hub'
export { ConflictResolver } from './core/conflict-resolver'
export { AgentRegistry } from './core/agent-registry'

// Built-in agents
export { ResearchAgent } from './agents/research-agent'
export { WriterAgent } from './agents/writer-agent'
export { CriticAgent } from './agents/critic-agent'
export { CoderAgent } from './agents/coder-agent'
export { PlannerAgent } from './agents/planner-agent'
export { TesterAgent } from './agents/tester-agent'

// Types
export type {
  IAgent,
  AgentContext,
  AgentResult,
  FusionMode,
  ESSEConfig,
  FusionSession,
  SyncMessage,
  MemoryEntry,
} from './core/types'
