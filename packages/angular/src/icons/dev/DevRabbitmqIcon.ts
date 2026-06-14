import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-rabbitmq-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevRabbitmqIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-rabbitmq-icon-1-a)"}],["path",{"fill":"currentColor","d":"M575.9 240h-192a24 24 0 0 1-24-24V24a24 24 0 0 0-24-23.8H264A24 24 0 0 0 240 24v192a24 24 0 0 1-24.1 24h-71.8a24 24 0 0 1-24-24V24A24 24 0 0 0 96 0H24A24 24 0 0 0 0 24v552a24 24 0 0 0 24.1 24H576a24 24 0 0 0 24-24V264.5a24 24 0 0 0-24-24.5m-96.5 203.8a36 36 0 0 1-36 36.1h-48a36 36 0 0 1-36-36v-48a36 36 0 0 1 36-36h48a36 36 0 0 1 36 36z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevRabbitmqIcon;
