import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-text-height-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTextHeightSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 6 L 4 8 L 11 8 L 11 26 L 13 26 L 13 8 L 20 8 L 20 6 Z M 25 6.63 L 21.5 11 L 24 11 L 24 21 L 21.5 21 L 25 25.38 L 28.5 21 L 26 21 L 26 11 L 28.5 11 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTextHeightSolid;
