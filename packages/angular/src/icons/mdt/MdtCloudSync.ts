import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-cloud-sync",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCloudSync {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.51 18H15c-0.55 0-1-0.45-1-1s0.45-1 1-1h1.25v-0.25c0-0.970.78-1.75 1.75-1.75s1.750.78 1.75 1.75V17h1.76c0.28 0 0.50.220.50.5-0.010.27-0.230.5-0.50.5z","opacity":".3"}],["path",{"d":"M21.5 14.98c-0.02 0-0.03 0-0.050.01A3.49 3.49 0 0 0 18 12c-1.4 0-2.60.83-3.16 2.02A2.99 2.99 0 0 0 12 17c0 1.66 1.34 3 3 3l6.5-0.02a2.5 2.5 0 0 0 0-5zm0.01 3.02H15c-0.55 0-1-0.45-1-1s0.45-1 1-1h1.25v-0.25c0-0.970.78-1.75 1.75-1.75s1.750.78 1.75 1.75V17h1.76c0.28 0 0.50.220.50.5-0.010.27-0.230.5-0.50.5zM10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.770.78 3.34 2 4.44V14h2v6H4v-2h2.73A7.94 7.94 0 0 1 4 12c0-3.73 2.55-6.85 6-7.74zM20 6h-2.73a7.98 7.98 0 0 1 2.66 5h-2.02c-0.23-1.36-0.93-2.55-1.91-3.44V10h-2V4h6v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCloudSync;
