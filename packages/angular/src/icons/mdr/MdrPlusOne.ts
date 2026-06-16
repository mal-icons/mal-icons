import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-plus-one",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPlusOne {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 8c-0.55 0-1 0.45-1 1v3H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h3v3c0 0.550.45 1 1 1s1-0.45 1-1v-3h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3V9c0-0.55-0.45-1-1-1zm5.5-1.21c0 0.570.52 1 1.080.89L17 7.4V17c0 0.550.45 1 1 1s1-0.45 1-1V6.27c0-0.65-0.6-1.12-1.23-0.97l-2.570.62c-0.410.09-0.70.46-0.70.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPlusOne;
