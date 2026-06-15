import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-restart-frame",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugRestartFrame {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 3.5C1 3.22 1.22 3 1.5 3H14.5C14.78 3 15 3.22 15 3.5C15 3.78 14.78 4 14.5 4H1.5C1.22 4 1 3.78 1 3.5Z"}],["path",{"d":"M1 7.5C1 7.22 1.22 7 1.5 7H14.5C14.78 7 15 7.22 15 7.5C15 7.78 14.78 8 14.5 8H1.5C1.22 8 1 7.78 1 7.5Z"}],["path",{"d":"M1 11.5C1 11.22 1.22 11 1.5 11H8V11.5C8 11.67 8.03 11.84 8.09 12H1.5C1.22 12 1 11.78 1 11.5Z"}],["path",{"d":"M9 9.5V11.5C9 11.63 9.05 11.76 9.15 11.85C9.24 11.95 9.37 12 9.5 12H11.5C11.63 12 11.76 11.95 11.85 11.85C11.95 11.76 12 11.63 12 11.5C12 11.37 11.95 11.24 11.85 11.15C11.76 11.05 11.63 11 11.5 11H10.5C10.57 10.9 10.65 10.82 10.73 10.73C11.21 10.28 11.84 10.02 12.5 10.02C13.16 10.02 13.79 10.28 14.27 10.73C14.5 10.96 14.68 11.24 14.81 11.54C14.94 11.85 15 12.17 15 12.5C15 12.83 14.94 13.15 14.81 13.46C14.68 13.76 14.5 14.04 14.27 14.27C13.79 14.72 13.16 14.98 12.5 14.98C11.84 14.98 11.21 14.72 10.73 14.27C10.64 14.18 10.51 14.13 10.38 14.13C10.25 14.13 10.12 14.18 10.03 14.27C9.94 14.37 9.89 14.49 9.88 14.62C9.88 14.75 9.93 14.88 10.02 14.98C10.68 15.63 11.57 16 12.5 16C13.43 16 14.32 15.63 14.97 14.98C15.63 14.32 16 13.43 16 12.5C16 11.57 15.63 10.68 14.97 10.03C14.31 9.39 13.42 9.03 12.5 9.03C11.58 9.03 10.69 9.39 10.02 10.03L10 10.05V9.5C10 9.37 9.95 9.24 9.85 9.15C9.76 9.05 9.63 9 9.5 9C9.37 9 9.24 9.05 9.15 9.15C9.05 9.24 9 9.37 9 9.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugRestartFrame;
