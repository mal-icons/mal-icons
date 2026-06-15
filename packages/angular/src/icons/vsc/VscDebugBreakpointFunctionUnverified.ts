import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-breakpoint-function-unverified",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugBreakpointFunctionUnverified {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.06 12H3.94C3.77 12 3.6 11.9 3.51 11.75C3.42 11.6 3.42 11.4 3.51 11.25L7.57 4.25C7.75 3.94 8.25 3.94 8.43 4.25L12.49 11.25C12.58 11.4 12.58 11.6 12.49 11.75C12.4 11.9 12.23 12 12.05 12H12.06ZM4.81 11H11.19L8 5.5L4.81 11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugBreakpointFunctionUnverified;
