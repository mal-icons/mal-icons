import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-step-over",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugStepOver {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 13C10 14.1 9.1 15 8 15C6.9 15 6 14.1 6 13C6 11.9 6.9 11 8 11C9.1 11 10 11.9 10 13ZM13.25 2C12.84 2 12.5 2.34 12.5 2.75V4.03C11.38 2.76 9.76 2 8 2C5.03 2 2.48 4.21 2.06 7.14C2 7.55 2.29 7.93 2.7 7.99C2.73 8 2.77 8 2.8 8C3.17 8 3.49 7.73 3.55 7.36C3.86 5.16 5.78 3.5 8 3.5C9.53 3.5 10.92 4.26 11.74 5.5H9.75C9.34 5.5 9 5.84 9 6.25C9 6.67 9.34 7 9.75 7H13.25C13.66 7 14 6.67 14 6.25V2.75C14 2.34 13.66 2 13.25 2L13.25 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugStepOver;
