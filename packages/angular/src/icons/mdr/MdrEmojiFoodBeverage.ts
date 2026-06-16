import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-emoji-food-beverage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEmojiFoodBeverage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 19H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h16c0.55 0 1-0.45 1-1s-0.45-1-1-1zm1-16H9v2.4l1.81 1.45c0.120.090.190.240.190.39v4.26c0 0.28-0.220.5-0.50.5h-4c-0.28 0-0.5-0.22-0.5-0.5V7.24c0-0.150.07-0.30.19-0.39L8 5.4V3H6c-1.1 0-2 0.9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 5h-2V5h2v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEmojiFoodBeverage;
