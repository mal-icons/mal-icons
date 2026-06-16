import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-turn-sharp-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTurnSharpRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16 6.83-0.880.88a11 0 1 1-1.41-1.41l2.59-2.59a11 0 0 1 1.41 0L20.3 6.3a11 0 1 1-1.41 1.41L18 6.83V13c0 1.1-0.9 2-2 2H8v5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-5c0-1.10.9-2 2-2h8V6.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTurnSharpRight;
