import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-quote-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsQuoteLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.69 6.29C5.09 4.77 7.22 4 10 4h1v2.82l-0.80.16c-1.370.27-2.320.81-2.83 1.6A2.9 2.9 0 0 0 6.93 10H10a1 1 0 0 1 1 1v7c0 1.1-0.9 2-2 2H3a1 1 0 0 1-1-1v-5l0-2.92c-0.01-0.11-0.2-2.74 1.69-4.79zM20 20h-6a1 1 0 0 1-1-1v-5l0-2.92c-0.01-0.11-0.2-2.74 1.69-4.79C16.09 4.77 18.22 4 21 4h1v2.82l-0.80.16c-1.370.27-2.320.81-2.83 1.6A2.9 2.9 0 0 0 17.93 10H21a1 1 0 0 1 1 1v7c0 1.1-0.9 2-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsQuoteLeft;
