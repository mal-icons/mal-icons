import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-arrow-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxArrowDown {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.5 2C7.78 2 8 2.22 8 2.5L8 11.29L11.15 8.15C11.34 7.95 11.66 7.95 11.85 8.15C12.05 8.34 12.05 8.66 11.85 8.85L7.85 12.85C7.76 12.95 7.63 13 7.5 13C7.37 13 7.24 12.95 7.15 12.85L3.15 8.85C2.95 8.66 2.95 8.34 3.15 8.15C3.34 7.95 3.66 7.95 3.85 8.15L7 11.29L7 2.5C7 2.22 7.22 2 7.5 2Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxArrowDown;
