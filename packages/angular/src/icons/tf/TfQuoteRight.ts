import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-quote-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfQuoteRight {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.31 6.86c0-1.95-1.58-3.53-3.53-3.53-1.94 0-3.53 1.58-3.53 3.53 0 1.95 1.58 3.53 3.53 3.53 0.73 0 1.42-0.23 1.98-0.61-1.23 3.47-3.99 3.88-4.13 3.9l0.12 0.99c0.05-0.01 5.13-0.7 5.56-7.72l-0.010c0-0.03 0.01-0.05 0.01-0.08zM3.78 9.39c-1.39 0-2.53-1.13-2.53-2.53s1.13-2.53 2.53-2.53c1.4 0 2.53 1.14 2.53 2.53s-1.13 2.53-2.53 2.53zM16.73 6.94c0-0.03 0.01-0.05 0.01-0.08 0-1.95-1.58-3.53-3.53-3.53s-3.53 1.58-3.53 3.53c0 1.95 1.58 3.53 3.53 3.53 0.73 0 1.42-0.23 1.98-0.61-1.23 3.47-3.99 3.88-4.13 3.9l0.12 0.99c0.05-0.01 5.13-0.7 5.56-7.72l-0.010zM13.21 9.39c-1.39 0-2.53-1.13-2.53-2.53s1.13-2.53 2.53-2.53 2.53 1.14 2.53 2.53-1.13 2.53-2.53 2.53z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfQuoteRight;
