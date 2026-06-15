import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-stats-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfStatsDown {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.17 8.8l-4.37-3.96 0.67-0.74 3.77 3.41 4.2-3.03 5.59 6.25v-2.28h1v4.04h-4.04v-1h2.37l-5.07-5.66-4.13 2.97zM0 16v1h17v-1h-17z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfStatsDown;
