import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-pilcrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxPilcrow {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 5.5C3 7.98 4.99 9 7 9V12.5C7 12.78 7.22 13 7.5 13C7.78 13 8 12.78 8 12.5V9V3.1H9V12.5C9 12.78 9.22 13 9.5 13C9.78 13 10 12.78 10 12.5V3.1H11.5C11.8 3.1 12.05 2.85 12.05 2.55C12.05 2.25 11.8 2 11.5 2H9.5H8H7.5H7C4.99 2 3 3.02 3 5.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxPilcrow;
