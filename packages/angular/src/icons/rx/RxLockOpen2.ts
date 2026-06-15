import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-lock-open-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxLockOpen2 {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9 3.64C9 2.76 9.24 2.11 9.64 1.69C10.04 1.27 10.64 1 11.5 1C12.45 1 13.08 1.31 13.47 1.81C13.8 2.23 14 2.84 14 3.63H15C15 2.68 14.76 1.84 14.26 1.19C13.64 0.39 12.67 0 11.5 0C10.43 0 9.54 0.34 8.91 1C8.29 1.66 8 2.58 8 3.64V6H1C0.45 6 0 6.45 0 7V13C0 13.55 0.45 14 1 14H10C10.55 14 11 13.55 11 13V7C11 6.45 10.55 6 10 6H9V3.64ZM1 7H10V13H1V7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxLockOpen2;
