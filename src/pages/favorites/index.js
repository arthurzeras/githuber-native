import styles from './styles'
import { colors } from 'styles'
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import RepositoryItem from '../repositories/components/RepositoryItem'

export default class Favorites extends Component {
  static navigationOptions = {
    headerRight: null,
    headerTintColor: colors.white,
    title: 'Repositórios Favoritos',
    headerStyle: { backgroundColor: colors.secondary }
  }

  state = {
    favorites: [
      {
        "id": 29028775,
        "node_id": "MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==",
        "name": "react-native",
        "full_name": "facebook/react-native",
        "owner": {
          "login": "facebook",
          "id": 69631,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/facebook",
          "html_url": "https://github.com/facebook",
          "followers_url": "https://api.github.com/users/facebook/followers",
          "following_url": "https://api.github.com/users/facebook/following{/other_user}",
          "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
          "organizations_url": "https://api.github.com/users/facebook/orgs",
          "repos_url": "https://api.github.com/users/facebook/repos",
          "events_url": "https://api.github.com/users/facebook/events{/privacy}",
          "received_events_url": "https://api.github.com/users/facebook/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/facebook/react-native",
        "description": "A framework for building native apps with React.",
        "fork": false,
        "url": "https://api.github.com/repos/facebook/react-native",
        "forks_url": "https://api.github.com/repos/facebook/react-native/forks",
        "keys_url": "https://api.github.com/repos/facebook/react-native/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/facebook/react-native/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/facebook/react-native/teams",
        "hooks_url": "https://api.github.com/repos/facebook/react-native/hooks",
        "issue_events_url": "https://api.github.com/repos/facebook/react-native/issues/events{/number}",
        "events_url": "https://api.github.com/repos/facebook/react-native/events",
        "assignees_url": "https://api.github.com/repos/facebook/react-native/assignees{/user}",
        "branches_url": "https://api.github.com/repos/facebook/react-native/branches{/branch}",
        "tags_url": "https://api.github.com/repos/facebook/react-native/tags",
        "blobs_url": "https://api.github.com/repos/facebook/react-native/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/facebook/react-native/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/facebook/react-native/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/facebook/react-native/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/facebook/react-native/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/facebook/react-native/languages",
        "stargazers_url": "https://api.github.com/repos/facebook/react-native/stargazers",
        "contributors_url": "https://api.github.com/repos/facebook/react-native/contributors",
        "subscribers_url": "https://api.github.com/repos/facebook/react-native/subscribers",
        "subscription_url": "https://api.github.com/repos/facebook/react-native/subscription",
        "commits_url": "https://api.github.com/repos/facebook/react-native/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/facebook/react-native/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/facebook/react-native/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/facebook/react-native/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/facebook/react-native/contents/{+path}",
        "compare_url": "https://api.github.com/repos/facebook/react-native/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/facebook/react-native/merges",
        "archive_url": "https://api.github.com/repos/facebook/react-native/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/facebook/react-native/downloads",
        "issues_url": "https://api.github.com/repos/facebook/react-native/issues{/number}",
        "pulls_url": "https://api.github.com/repos/facebook/react-native/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/facebook/react-native/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/facebook/react-native/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/facebook/react-native/labels{/name}",
        "releases_url": "https://api.github.com/repos/facebook/react-native/releases{/id}",
        "deployments_url": "https://api.github.com/repos/facebook/react-native/deployments",
        "created_at": "2015-01-09T18:10:16Z",
        "updated_at": "2018-08-20T18:57:20Z",
        "pushed_at": "2018-08-20T17:03:08Z",
        "git_url": "git://github.com/facebook/react-native.git",
        "ssh_url": "git@github.com:facebook/react-native.git",
        "clone_url": "https://github.com/facebook/react-native.git",
        "svn_url": "https://github.com/facebook/react-native",
        "homepage": "https://facebook.github.io/react-native/",
        "size": 256304,
        "stargazers_count": 67679,
        "watchers_count": 67679,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": true,
        "forks_count": 15235,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 914,
        "license": {
          "key": "other",
          "name": "Other",
          "spdx_id": null,
          "url": null,
          "node_id": "MDc6TGljZW5zZTA="
        },
        "forks": 15235,
        "open_issues": 914,
        "watchers": 67679,
        "default_branch": "master",
        "organization": {
          "login": "facebook",
          "id": 69631,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/facebook",
          "html_url": "https://github.com/facebook",
          "followers_url": "https://api.github.com/users/facebook/followers",
          "following_url": "https://api.github.com/users/facebook/following{/other_user}",
          "gists_url": "https://api.github.com/users/facebook/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
          "organizations_url": "https://api.github.com/users/facebook/orgs",
          "repos_url": "https://api.github.com/users/facebook/repos",
          "events_url": "https://api.github.com/users/facebook/events{/privacy}",
          "received_events_url": "https://api.github.com/users/facebook/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "network_count": 15235,
        "subscribers_count": 3623
      }
    ]
  }

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <RepositoryItem repository={item}/>}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.favorites.length
            ? <Text style={styles.empty}>Nenhum favorito cadastrado</Text>
            : this.renderList()
        }
      </View>
    )
  }
}
