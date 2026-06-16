import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-turn-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTurnLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.71 13.29a11 0 0 1-1.41 0L3.71 10.7a11 0 0 1 0-1.41L6.3 6.7a11 0 1 1 1.41 1.41L6.83 9H15c1.1 0 2 0.9 2 2v8c0 0.55-0.45 1-1 1s-1-0.45-1-1v-8H6.83l0.880.88c0.390.390.39 1.02 0 1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTurnLeft;
