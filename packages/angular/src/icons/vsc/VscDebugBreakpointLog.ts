import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-breakpoint-log",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugBreakpointLog {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.85 7.65L8.35 3.15C8.16 2.95 7.84 2.95 7.65 3.15L3.15 7.65C2.95 7.84 2.95 8.16 3.15 8.35L7.65 12.85C7.74 12.95 7.87 13 8 13C8.13 13 8.26 12.95 8.35 12.85L12.85 8.35C13.05 8.16 13.05 7.84 12.85 7.65Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugBreakpointLog;
