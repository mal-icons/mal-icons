import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-open-in-new-window",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxOpenInNewWindow {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 13C12.55 13 13 12.55 13 12V3C13 2.45 12.55 2 12 2H3C2.45 2 2 2.45 2 3V6.5C2 6.78 2.22 7 2.5 7C2.78 7 3 6.78 3 6.5V3H12V12H8.5C8.22 12 8 12.22 8 12.5C8 12.78 8.22 13 8.5 13H12ZM9 6.5C9 6.5 9 6.5 9 6.5V6.5V9.5C9 9.78 8.78 10 8.5 10C8.22 10 8 9.78 8 9.5V7.71L2.85 12.85C2.66 13.05 2.34 13.05 2.15 12.85C1.95 12.66 1.95 12.34 2.15 12.15L7.29 7H5.5C5.22 7 5 6.78 5 6.5C5 6.22 5.22 6 5.5 6H8.5C8.57 6 8.63 6.01 8.69 6.04C8.75 6.06 8.8 6.1 8.85 6.14C8.94 6.23 9 6.36 9 6.5L9 6.5","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxOpenInNewWindow;
