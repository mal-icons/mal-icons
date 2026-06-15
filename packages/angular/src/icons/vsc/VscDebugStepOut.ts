import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-step-out",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugStepOut {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 13C10 14.1 9.1 15 8 15C6.9 15 6 14.1 6 13C6 11.9 6.9 11 8 11C9.1 11 10 11.9 10 13ZM12.03 4.72L8.53 1.22C8.24 0.93 7.76 0.93 7.47 1.22L3.97 4.72C3.68 5.01 3.68 5.49 3.97 5.78C4.26 6.07 4.74 6.07 5.03 5.78L7.25 3.56V9.25C7.25 9.66 7.59 10 8 10C8.41 10 8.75 9.66 8.75 9.25V3.56L10.97 5.78C11.12 5.93 11.31 6 11.5 6C11.69 6 11.88 5.93 12.03 5.78C12.32 5.49 12.32 5.01 12.03 4.72Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugStepOut;
