import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-arrows-alt-v-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaArrowsAltVSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 2.09 L 15.28 2.78 L 7.28 10.78 L 8.72 12.22 L 15 5.94 L 15 26.06 L 8.72 19.78 L 7.28 21.22 L 15.28 29.22 L 16 29.91 L 16.72 29.22 L 24.72 21.22 L 23.28 19.78 L 17 26.06 L 17 5.94 L 23.28 12.22 L 24.72 10.78 L 16.72 2.78 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaArrowsAltVSolid;
