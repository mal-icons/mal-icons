import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-katana",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKatana {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0.02 22.76H12c-5.95-0.01-10.76-4.84-10.76-10.790.01-5.95 4.84-10.77 10.79-10.76 5.940.01 10.76 4.83 10.76 10.77 0 5.95-4.82 10.77-10.77 10.77zm9.48-10.86a5.56 5.56 0 0 1-9.14 3.21 6.33 6.33 0 0 0 3.25-2.06l0.10.17c0.340.580.57 1.230.68 1.89a6.28 6.28 0 0 0-0.35-2.66 6.33 6.33 0 0 0-8.94-8.63 5.56 5.56 0 0 1 7.42 6.26 6.33 6.33 0 0 0-3.42-1.76l0.09-0.17a5.53 5.53 0 0 1 1.3-1.53 6.31 6.31 0 0 0-2.12 1.64 6.33 6.33 0 0 0-3.02 12.04 5.56 5.56 0 0 1 1.71-9.56 6.33 6.33 0 0 0 0.19 3.82h-0.19a5.54 5.54 0 0 1-1.98-0.36 6.3 6.3 0 0 0 2.47 1.02 6.33 6.33 0 0 0 8.51 2.76 6.32 6.32 0 0 0 3.43-6.07zm-11.02-1.44a5.58 5.58 0 0 1 3.61 5.58 5.58 0 0 1-2.67 2.62 5.57 5.57 0 0 1-0.93-3.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKatana;
