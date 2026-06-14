import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.71 13.29c-0.39-0.39-1.02-0.39-1.41 0l-2.29 2.29v-7.59c0-0.55-0.45-1-1-1s-1 0.45-1 1v7.59l-2.29-2.29c-0.39-0.39-1.02-0.39-1.41 0s-0.39 1.02 0 1.41l4.71 4.71 4.71-4.71c0.39-0.390.39-1.02 0-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowDown;
