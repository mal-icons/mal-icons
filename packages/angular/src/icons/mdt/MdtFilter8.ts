import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-filter-8",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFilter8 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 17h14V3H7v14zm4-5.5c0-0.830.67-1.5 1.5-1.5-0.83 0-1.5-0.67-1.5-1.5V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5c0 0.83-0.67 1.5-1.5 1.50.83 0 1.50.67 1.5 1.5V13a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1.5zM13 7h2v2h-2zm0 4h2v2h-2z","opacity":".3"}],["path",{"d":"M21 1H7c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm0 16H7V3h14v14zM3 23h16v-2H3V5H1v16c0 1.10.9 2 2 2zm10-8h2a2 2 0 0 0 2-2v-1.5c0-0.83-0.67-1.5-1.5-1.50.83 0 1.5-0.67 1.5-1.5V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5c0 0.830.67 1.5 1.5 1.5-0.83 0-1.50.67-1.5 1.5V13a2 2 0 0 0 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFilter8;
