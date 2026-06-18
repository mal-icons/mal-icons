import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-openverse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOpenverse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.88 1.02C2.18 1.02 0 3.21 0 5.93c0 2.7 2.18 4.92 4.88 4.92Zm7.12 0c-2.69 0-4.88 2.2-4.88 4.91 0 2.7 2.18 4.92 4.88 4.92zm7.12 0c-2.7 0-4.88 2.2-4.88 4.91 0 2.71 2.19 4.92 4.88 4.92 2.7 0 4.88-2.2 4.88-4.91 0-2.71-2.19-4.91-4.88-4.91zm0 12.09c-2.7 0-4.88 2.2-4.88 4.92 0 2.71 2.19 4.91 4.88 4.91 2.7 0 4.88-2.2 4.88-4.91 0-2.71-2.19-4.91-4.88-4.91ZM12 13.13c-2.69 0-4.88 2.2-4.88 4.9S9.3 22.94 12 22.94zm-7.120.04c-2.7 0-4.88 2.2-4.88 4.9 0 2.72 2.18 4.92 4.88 4.92Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOpenverse;
