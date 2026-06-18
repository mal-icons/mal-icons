import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-code-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCodeSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 18 5 L 12 27 L 14 27 L 20 5 Z M 7.94 6.41 L 1.19 15.41 L 0.75 16 L 1.19 16.59 L 7.94 25.59 L 9.56 24.41 L 3.25 16 L 9.56 7.59 Z M 24.06 6.41 L 22.44 7.59 L 28.75 16 L 22.44 24.41 L 24.06 25.59 L 30.81 16.59 L 31.25 16 L 30.81 15.41 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCodeSolid;
