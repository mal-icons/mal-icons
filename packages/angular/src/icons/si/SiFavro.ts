import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-favro",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFavro {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.59 1.66a6.62 6.62 0 0 0-6.62 6.62v0.77a7.5 7.5 0 0 1 3.31 3.27V8.28a3.3 3.3 0 0 1 3.31-3.31A1.66 1.66 0 0 0 13.24 3.31a1.66 1.66 0 0 0-1.66-1.65zm-9.93 7.45A1.66 1.66 0 0 0 0 10.76c0 0.910.75 1.66 1.66 1.66a3.3 3.3 0 0 1 3.31 3.31v4.97c0 0.910.75 1.66 1.66 1.66a1.66 1.66 0 0 0 1.66-1.65v-4.97a6.62 6.62 0 0 0-6.62-6.62zm15.72 0a6.62 6.62 0 0 0-6.62 6.62 6.62 6.62 0 0 0 6.62 6.62 6.58 6.58 0 0 0 3.46-0.98c0.260.580.840.98 1.50.98A1.66 1.66 0 0 0 24 20.69v-9.93a1.66 1.66 0 0 0-1.65-1.65c-0.68 0-1.240.4-1.50.98a6.57 6.57 0 0 0-3.46-0.98zm0 3.31a3.3 3.3 0 0 1 3.31 3.31 3.3 3.3 0 0 1-3.31 3.31 3.3 3.3 0 0 1-3.31-3.31 3.3 3.3 0 0 1 3.31-3.31z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFavro;
