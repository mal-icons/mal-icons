import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-bell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxBell {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8.6 1.25C8.6 1.75 8.26 2.18 7.8 2.31C10.15 2.46 12 4.42 12 6.8V10.25C12 11.06 12.03 11.71 12.72 12.05C12.93 12.16 13.04 12.39 12.99 12.61C12.93 12.84 12.73 13 12.5 13H8.16C8.37 13.18 8.5 13.45 8.5 13.75C8.5 14.3 8.05 14.75 7.5 14.75C6.95 14.75 6.5 14.3 6.5 13.75C6.5 13.45 6.63 13.18 6.84 13H2.5C2.27 13 2.07 12.84 2.01 12.61C1.96 12.39 2.07 12.16 2.28 12.05C2.97 11.71 3 11.06 3 10.25V6.8C3 4.42 4.85 2.46 7.2 2.31C6.74 2.18 6.4 1.75 6.4 1.25C6.4 0.64 6.89 0.15 7.5 0.15C8.11 0.15 8.6 0.64 8.6 1.25ZM7.5 3.3C5.57 3.3 4 4.87 4 6.8V10.25L4 10.3C4 10.75 4 11.41 3.7 12H11.3C11 11.41 11 10.75 11 10.3L11 10.25V6.8C11 4.87 9.43 3.3 7.5 3.3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxBell;
