import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-bubble-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBubbleChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 12c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5z","opacity":".3"}],["circle",{"cx":"15.01","cy":"18","r":"1","opacity":".3"}],["circle",{"cx":"7","cy":"14","r":"2","opacity":".3"}],["path",{"d":"M7 18c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm11.01 6c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-4 0c0-0.550.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1zm2.49-4c3.03 0 5.5-2.47 5.5-5.5S19.53 3 16.5 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5zm0-9C18.43 5 20 6.57 20 8.5S18.43 12 16.5 12 13 10.43 13 8.5 14.57 5 16.5 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBubbleChart;
