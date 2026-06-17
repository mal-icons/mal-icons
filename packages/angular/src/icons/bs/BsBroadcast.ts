import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-broadcast",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBroadcast {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.05 3.05a7 7 0 0 0 0 9.90.50.5 0 0 1-0.710.71 8 8 0 0 1 0-11.310.50.5 0 0 1 0.710.71m2.12 2.12a4 4 0 0 0 0 5.660.50.5 0 1 1-0.710.71 5 5 0 0 1 0-7.070.50.5 0 0 1 0.710.71m5.66-0.71a0.50.5 0 0 1 0.71 0 5 5 0 0 1 0 7.070.50.5 0 1 1-0.71-0.71 4 4 0 0 0 0-5.660.50.5 0 0 1 0-0.71m2.12-2.12a0.50.5 0 0 1 0.71 0 8 8 0 0 1 0 11.310.50.5 0 0 1-0.71-0.71 7 7 0 0 0 0-9.90.50.5 0 0 1 0-0.71zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBroadcast;
