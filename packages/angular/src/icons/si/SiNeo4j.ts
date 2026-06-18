import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-neo4j",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNeo4j {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.63 13.23c-0.59 0-1.140.2-1.580.53l-2.89-1.98a2.61 2.61 0 0 0 0.1-0.71 2.63 2.63 0 0 0-2.63-2.63A2.63 2.63 0 0 0 0 11.07a2.63 2.63 0 0 0 2.63 2.63c0.59 0 1.14-0.2 1.58-0.53L7.1 15.15c-0.060.23-0.10.47-0.10.71 0 0.250.040.480.10.71l-2.89 1.98a2.61 2.61 0 0 0-1.58-0.53A2.63 2.63 0 0 0 0 20.64a2.63 2.63 0 0 0 2.63 2.63 2.63 2.63 0 0 0 2.63-2.63c0-0.25-0.04-0.48-0.1-0.71l2.89-1.98c0.440.330.990.53 1.580.53a2.63 2.63 0 0 0 2.63-2.63c0-1.45-1.18-2.63-2.63-2.63ZM16.110.73c-4.72 0-7.89 2.75-7.89 8.08v3.8a3.53 3.53 0 0 1 3.070.01v-3.81c0-3.46 1.91-5.24 4.82-5.24s4.82 1.78 4.82 5.24v8.31H24V8.81C24 3.45 20.830.73 16.110.73Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNeo4j;
