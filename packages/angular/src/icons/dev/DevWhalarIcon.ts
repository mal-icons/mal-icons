import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-whalar-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevWhalarIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M600 285.7v150c0 1.5-4.7 74.3-150 74.3-146.8 0-150 71-150 74.3 0-3.5-3.2-74.3-150-74.3C6 510 0.1 445.7 0 436.7v-151S6.7 360 150 360s150 67.6 150 74.3c0-5 1.6-74.3 150-74.3 145.5 0 149.9-71.4 150-74.3m0-270v150s0 74.3-150 74.3c-148.5 0-150 69.5-150 74.2v-0.2c-0.2-5.7-6.2-74-150-74C5.8 240 0.1 175.8 0 166.8v-151C0 18.7 3 90 150 90s150 66.5 150 74v0.3c0-6.6 1.6-74.3 150-74.3s150-74.3 150-74.3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevWhalarIcon;
