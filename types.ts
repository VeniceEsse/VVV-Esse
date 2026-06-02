import type { IAgent, AgentContext, AgentResult, FusionSession } from '../core/types'

/**
 * WriterAgent — specializes in content generation,
 * structured writing, and tone adaptation.
 */
export class WriterAgent implements IAgent {
  name = 'WriterAgent'
  role = 'Content generation and editing'
  version = '1.0.0'

  async execute(task: string, context: AgentContext): Promise<AgentResult> {
    const content = await this.write(task, context)
    return {
      output: content,
      confidence: 0.91,
      actions: ['review', 'refine-tone'],
    }
  }

  async onFuse(session: FusionSession): Promise<void> {
    console.log(`[WriterAgent] Joined session ${session.id}`)
  }

  private async write(task: string, ctx: AgentContext): Promise<string> {
    const hasResearch = ctx.messages.some((m) => m.from === 'ResearchAgent')
    const prefix = hasResearch
      ? '[WriterAgent] Drafting with research context:\n'
      : '[WriterAgent] Drafting:\n'
    return `${prefix}${task}\n\nContent drafted based on task requirements and shared context.`
  }
}
