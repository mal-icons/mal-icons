import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-child-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChildSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 13.25 3 11 5.25 11 8 C 11 9.57 11.77 10.96 12.91 11.88 C 11.18 12.93 10 14.83 10 17 L 10 20.41 L 10.28 20.72 L 12 22.44 L 12 29 L 14 29 L 14 24 L 18 24 L 18 29 L 20 29 L 20 22.44 L 21.72 20.72 L 22 20.41 L 22 17 C 22 14.83 20.82 12.93 19.09 11.88 C 20.23 10.96 21 9.57 21 8 C 21 5.25 18.75 3 16 3 Z M 16 5 C 17.67 5 19 6.33 19 8 C 19 9.67 17.67 11 16 11 C 14.33 11 13 9.67 13 8 C 13 6.33 14.33 5 16 5 Z M 16 13 C 18.22 13 20 14.78 20 17 L 20 19.56 L 19.56 20 L 12.44 20 L 12 19.56 L 12 17 C 12 14.78 13.78 13 16 13 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChildSolid;
