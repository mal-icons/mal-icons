import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-arrow-bottom-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxArrowBottomRight {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.65 3.65C3.45 3.84 3.45 4.16 3.65 4.35L10.29 11L6 11C5.72 11 5.5 11.22 5.5 11.5C5.5 11.78 5.72 12 6 12L11.5 12C11.63 12 11.76 11.95 11.85 11.85C11.95 11.76 12 11.63 12 11.5L12 6C12 5.72 11.78 5.5 11.5 5.5C11.22 5.5 11 5.72 11 6V10.29L4.35 3.65C4.16 3.45 3.84 3.45 3.65 3.65Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxArrowBottomRight;
