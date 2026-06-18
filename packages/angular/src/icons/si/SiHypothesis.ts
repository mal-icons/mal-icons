import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hypothesis",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHypothesis {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.43 0c-0.93 0-1.710.77-1.71 1.72v17.14c0 0.940.78 1.71 1.71 1.71h5.95l2.62 3.43 2.62-3.43h5.95c0.93 0 1.72-0.77 1.72-1.71V1.72c0-0.95-0.79-1.72-1.72-1.72H3.43m1.71 3.43h2.58v6s0.86-1.71 2.56-1.71c1.72 0 3.460.85 3.46 3.52v5.9h-2.58V12c0-1.39-0.88-1.93-1.73-1.71-0.860.21-1.71 1.12-1.71 3v3.85h-2.58V3.43m12.86 10.29c0.95 0 1.720.78 1.72 1.7a1.71 1.71 0 1-1.72 1.71 1.71 1.71 0 1-1.71-1.71c0-0.920.76-1.71 1.71-1.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHypothesis;
