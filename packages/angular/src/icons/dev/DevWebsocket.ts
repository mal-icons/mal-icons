import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-websocket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevWebsocket {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M451 413.9h74.5V235l-83.9-83.9-52.7 52.7 62.1 62.1zm74.7 37.3H266l-62.1-62 26.3-26.4 51.3 51.3H387L283 309.9l26.5-26.5 104 104V281.8l-51.1-51 26.1-26.2-129-129.7H0l74.3 74.3v0.2h154.1l54.4 54.4-79.6 79.6-54.4-54.4v-42.3H74.3v73.1l129 129-52.6 52.4 84 84H600z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevWebsocket;
