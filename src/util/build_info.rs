use chrono::{DateTime, Utc};

#[derive(PartialEq)]
pub struct BuildInfo {
    pub commit: &'static str,
    pub built_at: DateTime<Utc>
}

impl Default for BuildInfo {
    fn default() -> Self {
        BuildInfo {
            commit: match option_env!("GITHUB_SHA") {
                Some(sha) => &sha[..7],
                None => "local"
            },
            built_at: Utc::now()
        }
    }
}