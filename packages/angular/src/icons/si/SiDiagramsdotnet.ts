import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-diagramsdotnet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDiagramsdotnet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.69 13.42h-2.53l-2.67-4.55a1.29 1.29 0 1.03-1.28V4.16c0-0.72-0.58-1.31-1.3-1.31H9.77c-0.73 0-1.310.58-1.31 1.3v3.44c0 0.620.43 1.15 1.03 1.28l-2.67 4.56H4.31c-0.72 0-1.310.58-1.31 1.3v3.44c0 0.730.58 1.31 1.3 1.31h4.46c0.73 0 1.31-0.58 1.31-1.3v-3.43c0-0.73-0.58-1.31-1.3-1.31h-0.44l2.65-4.52h2.06l2.66 4.52h-0.44c-0.72 0-1.310.58-1.31 1.3v3.44c0 0.730.58 1.31 1.3 1.31H19.7c0.73 0 1.31-0.58 1.31-1.3v-3.43c0-0.73-0.58-1.31-1.3-1.31zM24 22.98c0 0.56-0.46 1.02-1.01 1.02H1.02A1.02 1.02 0 10 22.99V1.02C0 0.460.46 0 1.01 0h21.96C23.54 0 24 0.46 24 1.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDiagramsdotnet;
