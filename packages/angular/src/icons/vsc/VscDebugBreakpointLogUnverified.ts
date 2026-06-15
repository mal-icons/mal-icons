import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-breakpoint-log-unverified",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugBreakpointLogUnverified {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 13C7.87 13 7.74 12.95 7.65 12.85L3.15 8.35C2.95 8.16 2.95 7.84 3.15 7.65L7.65 3.15C7.84 2.95 8.16 2.95 8.35 3.15L12.85 7.65C13.05 7.84 13.05 8.16 12.85 8.35L8.35 12.85C8.26 12.95 8.13 13 8 13L8 13ZM4.21 8L8 11.79L11.79 8L8 4.21L4.21 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugBreakpointLogUnverified;
