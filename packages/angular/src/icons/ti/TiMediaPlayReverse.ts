import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-media-play-reverse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMediaPlayReverse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 19c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2-0.5 0-1 0.2-1.40.6-2.6 2.5-6.6 6.4-6.6 6.4s4 3.9 6.6 6.4c0.40.40.90.6 1.40.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMediaPlayReverse;
