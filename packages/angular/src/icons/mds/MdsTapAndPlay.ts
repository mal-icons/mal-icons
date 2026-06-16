import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-tap-and-play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsTapAndPlay {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2a9 9 0 0 1 9 9h2c0-6.08-4.92-11-11-11zM5 1v9.37c0.690.16 1.360.37 2 0.64V5h10v13h-3.03c0.52 1.250.84 2.590.95 4H19V1H5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsTapAndPlay;
