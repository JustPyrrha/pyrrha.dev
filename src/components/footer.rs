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
            <div class={classes!("pFooter")}>
                <div class={classes!("pFooter__row")}>
                    {"Released under MIT License | Copyright © Pyrrha Wills "}{props.year.clone()}
                </div>
                <div class={classes!("pFooter__row--icons")}>
                    <a href="https://github.com/JustPyrrha" target="_blank"><ion-icon size="large" name="logo-github" /></a>
                    <a href="https://pyrrha.gay" target="_blank"><ion-icon size="large" name="planet-outline" /></a>
                </div>
            </div>

            <div class={classes!("buildInfo")}><a href={"https://github.com/JustPyrrha/pyrrha.dev/tree/".to_owned() + props.build.commit}>{props.build.commit}</a></div>
        </footer>
    }
}