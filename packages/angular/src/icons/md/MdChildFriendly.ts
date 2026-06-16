import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-child-friendly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdChildFriendly {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 2v8h8c0-4.42-3.58-8-8-8zm2 6V4.34c1.70.6 3.05 1.95 3.66 3.66H15zm-8.56 3-0.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.10.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c0.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-0.46-1.97-1.18-2.61A7.95 7.95 0 0 0 21 11H6.44zM8 20c-0.83 0-1.5-0.67-1.5-1.5S7.17 17 8 17s1.50.67 1.5 1.5S8.83 20 8 20zm9 0c-0.83 0-1.5-0.67-1.5-1.5S16.17 17 17 17s1.50.67 1.5 1.5S17.83 20 17 20zm0.74-5.34-0.290.37A3.51 3.51 0 0 0 13.84 17h-2.68c-0.5-1.04-1.5-1.8-2.68-1.97l-0.44-0.67c-0.1-0.17-0.34-0.69-0.67-1.36h11.29c-0.210.59-0.52 1.15-0.92 1.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdChildFriendly;
