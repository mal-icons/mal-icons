import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-file-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxFilePlus {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.5 2C3.22 2 3 2.22 3 2.5V12.5C3 12.78 3.22 13 3.5 13H11.5C11.78 13 12 12.78 12 12.5V4.71L9.29 2H3.5ZM2 2.5C2 1.67 2.67 1 3.5 1H9.5C9.63 1 9.76 1.05 9.85 1.15L12.78 4.07C12.92 4.21 13 4.4 13 4.6V12.5C13 13.33 12.33 14 11.5 14H3.5C2.67 14 2 13.33 2 12.5V2.5ZM4.75 7.5C4.75 7.22 4.97 7 5.25 7H7V5.25C7 4.97 7.22 4.75 7.5 4.75C7.78 4.75 8 4.97 8 5.25V7H9.75C10.03 7 10.25 7.22 10.25 7.5C10.25 7.78 10.03 8 9.75 8H8V9.75C8 10.03 7.78 10.25 7.5 10.25C7.22 10.25 7 10.03 7 9.75V8H5.25C4.97 8 4.75 7.78 4.75 7.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxFilePlus;
