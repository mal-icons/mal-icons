import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-copy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCopy {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 9.5C1 10.33 1.67 11 2.5 11H4L4 10H2.5C2.22 10 2 9.78 2 9.5L2 2.5C2 2.22 2.22 2 2.5 2L9.5 2C9.78 2 10 2.22 10 2.5V4H5.5C4.67 4 4 4.67 4 5.5V12.5C4 13.33 4.67 14 5.5 14H12.5C13.33 14 14 13.33 14 12.5V5.5C14 4.67 13.33 4 12.5 4H11V2.5C11 1.67 10.33 1 9.5 1H2.5C1.67 1 1 1.67 1 2.5V9.5ZM5 5.5C5 5.22 5.22 5 5.5 5H12.5C12.78 5 13 5.22 13 5.5V12.5C13 12.78 12.78 13 12.5 13H5.5C5.22 13 5 12.78 5 12.5V5.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCopy;
