import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-freepik",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFreepik {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.32 6.94c-0.70.7-1.2 1.51-1.71 2.31l-0.7-0.4c-0.1-0.4-0.6-0.7-1-0.7-0.60.1-0.90.5-0.9 1.1 0 0.50.50.9 10.80.1 0 0.2 0 0.3-0.1l0.70.4c-0.40.9-0.7 1.81-0.8 2.81l1.20.2c0.4-2.11 1.31-4.01 2.81-5.52Zm12.54 7.63c-1.2 0-2.11-1-2.11-2.11 0-1.2 1-2.11 2.11-2.11 1.21 0 2.11 1 2.11 2.11 0 1.2-0.9 2.11-2.11 2.11zm-7.32 1.51a2.91 2.91 0 0 1-2.91-2.91c0-1.71 1.3-3.01 2.91-3.01a2.91 2.91 0 0 1 2.91 2.91c0 1.61-1.3 3.01-2.91 3.01zm3.31-10.34a9.42 9.42 0 0 0-9.43 9.43c0 0.70.1 1.30.2 2.01 10.8 4.22 1.41 8.33 1.2 4.52-0.3 8.23-1.5 10.44-3.41 0-0.3 0-0.6-0.1-0.9-0.6-4.82-4.62-8.33-9.43-8.33Zm-0.8 13.75c-0.6 0-1.20.1-1.810.1-1.4 0-2.71-0.1-3.91-0.3-0.6-0.1-1.3-0.3-2.01-0.5 1.61 2.91 4.82 4.92 8.43 4.92 4.42 0 8.23-3.01 9.23-7.12a16.83 16.83 0 0 1-3.81 1.81c-1.810.6-3.91 1-6.12 1.1zM23.18 7.34c0.5-0.10.9-0.50.8-1.1-0.1-0.5-0.5-0.9-1-0.8-0.50.1-0.80.5-0.8 1l-0.70.6c-0.7-0.7-1.4-1.3-2.21-1.81l-0.6 1a11.23 11.23 0 0 1 4.01 4.62l1.1-0.5c-0.4-0.9-0.9-1.71-1.5-2.51l0.6-0.6c0.10.10.20.10.30.1zM12.85 3.33h-0.8l-0.1-1c0.3-0.20.5-0.60.4-1-0.1-0.6-0.6-1.1-1.2-1-0.60.1-10.6-1 1.310.10.40.30.70.60.9l0.1 1c-1.10.2-2.210.5-3.21 1l0.5 1.1a10.43 10.43 0 0 1 4.62-1.1c0.8 0 1.510.1 2.310.3l0.2-1.2c-0.7-0.2-1.5-0.3-2.41-0.3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFreepik;
