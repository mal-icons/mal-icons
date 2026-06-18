import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-monument-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMonumentSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 14.89 4 14 4.89 14 6 C 14 7.11 14.89 8 16 8 C 17.11 8 18 7.11 18 6 C 18 4.89 17.11 4 16 4 Z M 16 8 L 12 8 L 12 10 L 13.47 10 L 13.03 20 L 10 20 L 10 26 L 8 26 L 8 28 L 24 28 L 24 26 L 22 26 L 22 20 L 18.97 20 L 18.53 10 L 20 10 L 20 8 Z M 15.47 10 L 16.53 10 L 16.97 20 L 15.03 20 Z M 12 22 L 20 22 L 20 26 L 12 26 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMonumentSolid;
