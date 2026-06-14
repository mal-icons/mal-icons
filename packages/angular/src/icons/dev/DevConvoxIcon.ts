import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-convox-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevConvoxIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m5.5 366.5 292.8 154 295.1-152.7v70L298.1 591 5.5 437zm588-126.1v70L298 463.5 5.5 309.5v-68l292.8 151.6zM297.6 9 600 178.4l-151.7 78.4L297.8 336 0 178.3zm0.2 71.4-168.5 95.9 168.5 89.2 122-64.3 48.8-25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevConvoxIcon;
