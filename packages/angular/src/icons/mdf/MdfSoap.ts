import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-soap",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSoap {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m9.12 5-7.18 6.79c-0.60.56-0.94 1.35-0.94 2.18V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75a1.25 1.25 0 0 0 0-2.5H12v-1h6.75a1.25 1.25 0 0 0 0-2.5H8.86c0.64-1.11 1.48-2.58 1.49-2.61a1.07 1.07 0 0 0-0.12-1.23C10.22 6.12 9.12 5 9.12 5zM14 6.25c0.41 0 0.750.340.750.75s-0.340.75-0.750.75-0.75-0.34-0.75-0.750.34-0.750.75-0.75m0-1.5c-1.24 0-2.25 1.01-2.25 2.25S12.76 9.25 14 9.25 16.25 8.24 16.25 7 15.24 4.75 14 4.75zm5.750.75c0.28 0 0.50.220.50.5s-0.220.5-0.50.5-0.5-0.22-0.5-0.50.22-0.50.5-0.5m0-1.5c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zM16.5 1c-0.83 0-1.50.67-1.5 1.5S15.67 4 16.5 4 18 3.33 18 2.5 17.33 1 16.5 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSoap;
