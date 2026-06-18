import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-arrows-alt-h-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaArrowsAltHSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9.28 6.78 L 0.78 15.28 L 0.09 16 L 0.78 16.72 L 9.28 25.22 L 10.72 23.78 L 3.94 17 L 28.06 17 L 21.28 23.78 L 22.72 25.22 L 31.22 16.72 L 31.91 16 L 31.22 15.28 L 22.72 6.78 L 21.28 8.22 L 28.06 15 L 3.94 15 L 10.72 8.22 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaArrowsAltHSolid;
