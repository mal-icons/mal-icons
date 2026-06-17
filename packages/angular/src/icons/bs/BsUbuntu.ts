import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-ubuntu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUbuntu {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.27 9.53a2.27 2.27 0 1 0 0-4.55 2.27 2.27 0 0 0 0 4.55Zm9.47-4.98a2.27 2.27 0 1 0 0-4.55 2.27 2.27 0 0 0 0 4.55M7.4 13.11a5.54 5.54 0 0 1-3.77-2.88 3.27 3.27 0 0 1-1.940.24 7.4 7.4 0 0 0 5.33 4.47c0.530.11 1.070.17 1.610.17a3.25 3.25 0 0 1-0.67-1.9 6 6 0 0 1-0.56-0.09m3.83 2.29a2.27 2.27 0 1 0 0-4.55 2.27 2.27 0 0 0 0 4.55m3.16-3.11a7.44 7.44 0 0 0 0.37-8.73 3.3 3.3 0 0 1-1.28 1.5 5.57 5.57 0 0 1-0.18 5.54 3.26 3.26 0 0 1 1.09 1.69M2.1 4a3.3 3.3 0 0 1 1.90.49 5.54 5.54 0 0 1 4.46-2.39c0.04-0.670.28-1.310.69-1.84a7.47 7.47 0 0 0-7.05 3.75"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUbuntu;
