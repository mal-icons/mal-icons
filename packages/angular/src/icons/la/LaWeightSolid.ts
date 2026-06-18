import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-weight-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWeightSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 6 L 4 26 L 28 26 L 28 6 Z M 6 8 L 26 8 L 26 24 L 6 24 Z M 16 10 C 11.67 10 8.44 12.16 8.44 12.16 L 7.66 12.69 L 8.16 13.5 L 11.16 18.5 L 11.44 19 L 20.56 19 L 20.84 18.5 L 23.84 13.5 L 24.34 12.69 L 23.56 12.16 C 23.56 12.16 20.33 10 16 10 Z M 16 12 C 18.82 12 20.69 12.91 21.59 13.41 L 19.47 17 L 17.63 17 L 18.91 14.44 L 17.09 13.56 L 15.38 17 L 12.53 17 L 10.41 13.41 C 11.31 12.91 13.18 12 16 12 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWeightSolid;
