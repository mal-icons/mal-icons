import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-yen-sign-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaYenSignSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 7.19 5 L 14.06 16 L 10 16 L 10 18 L 15 18 L 15 20 L 10 20 L 10 22 L 15 22 L 15 27 L 17 27 L 17 22 L 22 22 L 22 20 L 17 20 L 17 18 L 22 18 L 22 16 L 17.94 16 L 24.81 5 L 22.44 5 L 16 15.34 L 9.56 5 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaYenSignSolid;
