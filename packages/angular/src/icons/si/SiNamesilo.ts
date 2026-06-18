import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-namesilo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNamesilo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.65 0A4.65 4.65 0 0 0 0 4.65v14.7A4.65 4.65 0 0 0 4.65 24h14.7A4.65 4.65 0 0 0 24 19.35V4.65A4.65 4.65 0 0 0 19.35 0Zm7.21 4.2 4.64 3.05V8.86h-0.01c-0.120.4-2.160.72-4.640.72S7.33 9.26 7.21 8.86H7.2V7.25ZM7.2 9.38c0 0.5 2.080.91 4.650.91 2.57 0 4.65-0.41 4.65-0.91v2.59c0 0.5-2.080.91-4.650.91-2.57 0-4.65-0.4-4.65-0.9zm0 3.3c0 0.5 2.080.91 4.650.91 2.57 0 4.65-0.4 4.65-0.9v2.59c0 0.5-2.080.91-4.650.91-2.57 0-4.65-0.41-4.65-0.91zm0 3.3c0 0.5 2.080.91 4.650.91 2.57 0 4.65-0.41 4.65-0.91v2.59c0 0.5-2.080.91-4.650.91-2.57 0-4.65-0.41-4.65-0.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNamesilo;
