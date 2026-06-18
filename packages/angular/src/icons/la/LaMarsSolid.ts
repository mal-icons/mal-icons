import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-mars-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMarsSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 17 4 L 17 6 L 24.56 6 L 16.88 13.69 C 15.52 12.64 13.83 12 12 12 C 7.59 12 4 15.59 4 20 C 4 24.41 7.59 28 12 28 C 16.41 28 20 24.41 20 20 C 20 18.17 19.36 16.48 18.31 15.13 L 26 7.44 L 26 15 L 28 15 L 28 4 Z M 12 14 C 15.32 14 18 16.68 18 20 C 18 23.32 15.32 26 12 26 C 8.68 26 6 23.32 6 20 C 6 16.68 8.68 14 12 14 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMarsSolid;
