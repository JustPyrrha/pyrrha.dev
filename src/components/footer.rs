use yew::prelude::*;
use crate::util::build_info::BuildInfo;

#[derive(Properties, PartialEq)]
pub struct PFooterProps {
    pub year: i32,
    pub build: BuildInfo,
}

#[function_component]
pub fn PFooter(props: &PFooterProps) -> Html {
    html! {
        <footer>
            <div class={classes!("pfooter")}>
                <div class={classes!("pfooter__row")}>
                    {"Released under MIT License | Copyright © Pyrrha Wills "}{props.year.clone()}
                </div>
                <div class={classes!("pfooter__row--icons")}>
                    <a href="https://github.com/JustPyrrha" target="_blank"><ion-icon size="large" name="logo-github" /></a>
                    <a href="https://pyrrha.gay" target="_blank"><ion-icon size="large" name="planet-outline" /></a>
                </div>
            </div>

            <div class={classes!("buildinfo")}><a href={"https://github.com/JustPyrrha/pyrrha.dev/commit/".to_owned() + props.build.commit}>{props.build.commit}</a>{" built at "}{props.build.built_at.format("%d/%m/%Y %X %Z")}</div>
        </footer>
    }
}