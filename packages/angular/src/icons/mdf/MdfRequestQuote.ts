import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-request-quote",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfRequestQuote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 2H6c-1.1 0-1.990.9-1.99 2L4 20c0 1.10.89 2 1.99 2H18c1.1 0 2-0.9 2-2V8l-6-6zm1 10h-4v1h3c0.55 0 1 0.45 1 1v3c0 0.55-0.45 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3c-0.55 0-1-0.45-1-1v-3c0-0.550.45-1 1-1h1V9h2v1h2v2zm-2-4V3.5L17.5 8H13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfRequestQuote;
