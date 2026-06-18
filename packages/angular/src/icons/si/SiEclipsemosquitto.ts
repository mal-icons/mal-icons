import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-eclipsemosquitto",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiEclipsemosquitto {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.35 11.42c0 2.640.96 5.11 2.64 7.01l-1.010.9A11.97 11.97 0 10 11.42C0 8.07 1.38 5.03 3.6 2.85l0.050.05L6.64 5.57a7.94 7.94 0 0-1.43 9.96l1.03-0.92a6.59 6.59 0 11.42-8.13l1.020.920.910.810.940.84a2.78 2.78 0 0-1.31 2.37c0 1.230.8 2.27 1.9 2.65l0.1 1.3a4.02 4.02 0 1-2.48-6.27l-0.9-0.8100a5.23 5.23 0 0.21 6.55l-3.02 2.71a9.29 9.29 0 1-0.21-11.97L3.78 4.66a10.6 10.6 0 0-2.41 6.14l-0.010.010.010c-0.010.2-0.020.41-0.020.61zm11.54 2.64a2.79 2.79 0 0.59-5.01l0.94-0.840.91-0.81 1.02-0.91a6.59 6.59 0 11.42 8.13l1.030.92a7.94 7.94 0 0-1.43-9.96l2.98-2.670.05-0.04A11.96 11.96 0 124 11.42c0 2.98-1.09 5.77-2.98 7.92l-1.01-0.9a10.61 10.61 0 2.62-7.62l0.010-0.01-0.01a10.6 10.6 0 0-2.41-6.14l-1.010.9a9.29 9.29 0 1-0.21 11.97l-3.02-2.71a5.23 5.23 0 0.21-6.55l00-0.90.81a4.02 4.02 0 1-2.48 6.27zM12 21.15l0.34-4.570.27-3.71a1.56 1.56 0 10-1.21 0l0.27 3.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiEclipsemosquitto;
