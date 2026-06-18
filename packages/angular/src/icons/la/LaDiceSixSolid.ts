import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-dice-six-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDiceSixSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 11 8 A 2 2 0 0 0 11 12 A 2 2 0 0 0 11 8 z M 21 8 A 2 2 0 0 0 21 12 A 2 2 0 0 0 21 8 z M 11 14 A 2 2 0 0 0 11 18 A 2 2 0 0 0 11 14 z M 21 14 A 2 2 0 0 0 21 18 A 2 2 0 0 0 21 14 z M 11 20 A 2 2 0 0 0 11 24 A 2 2 0 0 0 11 20 z M 21 20 A 2 2 0 0 0 21 24 A 2 2 0 0 0 21 20 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDiceSixSolid;
