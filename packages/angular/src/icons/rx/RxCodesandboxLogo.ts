import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-codesandbox-logo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCodesandboxLogo {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.71 0.8C7.58 0.73 7.42 0.73 7.29 0.8L1.29 3.6C1.11 3.68 1 3.86 1 4.05V10.95C1 11.14 1.11 11.32 1.29 11.4L7.29 14.2C7.42 14.27 7.58 14.27 7.71 14.2L13.71 11.4C13.89 11.32 14 11.14 14 10.95V4.05C14 3.86 13.89 3.68 13.71 3.6L7.71 0.8ZM7.5 3.16L5.98 2.51L7.5 1.8L9.02 2.51L7.5 3.16ZM7.7 4.16L10.24 3.08L12.27 4.03L7.5 6.06L2.73 4.03L4.76 3.08L7.3 4.16C7.43 4.21 7.57 4.21 7.7 4.16ZM8 6.93L13 4.81V7.93L11.08 8.81C10.73 8.98 10.5 9.33 10.5 9.72V11.8L8 12.96V6.93ZM11.5 11.33L13 10.63V9.03L11.5 9.72V11.33ZM7 6.93V12.96L4.5 11.8V9.72C4.5 9.33 4.27 8.98 3.92 8.81L2 7.93V4.81L7 6.93ZM2 10.63L3.5 11.33L3.5 9.72L2 9.03V10.63Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCodesandboxLogo;
