import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-layer-group-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaLayerGroupSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 5.94 L 15.63 6.06 L 5.63 10.06 L 3.31 11 L 5.63 11.94 L 9.53 13.5 L 5.63 15.06 L 3.31 16 L 5.63 16.94 L 9.53 18.5 L 5.63 20.06 L 3.31 21 L 5.63 21.94 L 15.63 25.94 L 16 26.06 L 16.38 25.94 L 26.38 21.94 L 28.69 21 L 26.38 20.06 L 22.47 18.5 L 26.38 16.94 L 28.69 16 L 26.38 15.06 L 22.47 13.5 L 26.38 11.94 L 28.69 11 L 26.38 10.06 L 16.38 6.06 Z M 16 8.09 L 23.28 11 L 16 13.91 L 8.72 11 Z M 12.25 14.59 L 15.63 15.94 L 16 16.06 L 16.38 15.94 L 19.75 14.59 L 23.28 16 L 16 18.91 L 8.72 16 Z M 12.25 19.59 L 15.63 20.94 L 16 21.06 L 16.38 20.94 L 19.75 19.59 L 23.28 21 L 16 23.91 L 8.72 21 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaLayerGroupSolid;
