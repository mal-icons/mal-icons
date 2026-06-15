import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-step-into",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugStepInto {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 13C10 14.1 9.1 15 8 15C6.9 15 6 14.1 6 13C6 11.9 6.9 11 8 11C9.1 11 10 11.9 10 13ZM12.03 5.22C11.74 4.93 11.26 4.93 10.97 5.22L8.75 7.44V1.75C8.75 1.34 8.41 1 8 1C7.59 1 7.25 1.34 7.25 1.75V7.44L5.03 5.22C4.74 4.93 4.26 4.93 3.97 5.22C3.68 5.51 3.68 5.99 3.97 6.28L7.47 9.78C7.61 9.93 7.81 10 8 10C8.19 10 8.38 9.93 8.53 9.78L12.03 6.28C12.32 5.99 12.32 5.51 12.03 5.22L12.03 5.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugStepInto;
