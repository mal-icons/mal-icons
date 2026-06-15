import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-quote-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfQuoteLeft {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.17 7.61c-0.73 0-1.42 0.23-1.98 0.61 1.23-3.47 3.99-3.88 4.13-3.9l-0.12-0.99c-0.05 0.01-5.13 0.7-5.56 7.73l0.02 0c0 0.03-0.01 0.05-0.01 0.08 0 1.95 1.58 3.53 3.53 3.53s3.53-1.58 3.53-3.53-1.58-3.53-3.53-3.53zM13.17 13.67c-1.39 0-2.53-1.13-2.53-2.53s1.13-2.53 2.53-2.53 2.53 1.13 2.53 2.53-1.13 2.53-2.53 2.53zM3.73 7.61c-0.73 0-1.42 0.23-1.98 0.61 1.23-3.47 3.99-3.88 4.13-3.9l-0.12-0.99c-0.05 0.01-5.12 0.7-5.56 7.73l0.02 0c0 0.03-0.01 0.05-0.01 0.08 0 1.95 1.58 3.53 3.53 3.53s3.53-1.58 3.53-3.53-1.58-3.53-3.53-3.53zM3.73 13.67c-1.39 0-2.53-1.13-2.53-2.53s1.13-2.53 2.53-2.53 2.53 1.13 2.53 2.53-1.13 2.53-2.53 2.53z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfQuoteLeft;
