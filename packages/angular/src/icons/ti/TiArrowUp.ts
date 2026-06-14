import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 5.59l-4.71 4.71c-0.390.39-0.39 1.02 0 1.41s1.020.39 1.41 0l2.29-2.29v7.59c0 0.550.45 1 1 1s1-0.45 1-1v-7.59l2.29 2.29c0.20.20.450.290.710.29s0.51-0.10.71-0.29c0.39-0.390.39-1.02 0-1.41l-4.71-4.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowUp;
