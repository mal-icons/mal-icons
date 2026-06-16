import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-rsvp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsRsvp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 9h1.5l-1.75 6h-1.5L12.5 9H14l1 3.43L16 9zM5.14 13 6 15H4.5l-0.85-2H2.5v2H1V9h5v4h-0.86zm-0.64-2.5h-2v1h2v-1zM23 13h-3.5v2H18V9h5v4zm-1.5-2.5h-2v1h2v-1zM11.5 9v1.5h-3v0.75h3V15H7v-1.5h3v-0.75H7V9h4.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsRsvp;
