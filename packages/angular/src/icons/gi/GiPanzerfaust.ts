import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-panzerfaust",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPanzerfaust {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M227.75 139.17l52 54.29 13-12.45-52-54.29-13 12.45zM187.74 256.42l9.68 10.11 56.33-53.95-9.68-10.11-56.33 53.95zM385.14 72.18l-38.34 72.73 24.23 25.29 74.32-35.18-60.2-62.85zm15.99-9.32l54.21 56.6 7.83-35.19-26.54-27.71-35.5 6.31zM48.83 433.78l20.75 21.67 9.39-8.99-20.75-21.67-9.39 8.99zm22.39-21.44l20.75 21.67 264.32-253.16-20.75-21.67L71.22 412.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPanzerfaust;
