import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-kickstarter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaKickstarter {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 13.63 11 C 12.58 11 12 11.81 12 12.82 L 12 19.13 C 12 20.19 12.56 20.99 13.65 20.99 C 14.53 20.99 15.25 20.42 15.25 19.13 L 15.25 17.43 L 17.72 20.52 C 18.22 21.12 19.31 21.2 20 20.52 C 20.6 19.9 20.6 19.02 20.16 18.46 L 18.16 15.9 L 19.73 13.48 C 20.12 12.93 20.12 12.07 19.51 11.48 C 18.84 10.83 17.68 10.77 17 11.76 L 15.25 14.43 L 15.25 12.84 C 15.25 11.59 14.53 11 13.63 11 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaKickstarter;
