import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-media-play-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMediaPlayOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 7l0.090.08 5.05 4.92-5.1 4.96-0.040.040-10m0-2c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2 0.54 0 1.03-0.22 1.39-0.57 2.64-2.57 6.61-6.43 6.61-6.43s-3.96-3.86-6.6-6.43c-0.36-0.35-0.85-0.57-1.4-0.57z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMediaPlayOutline;
