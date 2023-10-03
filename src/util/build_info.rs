#[derive(PartialEq)]
pub struct BuildInfo {
    pub commit: &'static str,
}

impl Default for BuildInfo {
    fn default() -> Self {
        BuildInfo {
            commit: match option_env!("GITHUB_SHA") {
                Some(sha) => &sha[..7],
                None => "local"
            }
        }
    }
}