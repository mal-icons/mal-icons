import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-turn-slight-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTurnSlightLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.66 5c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v3.66c0 0.550.45 1 1 1s1-0.45 1-1V7.41l5 5V19c0 0.550.45 1 1 1s1-0.45 1-1v-6.58c0-0.53-0.21-1.04-0.59-1.41l-5-5h1.24A1.02 1.02 0 0 0 11.66 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTurnSlightLeft;
