import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-crosshair-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCrosshair1 {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0.88 7.5C0.88 3.84 3.84 0.88 7.5 0.88C11.16 0.88 14.13 3.84 14.13 7.5C14.13 11.16 11.16 14.13 7.5 14.13C3.84 14.13 0.88 11.16 0.88 7.5ZM1.85 7C2.09 4.27 4.27 2.09 7 1.85V4.5C7 4.78 7.22 5 7.5 5C7.78 5 8 4.78 8 4.5V1.85C10.74 2.09 12.92 4.27 13.16 7H10.5C10.22 7 10 7.22 10 7.5C10 7.78 10.22 8 10.5 8H13.16C12.92 10.74 10.74 12.92 8 13.16V10.5C8 10.22 7.78 10 7.5 10C7.22 10 7 10.22 7 10.5V13.16C4.27 12.92 2.09 10.74 1.85 8H4.5C4.78 8 5 7.78 5 7.5C5 7.22 4.78 7 4.5 7H1.85Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCrosshair1;
