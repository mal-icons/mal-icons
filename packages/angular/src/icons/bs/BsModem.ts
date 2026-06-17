import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-modem",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsModem {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 1.5A1.5 1.5 0 0 1 7 0h2a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.4 1.5c0.350.310.870.68 1.63 1.06A0.50.5 0 0 1 10.5 16h-5a0.50.5 0 0 1-0.22-0.95c0.76-0.38 1.28-0.75 1.63-1.06A1.5 1.5 0 0 1 5.5 12.5zM7 1a0.50.5 0 0 0-0.50.5v11a0.50.5 0 0 0 0.50.5h2a0.50.5 0 0 0 0.5-0.5v-11A0.50.5 0 0 0 9 1z"}],["path",{"d":"M8.5 2.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m0 2a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m0 2a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0m0 2a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsModem;
