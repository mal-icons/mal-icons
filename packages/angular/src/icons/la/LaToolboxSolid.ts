import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-toolbox-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaToolboxSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 13 5 C 11.91 5 11 5.91 11 7 L 11 9 L 2 9 L 2 27 L 30 27 L 30 9 L 21 9 L 21 7 C 21 5.91 20.09 5 19 5 Z M 13 7 L 19 7 L 19 9 L 13 9 Z M 4 11 L 28 11 L 28 16 L 24 16 L 24 15 L 20 15 L 20 16 L 12 16 L 12 15 L 8 15 L 8 16 L 4 16 Z M 4 18 L 8 18 L 8 19 L 12 19 L 12 18 L 20 18 L 20 19 L 24 19 L 24 18 L 28 18 L 28 25 L 4 25 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaToolboxSolid;
