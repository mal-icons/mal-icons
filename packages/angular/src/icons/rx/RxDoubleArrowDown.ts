import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-double-arrow-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDoubleArrowDown {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.85 2.15C3.66 1.95 3.34 1.95 3.15 2.15C2.95 2.34 2.95 2.66 3.15 2.85L7.15 6.85C7.34 7.05 7.66 7.05 7.85 6.85L11.85 2.85C12.05 2.66 12.05 2.34 11.85 2.15C11.66 1.95 11.34 1.95 11.15 2.15L7.5 5.79L3.85 2.15ZM3.85 8.15C3.66 7.95 3.34 7.95 3.15 8.15C2.95 8.34 2.95 8.66 3.15 8.85L7.15 12.85C7.34 13.05 7.66 13.05 7.85 12.85L11.85 8.85C12.05 8.66 12.05 8.34 11.85 8.15C11.66 7.95 11.34 7.95 11.15 8.15L7.5 11.79L3.85 8.15Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDoubleArrowDown;
