import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-clear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatClear {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.5 8c0.83 0 1.5-0.67 1.5-1.5S19.33 5 18.5 5H6.39l3 3h1.83l-0.55 1.28 2.09 2.09L14.21 8h4.29zm-1.06 10.88L4.12 5.56a11 0 1 0-1.41 1.41l6.26 6.26-1.65 3.84c-0.390.920.28 1.93 1.27 1.930.55 0 1.05-0.33 1.27-0.84l1.21-2.83 4.95 4.95c0.390.39 1.020.39 1.41 0 0.4-0.380.4-1.010.01-1.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatClear;
