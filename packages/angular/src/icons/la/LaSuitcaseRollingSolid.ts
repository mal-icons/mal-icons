import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-suitcase-rolling-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSuitcaseRollingSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 14 3 C 12.35 3 11 4.35 11 6 L 11 9 L 13 9 L 13 6 C 13 5.45 13.45 5 14 5 L 18 5 C 18.55 5 19 5.45 19 6 L 19 9 L 21 9 L 21 6 C 21 4.35 19.65 3 18 3 L 14 3 z M 7 11 L 7 26 L 9 26 L 9 28 L 11 28 L 11 26 L 21 26 L 21 28 L 23 28 L 23 26 L 25 26 L 25 11 L 7 11 z M 9 13 L 23 13 L 23 24 L 9 24 L 9 13 z M 11 16 L 11 18 L 21 18 L 21 16 L 11 16 z M 11 20 L 11 22 L 21 22 L 21 20 L 11 20 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSuitcaseRollingSolid;
