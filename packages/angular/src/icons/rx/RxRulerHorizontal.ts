import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-ruler-horizontal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxRulerHorizontal {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0.5 4C0.22 4 0 4.22 0 4.5V10.5C0 10.78 0.22 11 0.5 11H14.5C14.78 11 15 10.78 15 10.5V4.5C15 4.22 14.78 4 14.5 4H0.5ZM1 10V5H2.08V7.5C2.08 7.73 2.27 7.93 2.5 7.93C2.73 7.93 2.93 7.73 2.93 7.5V5H4.08V6.5C4.08 6.73 4.27 6.93 4.5 6.93C4.73 6.93 4.93 6.73 4.93 6.5V5H6.08V6.5C6.08 6.73 6.27 6.93 6.5 6.93C6.73 6.93 6.93 6.73 6.93 6.5V5H8.07V7.5C8.07 7.73 8.27 7.93 8.5 7.93C8.73 7.93 8.93 7.73 8.93 7.5V5H10.07V6.5C10.07 6.73 10.27 6.93 10.5 6.93C10.73 6.93 10.93 6.73 10.93 6.5V5H12.08V6.5C12.08 6.73 12.27 6.93 12.5 6.93C12.73 6.93 12.93 6.73 12.93 6.5V5H14V10H1Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxRulerHorizontal;
