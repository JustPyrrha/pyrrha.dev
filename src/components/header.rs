use yew::prelude::*;

#[function_component]
pub fn PHeader() -> Html {
    html! {
        <div class={classes!("pHeader")}>
            <h1>{"Pyrrha Wills"}</h1>
            <div class={classes!("extra")}>
                <h4>{"Software Engineer"}</h4>
                <h4>{"She/They"}</h4>
            </div>
        </div>
    }
}