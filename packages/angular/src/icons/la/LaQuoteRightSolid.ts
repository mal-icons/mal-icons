import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-quote-right-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaQuoteRightSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 8 L 4 18 L 12 18 C 12 20.22 10.22 22 8 22 L 8 24 C 11.3 24 14 21.3 14 18 L 14 8 Z M 18 8 L 18 18 L 26 18 C 26 20.22 24.22 22 22 22 L 22 24 C 25.3 24 28 21.3 28 18 L 28 8 Z M 6 10 L 12 10 L 12 16 L 6 16 Z M 20 10 L 26 10 L 26 16 L 20 16 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaQuoteRightSolid;
