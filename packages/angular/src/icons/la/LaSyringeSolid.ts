import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-syringe-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSyringeSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 23.22 3.78 L 21.78 5.22 L 22.16 5.59 L 19.88 7.88 L 21.28 9.31 L 23.56 7 L 25 8.44 L 22.69 10.72 L 24.13 12.13 L 26.41 9.84 L 26.78 10.22 L 28.22 8.78 Z M 17.72 7.28 L 16.28 8.72 L 16.94 9.38 L 7 19.34 L 6.66 19.69 L 6.72 20.16 L 7.06 23.34 L 7.09 23.69 L 7.19 23.75 L 3.94 27 L 6.78 27 L 8.81 24.97 L 11.84 25.28 L 12.31 25.34 L 12.66 25 L 22.63 15.06 L 23.28 15.72 L 24.72 14.28 Z M 18.38 10.81 L 21.19 13.63 L 11.59 23.25 L 9.22 22.97 L 9.03 22.78 L 8.75 20.41 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSyringeSolid;
