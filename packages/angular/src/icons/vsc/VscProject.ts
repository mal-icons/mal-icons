import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-project",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscProject {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 1C2.34 1 1 2.34 1 4V12C1 13.66 2.34 15 4 15H12C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1H4ZM2 4C2 2.89 2.9 2 4 2H12C13.1 2 14 2.89 14 4H2ZM2 5H14V12C14 13.1 13.1 14 12 14H4C2.9 14 2 13.1 2 12V5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscProject;
