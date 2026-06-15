import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-link-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxLink1 {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.62 4L4.56 4C4.04 4 3.71 4 3.42 4.06C2.24 4.28 1.3 5.17 1.06 6.33C1 6.61 1 6.94 1 7.44L1 7.5L1 7.56C1 8.06 1 8.39 1.06 8.67C1.3 9.83 2.24 10.72 3.42 10.95C3.71 11 4.04 11 4.56 11L4.62 11H5.5C5.78 11 6 10.78 6 10.5C6 10.22 5.78 10 5.5 10H4.62C4.02 10 3.79 10 3.61 9.96C2.8 9.81 2.19 9.21 2.04 8.47C2 8.3 2 8.08 2 7.5C2 6.92 2 6.7 2.04 6.53C2.19 5.79 2.8 5.19 3.61 5.04C3.79 5 4.02 5 4.62 5H5.5C5.78 5 6 4.78 6 4.5C6 4.22 5.78 4 5.5 4H4.62ZM10.37 5C10.98 5 11.21 5 11.39 5.04C12.2 5.19 12.81 5.79 12.96 6.53C13 6.7 13 6.92 13 7.5C13 8.08 13 8.3 12.96 8.47C12.81 9.21 12.2 9.81 11.39 9.96C11.21 10 10.98 10 10.37 10H9.5C9.22 10 9 10.22 9 10.5C9 10.78 9.22 11 9.5 11H10.37L10.44 11C10.96 11 11.29 11 11.58 10.95C12.76 10.72 13.7 9.83 13.94 8.67C14 8.39 14 8.06 14 7.56L14 7.5L14 7.44C14 6.94 14 6.61 13.94 6.33C13.7 5.17 12.76 4.28 11.58 4.06C11.29 4 10.96 4 10.44 4L10.37 4H9.5C9.22 4 9 4.22 9 4.5C9 4.78 9.22 5 9.5 5H10.37ZM5 7C4.72 7 4.5 7.22 4.5 7.5C4.5 7.78 4.72 8 5 8H10C10.28 8 10.5 7.78 10.5 7.5C10.5 7.22 10.28 7 10 7H5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxLink1;
