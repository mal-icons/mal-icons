import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-brightness-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBrightness3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.93 2h-0.14c-0.830.02-1.09 1.12-0.39 1.56A9.99 9.99 0 0 1 13.03 12c0 3.55-1.84 6.66-4.62 8.43-0.710.46-0.43 1.550.41 1.57h0.21c6.05 0 10.86-5.39 9.87-11.63-0.76-4.84-5.07-8.42-9.97-8.37z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBrightness3;
