import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nextflow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNextflow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.01 4.42V0c6.230.26 11.23 5.27 11.48 11.51H7.06C6.83 7.72 3.79 4.670.01 4.42m7.08 8.09h4.42C11.25 18.74 6.24 23.740.01 23.99v-4.42c3.79-0.23 6.83-3.27 7.08-7.05m9.83-1.04h-4.42C12.75 5.25 17.760.25 24 0v4.42c-3.790.23-6.83 3.26-7.08 7.05m7.08 8.1V24c-6.23-0.26-11.23-5.27-11.48-11.51h4.42c0.23 3.79 3.27 6.83 7.05 7.08"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNextflow;
