import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-toml",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevToml {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-toml-1-a)"}],["path",{"fill":"currentColor","d":"M465.2 0v67.4h60.6v465.2h-60.6V600H600V0z"}],["path",{"fill":"currentColor","d":"M151.7 195.5v-74.2h296.6v74.2H337.1v323.6h-74.2V195.5z"}],["path",{"fill":"currentColor","d":"M134.8 0v67.4H74.2v465.2h60.6V600H0V0z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevToml;
