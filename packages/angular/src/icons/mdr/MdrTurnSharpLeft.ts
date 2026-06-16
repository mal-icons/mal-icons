import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-turn-sharp-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTurnSharpLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m8 6.830.880.88a11 0 1 0 1.41-1.41L7.71 3.71a11 0 0 0-1.41 0L3.71 6.29A11 0 1 0 5.12 7.7L6 6.83V13c0 1.10.9 2 2 2h8v5c0 0.550.45 1 1 1s1-0.45 1-1v-5c0-1.1-0.9-2-2-2H8V6.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTurnSharpLeft;
