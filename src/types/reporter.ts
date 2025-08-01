import { IntegrationsConfig } from './integrations'

export interface Inputs {
  templatePath?: string
  ctrfPath: string
  summary: boolean
  pullRequest: boolean
  issue: string
  collapseLargeReports: boolean
  summaryReport: boolean
  githubReport: boolean
  testReport: boolean
  testListReport: boolean
  failedReport: boolean
  failRateReport: boolean
  flakyReport: boolean
  flakyRateReport: boolean
  failedFoldedReport: boolean
  previousResultsReport: boolean
  aiReport: boolean
  skippedReport: boolean
  suiteFoldedReport: boolean
  suiteListReport: boolean
  pullRequestReport: boolean
  commitReport: boolean
  customReport: boolean
  insightsReport: boolean
  slowestReport: boolean
  communityReport: boolean
  communityReportName: string
  fileReport: boolean
  artifactName: string
  annotate: boolean
  title: string
  onFailOnly: boolean
  exitOnFail: boolean
  useSuiteName: boolean
  previousResultsMax: number
  metricsReportsMax: number
  maxWorkflowRunsToCheck: number
  fetchPreviousResults: boolean
  updateComment: boolean
  overwriteComment: boolean
  alwaysLatestComment: boolean
  commentTag: string
  writeCtrfToFile: string
  uploadArtifact: boolean
  groupBy: 'suite' | 'filePath'
  alwaysGroupBy: boolean
  integrationsConfig: IntegrationsConfig
  statusCheck: boolean
  statusCheckName: string
  reportOrder: string[]
}
