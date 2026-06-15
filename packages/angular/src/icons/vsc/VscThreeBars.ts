import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-three-bars",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscThreeBars {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 3.5C2 3.22 2.22 3 2.5 3H13.5C13.78 3 14 3.22 14 3.5C14 3.78 13.78 4 13.5 4H2.5C2.22 4 2 3.78 2 3.5ZM2 7.5C2 7.22 2.22 7 2.5 7H13.5C13.78 7 14 7.22 14 7.5C14 7.78 13.78 8 13.5 8H2.5C2.22 8 2 7.78 2 7.5ZM2 11.5C2 11.22 2.22 11 2.5 11H13.5C13.78 11 14 11.22 14 11.5C14 11.78 13.78 12 13.5 12H2.5C2.22 12 2 11.78 2 11.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscThreeBars;
