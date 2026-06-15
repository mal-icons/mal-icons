import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-database",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDatabase {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 1C5.15 1 3 2.08 3 3.5V12.5C3 13.93 5.15 15 8 15C10.85 15 13 13.93 13 12.5V3.5C13 2.08 10.85 1 8 1ZM8 2C10.44 2 12 2.89 12 3.5C12 4.11 10.44 5 8 5C5.56 5 4 4.11 4 3.5C4 2.89 5.56 2 8 2ZM8 14C5.56 14 4 13.11 4 12.5V5.02C5.21 5.72 6.6 6.06 8 6C9.4 6.06 10.79 5.72 12 5.02V12.5C12 13.11 10.44 14 8 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDatabase;
