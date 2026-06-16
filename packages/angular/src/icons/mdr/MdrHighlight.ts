import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-highlight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHighlight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.29 14.29 9 17v4c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-4l2.71-2.71a0.990.99 0 0 0 0.29-0.71V10c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v3.59c0 0.260.110.520.290.7zM12 2c0.55 0 1 0.45 1 1v1c0 0.55-0.45 1-1 1s-1-0.45-1-1V3c0-0.550.45-1 1-1zM4.21 5.17c0.39-0.39 1.02-0.39 1.42 0l0.710.71a11 0 1 1-1.41 1.41l-0.72-0.71a11 0 0 1 0-1.41zm13.460.710.71-0.71a11 0 1 1 1.41 1.41l-0.710.71a11 0 1 1-1.41-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHighlight;
