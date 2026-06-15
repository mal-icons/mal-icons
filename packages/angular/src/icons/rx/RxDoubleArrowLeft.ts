import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-double-arrow-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDoubleArrowLeft {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.85 3.85C7.05 3.66 7.05 3.34 6.85 3.15C6.66 2.95 6.34 2.95 6.15 3.15L2.15 7.15C1.95 7.34 1.95 7.66 2.15 7.85L6.15 11.85C6.34 12.05 6.66 12.05 6.85 11.85C7.05 11.66 7.05 11.34 6.85 11.15L3.21 7.5L6.85 3.85ZM12.85 3.85C13.05 3.66 13.05 3.34 12.85 3.15C12.66 2.95 12.34 2.95 12.15 3.15L8.15 7.15C7.95 7.34 7.95 7.66 8.15 7.85L12.15 11.85C12.34 12.05 12.66 12.05 12.85 11.85C13.05 11.66 13.05 11.34 12.85 11.15L9.21 7.5L12.85 3.85Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDoubleArrowLeft;
