import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-arrow-bottom-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxArrowBottomLeft {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.35 3.65C11.55 3.84 11.55 4.16 11.35 4.35L4.71 11L9 11C9.28 11 9.5 11.22 9.5 11.5C9.5 11.78 9.28 12 9 12L3.5 12C3.37 12 3.24 11.95 3.15 11.85C3.05 11.76 3 11.63 3 11.5L3 6C3 5.72 3.22 5.5 3.5 5.5C3.78 5.5 4 5.72 4 6V10.29L10.65 3.65C10.84 3.45 11.16 3.45 11.35 3.65Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxArrowBottomLeft;
