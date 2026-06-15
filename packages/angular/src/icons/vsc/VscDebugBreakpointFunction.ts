import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-breakpoint-function",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugBreakpointFunction {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.49 11.25L8.43 4.25C8.25 3.94 7.75 3.94 7.57 4.25L3.51 11.25C3.42 11.4 3.42 11.6 3.51 11.75C3.6 11.9 3.77 12 3.95 12H12.06C12.23 12 12.4 11.9 12.49 11.75C12.58 11.6 12.58 11.4 12.49 11.25H12.49Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugBreakpointFunction;
