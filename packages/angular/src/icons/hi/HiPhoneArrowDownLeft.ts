import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-phone-arrow-down-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiPhoneArrowDownLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.28 0-15-6.72-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.37c0.52 0 0.970.35 1.090.85l1.11 4.42c0.110.44-0.050.9-0.42 1.17l-1.290.97a1.06 1.06 0 0 0-0.38 1.21 12.04 12.04 0 0 0 7.14 7.14c0.440.160.930 1.21-0.38l0.97-1.29a1.13 1.13 0 0 1 1.17-0.42l4.42 1.11c0.50.130.850.570.85 1.09V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiPhoneArrowDownLeft;
