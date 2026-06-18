import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mermaid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMermaid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.99 2.12A12.22 12.22 0 0 0 12 10.15 12.22 12.22 0 0 0 0.01 2.12a12.23 12.23 0 0 0 5.32 10.6 6.56 6.56 0 0 1 2.85 5.42v3.75h7.65v-3.75a6.56 6.56 0 0 1 2.84-5.42 12.22 12.22 0 0 0 5.32-10.6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMermaid;
