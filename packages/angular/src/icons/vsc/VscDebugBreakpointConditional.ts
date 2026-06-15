import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-breakpoint-conditional",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugBreakpointConditional {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 4C5.79 4 4 5.79 4 8C4 10.21 5.79 12 8 12C10.21 12 12 10.21 12 8C12 5.79 10.21 4 8 4ZM9.5 10H6.5C6.22 10 6 9.78 6 9.5C6 9.22 6.22 9 6.5 9H9.5C9.78 9 10 9.22 10 9.5C10 9.78 9.78 10 9.5 10ZM9.5 7H6.5C6.22 7 6 6.78 6 6.5C6 6.22 6.22 6 6.5 6H9.5C9.78 6 10 6.22 10 6.5C10 6.78 9.78 7 9.5 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugBreakpointConditional;
