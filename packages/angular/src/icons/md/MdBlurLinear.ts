import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-blur-linear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdBlurLinear {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 17.5c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5-1.50.67-1.5 1.50.67 1.5 1.5 1.5zM9 13c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm0-4c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zM3 21h18v-2H3v2zM5 9.5c0.83 0 1.5-0.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5-1.50.67-1.5 1.50.67 1.5 1.5 1.5zM9 17c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm8-0.5c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5-0.50.22-0.50.50.220.50.50.5zM3 3v2h18V3H3zm14 5.5c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5-0.50.22-0.50.50.220.50.50.5zm0 4c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5-0.50.22-0.50.50.220.50.50.5zM13 9c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm0 4c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm0 4c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdBlurLinear;
