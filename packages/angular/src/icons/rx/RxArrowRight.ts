import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-arrow-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxArrowRight {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8.15 3.15C8.34 2.95 8.66 2.95 8.85 3.15L12.85 7.15C13.05 7.34 13.05 7.66 12.85 7.85L8.85 11.85C8.66 12.05 8.34 12.05 8.15 11.85C7.95 11.66 7.95 11.34 8.15 11.15L11.29 8H2.5C2.22 8 2 7.78 2 7.5C2 7.22 2.22 7 2.5 7H11.29L8.15 3.85C7.95 3.66 7.95 3.34 8.15 3.15Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxArrowRight;
