import type { IAgent, AgentContext, AgentResult, FusionSession } from '../core/types'

/**
 * PlannerAgent — specializes in strategy, roadmaps,
 * task decomposition, and project planning.
 */
export class PlannerAgent implements IAgent {
  name = 'PlannerAgent'
  role = 'Strategy, roadmaps, and task breakdown'
  version = '1.0.0'

  async execute(task: string, context: AgentContext): Promise<AgentResult> {
    const plan = await this.plan(task, context)
    return {
      output: plan,
      confidence: 0.9,
      actions: ['assign-tasks', 'set-milestones'],
    }
  }

  async onFuse(session: FusionSession): Promise<void> {
    console.log(`[PlannerAgent] Joined session ${session.id}`)
  }

  private async plan(task: string, _ctx: AgentContext): Promise<string> {
    return `[PlannerAgent] Strategic plan for: "${task}"\n` +
      `Phase 1: Research & Discovery\n` +
      `Phase 2: Design & Architecture\n` +
      `Phase 3: Implementation\n` +
      `Phase 4: Review & Delivery`
  }
}
