import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-rotate-counter-clockwise",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxRotateCounterClockwise {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.6 2.94C7.76 3.06 8 2.95 8 2.74V2C9.98 2 11.18 2.36 11.91 3.09C12.64 3.82 13 5.02 13 7C13 7.28 13.22 7.5 13.5 7.5C13.78 7.5 14 7.28 14 7C14 4.94 13.63 3.4 12.62 2.38C11.6 1.37 10.06 1 8 1V0.26C8 0.05 7.76 -0.06 7.6 0.06L6 1.3C5.88 1.4 5.88 1.6 6 1.7L7.6 2.94ZM9.5 5H2.5C2.22 5 2 5.22 2 5.5V12.5C2 12.78 2.22 13 2.5 13H9.5C9.78 13 10 12.78 10 12.5V5.5C10 5.22 9.78 5 9.5 5ZM2.5 4C1.67 4 1 4.67 1 5.5V12.5C1 13.33 1.67 14 2.5 14H9.5C10.33 14 11 13.33 11 12.5V5.5C11 4.67 10.33 4 9.5 4H2.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxRotateCounterClockwise;
