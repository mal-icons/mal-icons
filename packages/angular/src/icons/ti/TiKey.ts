import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiKey {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 11c0 0.730.17 1.420.45 2.05l-3.95 3.95v1.5s0.9 1.5 2 1.5h2v-2h2v-2h2.5c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5zm5 2c-1.1 0-2-0.9-2-2 0-1.10.9-2 2-2 1.11 0 2 0.9 2 2 0 1.1-0.89 2-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiKey;
