mod components;
mod util;

use chrono::{Datelike, Local};
use yew::prelude::*;

use crate::components::footer::PFooter;
use crate::components::header::PHeader;
use crate::util::build_info::BuildInfo;

#[function_component]
fn App() -> Html {
    let year = Local::now().year();
    let build = BuildInfo::default();

    html! {
        <div class={classes!("page")} >
            <div class={classes!("side-buffer")} />
            <div class={classes!("content")}>
                <PHeader />
                <PFooter {year} {build} />
            </div>
            <div class={classes!("side-buffer")} />
        </div>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
