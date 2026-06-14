import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-mapbox-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMapboxIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M300 3.2c165.7 0 300 132.9 300 296.8S465.7 596.8 300 596.8 0 463.9 0 300 134.3 3.2 300 3.2m137.7 160.6c-59.7-58.8-154.2-61-211.3-4.7-100.8 99.8-71 275.6-69.9 282.6v0.2s183.3 32.4 286-69.1c57-56.4 55-150.2-4.8-209m-103.3 13.4 29.4 59.7 60.4 29-60.4 29-29.4 59.8-29.3-59.7-60.4-29 60.4-29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMapboxIcon;
