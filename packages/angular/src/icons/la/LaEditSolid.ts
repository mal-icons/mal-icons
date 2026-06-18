import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-edit-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaEditSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 25 4.03 C 24.23 4.03 23.48 4.33 22.91 4.91 L 13 14.78 L 12.78 15 L 12.72 15.31 L 12.03 18.81 L 11.72 20.28 L 13.19 19.97 L 16.69 19.28 L 17 19.22 L 17.22 19 L 27.09 9.09 C 28.25 7.94 28.25 6.06 27.09 4.91 C 26.52 4.33 25.77 4.03 25 4.03 Z M 25 5.97 C 25.23 5.97 25.46 6.09 25.69 6.31 C 26.13 6.76 26.13 7.24 25.69 7.69 L 16 17.38 L 14.28 17.72 L 14.63 16 L 24.31 6.31 C 24.54 6.09 24.77 5.97 25 5.97 Z M 4 8 L 4 28 L 24 28 L 24 14.81 L 22 16.81 L 22 26 L 6 26 L 6 10 L 15.19 10 L 17.19 8 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaEditSolid;
