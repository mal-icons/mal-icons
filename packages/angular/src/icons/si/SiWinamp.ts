import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-winamp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWinamp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.9 0a0.990.99 0 0 0-0.910.6l-6.14 14.57c-0.180.420.130.880.590.88H8.66a0.990.99 0 0 0 0.91-0.6L15.710.88A0.640.64 0 0 0 15.12 0h-3.22Zm3.44 7.94a0.990.99 0 0 0-0.910.6l-6.14 14.57c-0.180.420.130.880.590.88h3.22a0.990.99 0 0 0 0.91-0.6l6.14-14.57a0.640.64 0 0 0-0.59-0.88h-3.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWinamp;
