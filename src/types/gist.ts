export interface IGist {
  id: string;
  url: string;
  forks_url: string;
  commits_url: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: { [filename: string]: IGistFile };
  public: boolean;
  created_at: string;
  updated_at: string;
  description: string;
  comments: string;
  user: any;
  comments_url: string;
  owner: IGistOwner;
  truncated: boolean;
}

export interface IGistFile {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
}

export interface IGistOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
