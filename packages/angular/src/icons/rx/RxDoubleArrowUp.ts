import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-double-arrow-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDoubleArrowUp {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.15 6.85C11.34 7.05 11.66 7.05 11.85 6.85C12.05 6.66 12.05 6.34 11.85 6.15L7.85 2.15C7.66 1.95 7.34 1.95 7.15 2.15L3.15 6.15C2.95 6.34 2.95 6.66 3.15 6.85C3.34 7.05 3.66 7.05 3.85 6.85L7.5 3.21L11.15 6.85ZM11.15 12.85C11.34 13.05 11.66 13.05 11.85 12.85C12.05 12.66 12.05 12.34 11.85 12.15L7.85 8.15C7.66 7.95 7.34 7.95 7.15 8.15L3.15 12.15C2.95 12.34 2.95 12.66 3.15 12.85C3.34 13.05 3.66 13.05 3.85 12.85L7.5 9.21L11.15 12.85Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDoubleArrowUp;
