import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-duckdb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDuckdb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.36 0 0 5.36 0 12s5.36 12 12 12 12-5.36 12-12S18.64 0 12 0zM9.5 7.03a4.97 4.97 0 0 1 4.97 4.97 4.97 4.97 0 0 1-4.97 4.97A4.97 4.97 0 0 1 4.53 12a4.97 4.97 0 0 1 4.97-4.97zm6.56 3.18h2.35c0.98 0 1.790.78 1.79 1.76s-0.81 1.79-1.79 1.79h-2.35v-3.55z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDuckdb;
