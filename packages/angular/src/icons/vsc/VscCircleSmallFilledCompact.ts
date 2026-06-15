import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-circle-small-filled-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCircleSmallFilledCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 6C8 6.39 7.88 6.78 7.66 7.11C7.44 7.44 7.13 7.69 6.77 7.85C6.4 8 6 8.04 5.61 7.96C5.22 7.88 4.87 7.69 4.59 7.41C4.31 7.13 4.12 6.78 4.04 6.39C3.96 6 4 5.6 4.15 5.23C4.3 4.87 4.56 4.55 4.89 4.34C5.22 4.12 5.61 4 6 4C6.53 4 7.04 4.21 7.42 4.58C7.79 4.96 8 5.47 8 6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCircleSmallFilledCompact;
