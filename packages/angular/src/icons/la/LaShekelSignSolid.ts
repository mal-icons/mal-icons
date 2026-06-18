import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-shekel-sign-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaShekelSignSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 7 5 L 7 27 L 9 27 L 9 7 L 10 7 C 13.88 7 17 10.12 17 14 L 17 21 L 19 21 L 19 14 C 19 9.04 14.96 5 10 5 Z M 22 5 L 22 25 L 21 25 C 17.12 25 14 21.88 14 18 L 14 11 L 12 11 L 12 18 C 12 22.96 16.04 27 21 27 L 24 27 L 24 5 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaShekelSignSolid;
