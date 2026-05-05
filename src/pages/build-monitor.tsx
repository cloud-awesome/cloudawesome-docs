import { PipelineDashboard, type DashboardData } from "pipeline-execution-dashboard";
import Layout from "@theme/Layout";
import React, { useEffect, useState } from "react";
import Admonition from '@theme/Admonition';

import 'pipeline-execution-dashboard/styles.css';

const dashboardDataUrl = 'https://cloudawesome-docs-api-caazergrbaahe9fe.uksouth-01.azurewebsites.net/api/github';

export default function BuildMonitor() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function loadDashboardData() {
      try {
        setIsLoading(true);
        setLoadError(null);

        const response = await fetch(dashboardDataUrl, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`Dashboard API returned ${response.status}`);
        }

        const data = await response.json() as DashboardData;
        setDashboardData(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        setLoadError(error instanceof Error ? error.message : 'Unable to load dashboard data.');
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadDashboardData();

    return () => abortController.abort();
  }, []);

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
                  This page displays the build and publish status of the latest builds for all repositories.
                </p>
                <p className="dashboard-example__intro">
                  The intention is to make transparent ongoing development and new releases so that users can see build status, releases and stale projects.
                </p>
              </Admonition>
            </header>

            <div className="dashboard-example__panel">
              {isLoading && (
                  <Admonition type="info" title="Loading build data">
                    <p>Fetching the latest repository and pipeline status.</p>
                  </Admonition>
              )}

              {loadError && (
                  <Admonition type="danger" title="Could not load build data">
                    <p>{loadError}</p>
                  </Admonition>
              )}

              {dashboardData && (
                  <PipelineDashboard data={dashboardData} />
              )}
            </div>
          </div>
        </main>
      </Layout>
  );
}
