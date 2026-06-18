import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-crayon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCrayon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.95 16.56C3.18 17.8 4.8 18.42 6.42 18.42c1.62 0 3.23-0.62 4.47-1.85l5.8-5.8-1.43-1.43-5.8 5.75c-1.66 1.66-4.37 1.66-6.08 0l-0.09-0.09c-1.66-1.66-1.66-4.37 0-6.08l0.1-0.09c1.66-1.66 4.37-1.66 6.08 0l0.480.52 1.43-1.43-0.48-0.52c-2.47-2.47-6.51-2.47-8.98 0l-0.050.14c-2.47 2.47-2.47 6.51 0 8.98zm20.06-9.12c-1.24-1.24-2.85-1.85-4.47-1.85-1.62 0-3.230.62-4.47 1.85l-5.8 5.8 1.43 1.43 5.8-5.75c1.66-1.66 4.37-1.66 6.08 0l0.10.1c1.66 1.66 1.66 4.37 0 6.08l-0.090.1c-1.66 1.66-4.37 1.66-6.08 0l-0.48-0.48-1.43 1.430.480.48c2.47 2.47 6.51 2.47 8.98 0l0.1-0.09c2.47-2.47 2.47-6.51 0-8.98-0.05 0-0.14-0.09-0.14-0.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCrayon;
