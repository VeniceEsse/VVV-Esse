# Contributing to ESSE

Thanks for your interest in contributing! 🎉

## Getting Started

```bash
git clone https://github.com/esse-ai/esse-agent.git
cd esse-agent
npm install
npm test
```

## Creating a Custom Agent

1. Implement the `IAgent` interface from `src/core/types.ts`
2. Add your agent to `src/agents/`
3. Export it from `src/index.ts`
4. Write tests in `tests/`
5. Run `npm run test:compat` — all agents must pass

## Pull Request Guidelines

- One feature or fix per PR
- Include tests (>80% coverage for new code)
- Run `npm run lint` and `npm run typecheck` before submitting
- Write clear commit messages: `feat:`, `fix:`, `docs:`, `chore:`

## Community

- X: [@VeniceEsse](https://x.com/VeniceEsse)
- Website: [vvvesse.xyz](http://vvvesse.xyz/)
