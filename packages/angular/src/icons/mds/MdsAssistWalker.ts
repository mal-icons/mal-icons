import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-assist-walker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAssistWalker {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12.5","cy":"4.5","r":"2"}],["path",{"d":"M19.77 17.72 19 10h-3c-1.5-0.02-2.86-0.54-3.76-1.44l-2-1.98A1.95 1.95 0 0 0 8.83 6c-0.51 0-1.020.2-1.410.59l-4.2 4.17 2.08 4.07-3.15 4.05 1.57 1.24 3.68-4.73-0.17-1.360.770.72V20h2v-6.12l-2.12-2.12 2.36-2.36c0.940.94 1.72 1.82 3.59 2.32L13 20h1.5l0.41-3.5h3.18l0.14 1.22c-0.440.26-0.730.74-0.73 1.28 0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5c0-0.54-0.29-1.02-0.73-1.28zM15.09 15l0.41-3.5h2l0.41 3.5h-2.82z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAssistWalker;
