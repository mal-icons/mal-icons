import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-pause",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugPause {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 2.75V13.25C5.5 13.66 5.16 14 4.75 14C4.34 14 4 13.66 4 13.25V2.75C4 2.34 4.34 2 4.75 2C5.16 2 5.5 2.34 5.5 2.75ZM11.25 2C10.84 2 10.5 2.34 10.5 2.75V13.25C10.5 13.66 10.84 14 11.25 14C11.66 14 12 13.66 12 13.25V2.75C12 2.34 11.66 2 11.25 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugPause;
