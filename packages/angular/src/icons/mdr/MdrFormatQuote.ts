import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-quote",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatQuote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.17 17c0.51 0 0.98-0.29 1.2-0.74l1.42-2.84c0.14-0.280.21-0.580.21-0.89V8c0-0.55-0.45-1-1-1H5c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h2l-1.03 2.06c-0.450.890.2 1.94 1.2 1.94zm10 0c0.51 0 0.98-0.29 1.2-0.74l1.42-2.84c0.14-0.280.21-0.580.21-0.89V8c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h2l-1.03 2.06c-0.450.890.2 1.94 1.2 1.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatQuote;
