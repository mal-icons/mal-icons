import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-bluesky-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBlueskyFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 11.39C11.09 9.63 8.63 6.34 6.34 4.73C4.14 3.18 3.3 3.44 2.75 3.69C2.12 3.98 2 4.96 2 5.53C2 6.1 2.32 10.24 2.52 10.93C3.2 13.21 5.61 13.98 7.84 13.73C4.58 14.21 1.68 15.4 5.48 19.63C9.66 23.95 11.21 18.7 12 16.04C12.79 18.7 13.71 23.77 18.44 19.63C22 16.04 19.42 14.21 16.16 13.73C18.39 13.98 20.8 13.21 21.48 10.93C21.69 10.24 22 6.1 22 5.53C22 4.95 21.88 3.98 21.25 3.69C20.7 3.44 19.86 3.17 17.67 4.72C15.37 6.35 12.91 9.63 12 11.39Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBlueskyFill;
