import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-adn",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaAdn {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 9.38 4 4 9.38 4 16 C 4 22.62 9.38 28 16 28 C 22.62 28 28 22.62 28 16 C 28 9.38 22.62 4 16 4 Z M 16 6 C 21.54 6 26 10.46 26 16 C 26 21.54 21.54 26 16 26 C 10.46 26 6 21.54 6 16 C 6 10.46 10.46 6 16 6 Z M 16 9.94 L 9.41 19.84 L 11 19.84 L 12.53 17.53 L 19.47 17.53 L 21.03 19.84 L 22.63 19.84 Z M 16 12.34 L 18.84 16.59 L 13.16 16.59 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaAdn;
