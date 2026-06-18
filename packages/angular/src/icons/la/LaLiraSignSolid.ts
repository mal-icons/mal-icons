import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-lira-sign-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaLiraSignSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11 4 L 11 9.91 L 8 11 L 8 13 L 11 11.91 L 11 13.91 L 8 15 L 8 17 L 11 15.91 L 11 28 L 12 28 C 17.76 28 22.83 24.15 24.34 18.59 L 24.97 16.25 L 23.03 15.75 L 22.41 18.06 C 21.22 22.43 17.43 25.42 13 25.84 L 13 15.19 L 19 13 L 19 11 L 13 13.19 L 13 11.19 L 19 9 L 19 7 L 13 9.19 L 13 4 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaLiraSignSolid;
