import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-user-tag-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaUserTagSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 5 C 12.1 5 9 8.1 9 12 C 9 14.44 10.21 16.56 12.07 17.81 C 8.51 19.35 6 22.89 6 27 L 8 27 C 8 22.6 11.6 19 16 19 C 19.9 19 23 15.9 23 12 C 23 8.1 19.9 5 16 5 z M 16 7 C 18.8 7 21 9.2 21 12 C 21 14.8 18.8 17 16 17 C 13.2 17 11 14.8 11 12 C 11 9.2 13.2 7 16 7 z M 21 19 C 19.9 19 19 19.9 19 21 L 19 25.4 L 25 31.4 C 25.4 31.8 25.9 32 26.4 32 C 26.9 32 27.4 31.8 27.8 31.4 L 31.4 27.8 C 31.8 27.4 32 26.9 32 26.4 C 32 25.9 31.8 25.4 31.4 25 L 25.4 19 L 21 19 z M 21 21 L 24.6 21 L 30 26.4 L 26.4 30 L 21 24.6 L 21 21 z M 23 22 A 1 1 0 0 0 23 24 A 1 1 0 0 0 23 22 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaUserTagSolid;
