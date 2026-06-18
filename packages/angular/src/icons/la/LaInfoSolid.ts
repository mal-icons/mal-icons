import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-info-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaInfoSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 13.8 4 12 5.8 12 8 C 12 10.2 13.8 12 16 12 C 18.2 12 20 10.2 20 8 C 20 5.8 18.2 4 16 4 Z M 16 6 C 17.12 6 18 6.88 18 8 C 18 9.12 17.12 10 16 10 C 14.88 10 14 9.12 14 8 C 14 6.88 14.88 6 16 6 Z M 11 13 L 11 18 L 13 18 L 13 23 L 11 23 L 11 28 L 21 28 L 21 23 L 19 23 L 19 13 Z M 13 15 L 17 15 L 17 25 L 19 25 L 19 26 L 13 26 L 13 25 L 15 25 L 15 16 L 13 16 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaInfoSolid;
