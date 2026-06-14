import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-hosted-graphite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevHostedGraphite {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M561.6 147.5V450L296.8 600 38.4 450.1V147.5L296.8 0s50.3 29.7 75 42.3a6376 6376 0 0 1 189.8 105.2M348.2 130v130.4H247.6V130l-117 69.2v203.6l117 72.5v-85.8l-80.5-49.3h181.1v135.1s78.8-51.5 113-72.5V199.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevHostedGraphite;
