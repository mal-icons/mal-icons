import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-18-up-rating",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mds_18UpRating {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z"}],["path",{"d":"M21 3H3v18h18V3zM10 15H8.5v-4.5H7V9h3v6zm6-1c0 0.55-0.45 1-1 1h-2.5c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1H15c0.55 0 1 0.45 1 1v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mds_18UpRating;
