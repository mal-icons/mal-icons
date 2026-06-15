import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-start",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugStart {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.51 3.5L12.5 8L4.5 12.5L4.51 3.5ZM4.5 2C3.72 2 3 2.63 3 3.5V12.5C3 13.37 3.72 14 4.5 14C4.75 14 5 13.94 5.24 13.81L13.24 9.31C14.25 8.73 14.25 7.27 13.24 6.69L5.24 2.19C5 2.06 4.75 2 4.5 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugStart;
