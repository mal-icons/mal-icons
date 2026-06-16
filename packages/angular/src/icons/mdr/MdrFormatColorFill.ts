import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-color-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatColorFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.94 16.56c0.290.290.680.44 1.060.44s0.77-0.15 1.06-0.44l5.5-5.5c0.59-0.580.59-1.53 0-2.12L8.320.7a11 0 1 0-1.41 1.41l1.68 1.68-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5zM10 5.21 14.79 10H5.21L10 5.21zM19 17c1.1 0 2-0.9 2-2 0-1.33-2-3.5-2-3.5s-2 2.17-2 3.5c0 1.10.9 2 2 2zm1 3H4c-1.1 0-2 0.9-2 2s0.9 2 2 2h16c1.1 0 2-0.9 2-2s-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatColorFill;
