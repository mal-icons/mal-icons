import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-turn-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTurnRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.29 13.29c0.390.39 1.020.39 1.41 0l2.59-2.59a11 0 0 0 0-1.41L17.7 6.7a11 0 1 0-1.41 1.41l0.880.89H9c-1.1 0-2 0.9-2 2v8c0 0.550.45 1 1 1s1-0.45 1-1v-8h8.17l-0.880.88a11 0 0 0 0 1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTurnRight;
