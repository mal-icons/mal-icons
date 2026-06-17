import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-underwear-shorts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiUnderwearShorts {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M71.1 67.17l-4.28 38.43 379.280.7-3.8-39.13zm-6.28 56.43L24.04 423.5c55.85 22.4 114.06 20.6 173.86 1L234 282.6c12.1 9 25.5 5.3 32.2-1l39.9 146.1c61.9 24.1 132 19.5 181.9 6l-40.2-309.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiUnderwearShorts;
