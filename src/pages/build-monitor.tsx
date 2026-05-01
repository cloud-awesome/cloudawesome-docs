import { PipelineDashboard, type DashboardData } from "pipeline-execution-dashboard";
import Layout from "@theme/Layout";
import React from "react";
import Admonition from '@theme/Admonition';

import 'pipeline-execution-dashboard/styles.css';

const exampleData: DashboardData = {
  generatedAt: '2026-05-01T18:31:08.000Z',
  repositories: [],
  pipelines: [],
  executions: []
}

export default function BuildMonitor() {
  return (
      <Layout
          title="Pipeline Dashboard"
          description="Docusaurus compatibility page for pipeline-execution-dashboard"
      >
        <main className="dashboard-example" style={{ padding: '2rem' }}>
          <div className="container">
            <header className="dashboard-example__header">
              <h1 className="dashboard-example__title">Build monitor</h1>
              <Admonition type="note" title="Work in progress">
                <p className="dashboard-example__intro">
                  This page will display the build and publish status of the latest builds for all repositories. It's still in development, hence no data right now.
                </p>
                <p className="dashboard-example__intro">
                  The intention is to make transparent ongoing development and new releases so that users can see build status, releases and stale projects.
                </p>
              </Admonition>
            </header>

            <div className="dashboard-example__panel">
              <PipelineDashboard data={exampleData} />
            </div>
          </div>
        </main>
      </Layout>
  );
}