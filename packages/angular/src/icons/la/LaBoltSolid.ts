import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-bolt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBoltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 6 L 16 15 L 20 16 L 16.1 26 L 16 26 L 16 17.97 L 12 16.97 L 15.9 6 L 16 6 M 18 4 L 14.49 4 L 14.02 5.33 L 10.11 16.3 L 9.38 18.38 L 11.52 18.91 L 14 19.53 L 14 28 L 17.47 28 L 17.96 26.73 L 21.86 16.73 L 22.69 14.61 L 18 13.44 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBoltSolid;
