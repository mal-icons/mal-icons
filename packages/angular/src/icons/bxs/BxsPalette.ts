import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-palette",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsPalette {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.38 21.65A9.99 9.99 0 0 0 12 22l0.140a3 3 0 0 0 2.52-1.42c0.54-0.880.6-1.950.15-2.88l-0.2-0.41c-0.45-0.94-0.1-1.80.39-2.280.49-0.48 1.34-0.84 2.28-0.39h0l0.410.2a2.99 2.99 0 0 0 2.88-0.15A3 3 0 0 0 22 12.14a9.93 9.93 0 0 0-0.35-2.76c-1.04-3.83-4.35-6.75-8.25-7.28-3.15-0.43-6.240.6-8.47 2.83S1.67 10.25 2.1 13.4c0.53 3.89 3.46 7.21 7.28 8.25zM15.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM9 15.51a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-2.5-6.5a1.5 1.5 0 1 10 3A1.5 1.5 0 0 1 6.5 9.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsPalette;
