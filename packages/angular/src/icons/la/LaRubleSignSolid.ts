import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-ruble-sign-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaRubleSignSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11 6 L 11 16 L 9 16 L 9 18 L 11 18 L 11 20 L 9 20 L 9 22 L 11 22 L 11 26 L 13 26 L 13 22 L 18 22 L 18 20 L 13 20 L 13 18 L 19 18 C 22.3 18 25 15.3 25 12 C 25 8.7 22.3 6 19 6 Z M 13 8 L 19 8 C 21.22 8 23 9.78 23 12 C 23 14.22 21.22 16 19 16 L 13 16 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaRubleSignSolid;
