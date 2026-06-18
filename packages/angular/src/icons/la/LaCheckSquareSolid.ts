import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-check-square-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCheckSquareSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 4 L 4 28 L 28 28 L 28 12.19 L 26 14.19 L 26 26 L 6 26 L 6 6 L 25.81 6 L 27.81 4 Z M 27.28 7.28 L 16 18.56 L 11.72 14.28 L 10.28 15.72 L 15.28 20.72 L 16 21.41 L 16.72 20.72 L 28.72 8.72 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCheckSquareSolid;
