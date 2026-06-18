import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-user-minus-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaUserMinusSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 14 4 C 10.1 4 7 7.1 7 11 C 7 13.4 8.2 15.6 10.1 16.8 C 6.5 18.3 4 21.9 4 26 L 6 26 C 6 21.6 9.6 18 14 18 C 15.4 18 16.7 18.4 17.8 19 C 16.7 20.4 16 22.1 16 24 C 16 28.4 19.6 32 24 32 C 28.4 32 32 28.4 32 24 C 32 19.6 28.4 16 24 16 C 22.3 16 20.6 16.6 19.3 17.5 C 18.9 17.2 18.4 17 17.9 16.8 C 19.8 15.5 21 13.4 21 11 C 21 7.1 17.9 4 14 4 z M 14 6 C 16.8 6 19 8.2 19 11 C 19 13.8 16.8 16 14 16 C 11.2 16 9 13.8 9 11 C 9 8.2 11.2 6 14 6 z M 24 18 C 27.3 18 30 20.7 30 24 C 30 27.3 27.3 30 24 30 C 20.7 30 18 27.3 18 24 C 18 20.7 20.7 18 24 18 z M 20 23 L 20 25 L 28 25 L 28 23 L 20 23 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaUserMinusSolid;
