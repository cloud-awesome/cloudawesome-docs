# Introduction

`pipeline-execution-dashboard` is a lightweight React component that can be used to display the status of a build and release pipelines from multiple sources/repositories.

This component, displaying the real-world build status of all public Cloud Awesome projects, is used [on this site](../build-monitor).

## Quick start

Install the package from npm:

```bash
npm i pipeline-execution-dashboard
```

The component accepts a `DashboardData` object as a prop, which contains information about the repositories, pipelines, and executions to be displayed.

It is the consuming application's responsibility to provide this data.

```tsx

const exampleData: DashboardData = {
  generatedAt: '2026-05-01T18:31:08.000Z',
  repositories: [],
  pipelines: [],
  executions: []
}

<div className="dashboard-example__panel">
  <PipelineDashboard data={exampleData} />
</div>
```

Given the abstracted data model, the component will support any data source that can be represented as a JSON object.