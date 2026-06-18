import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-ruler-combined-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaRulerCombinedSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 4 L 4 28 L 28 28 L 28 19 L 13 19 L 13 18 L 13 16 L 13 14 L 13 12 L 13 10 L 13 8 L 13 4 L 4 4 z M 6 6 L 11 6 L 11 8 L 8 8 L 8 10 L 11 10 L 11 12 L 8 12 L 8 14 L 11 14 L 11 16 L 8 16 L 8 18 L 11 18 L 11 19.59 L 6 24.59 L 6 6 z M 12.41 21 L 14 21 L 14 24 L 16 24 L 16 21 L 18 21 L 18 24 L 20 24 L 20 21 L 22 21 L 22 24 L 24 24 L 24 21 L 26 21 L 26 26 L 7.41 26 L 12.41 21 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaRulerCombinedSolid;
