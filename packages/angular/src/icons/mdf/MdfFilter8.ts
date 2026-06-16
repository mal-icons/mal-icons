import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-filter-8",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfFilter8 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 5H1v16c0 1.10.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm0 16H7V3h14v14zm-8-2h2a2 2 0 0 0 2-2v-1.5c0-0.83-0.67-1.5-1.5-1.50.83 0 1.5-0.67 1.5-1.5V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5c0 0.830.67 1.5 1.5 1.5-0.83 0-1.50.67-1.5 1.5V13a2 2 0 0 0 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfFilter8;
