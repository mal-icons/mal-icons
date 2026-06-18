import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ruff",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRuff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 0C1.34 0 0 1.34 0 3v18c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3Zm4.2 7.2h8.64c0.53 0 0.960.430.960.96v3.27c0 0.53-0.430.96-0.960.96h-0.96v0.77h1.92V16.8h-4.42v-2.88h-0.77v2.88H7.2Zm3.65 3.65v0.77h2.3v-0.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRuff;
