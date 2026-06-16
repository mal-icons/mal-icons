import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-unpublished",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrUnpublished {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.49 20.49 3.51 3.51A11 0 1 0 2.1 4.92l1.56 1.56a9.94 9.94 0 0 0-1.59 6.7c0.53 4.54 4.21 8.22 8.74 8.74 2.490.29 4.81-0.34 6.7-1.59l1.56 1.56c0.390.39 1.020.39 1.41 0 0.4-0.380.4-1.010.01-1.4zm-10.61-4.6-2.83-2.83a11 0 1 1 1.41-1.41l2.12 2.120.18-0.18L12.17 15l-0.880.88c-0.390.4-1.020.4-1.410.01zm3.71-5.13-7.1-7.1a9.94 9.94 0 0 1 6.7-1.59c4.540.53 8.22 4.21 8.74 8.740.29 2.49-0.34 4.82-1.59 6.7L15 12.17l1.94-1.94a11 0 1 0-1.41-1.41l-1.94 1.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrUnpublished;
