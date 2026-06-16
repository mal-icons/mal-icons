import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-newspaper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNewspaper {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.15 3.85-0.820.82-0.95-0.96c-0.39-0.39-1.02-0.39-1.42 0l-0.960.96-0.96-0.96c-0.39-0.39-1.03-0.39-1.42 0l-0.950.96-0.96-0.96a11 0 0 0-1.41 0l-0.960.96-0.96-0.96c-0.39-0.39-1.02-0.39-1.42 0L7 4.67l-0.96-0.96c-0.39-0.39-1.03-0.39-1.42 0l-0.950.96-0.82-0.82a0.50.5 0 0 0-0.850.36V19c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V4.21a0.50.5 0 0 0-0.85-0.36zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNewspaper;
