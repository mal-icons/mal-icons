import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-artstation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaArtstation {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 13.73 5 L 26 27 L 27.99 22.49 C 28.46 21.56 28.41 20.46 27.87 19.58 L 20.1 6.44 C 19.55 5.54 18.58 5 17.54 5 L 13.73 5 z M 11.51 7.18 L 5.63 18 L 17.55 18 L 11.51 7.18 z M 4 21 L 6.17 25.34 C 6.68 26.36 7.72 27 8.85 27 L 22.57 27 L 19.22 21 L 4 21 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaArtstation;
