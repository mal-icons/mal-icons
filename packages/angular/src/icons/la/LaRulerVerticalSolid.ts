import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-ruler-vertical-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaRulerVerticalSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 8 0 L 8 32 L 24 32 L 24 0 L 8 0 z M 10 2 L 22 2 L 22 5 L 15 5 L 15 7 L 22 7 L 22 9 L 18 9 L 18 11 L 22 11 L 22 13 L 15 13 L 15 15 L 22 15 L 22 17 L 18 17 L 18 19 L 22 19 L 22 21 L 15 21 L 15 23 L 22 23 L 22 25 L 18 25 L 18 27 L 22 27 L 22 30 L 10 30 L 10 2 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaRulerVerticalSolid;
