import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-max",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMax {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.77 0A1.77 1.77 0 0 0 0 1.77V22.23A1.77 1.77 0 0 0 1.77 24H22.23A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0zm12.49 3.28a4.3 4.3 0 0 1 4.3 4.3 4.3 4.3 0 0 1-1.99 3.63 6.09 6.09 0 0 1 1.05 3.42 6.09 6.09 0 0 1-6.08 6.09 6.09 6.09 0 0 1-6.08-6.08 6.09 6.09 0 0 1 4.66-5.92 4.3 4.3 0 0 1-0.15-1.14 4.3 4.3 0 0 1 4.3-4.3zm0 1.85a2.45 2.45 0 0 0-2.45 2.45 2.45 2.45 0 0 0 2.45 2.45 2.45 2.45 0 0 0 2.45-2.45 2.45 2.45 0 0 0-2.45-2.45zm-2.72 5.27a4.24 4.24 0 0 0-4.24 4.24 4.24 4.24 0 0 0 4.24 4.24 4.24 4.24 0 0 0 4.24-4.24 4.24 4.24 0 0 0-4.24-4.24zm0.03 2.54a1.78 1.78 0 1 1 0 3.56 1.78 1.78 0 0 1 0-3.56Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMax;
