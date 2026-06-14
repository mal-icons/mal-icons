import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-houndci",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevHoundci {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M478 594.1H15.7c-8.6 0-15.7-6.9-15.7-15.4V21.3C0 12.8 7 6 15.7 6h568.6c8.6 0 15.7 6.9 15.7 15.4v242.3c-2.3-7-29-86-70.2-126.2C486.6 95.4 408.3 61 420 88.6c11.6 27.7 11.6 99.7 11.6 99.7L314.4 233l-17.6 65-143.4 37.8s10.2 73.2 51.4 86c26.5 8.1 199.8 27.3 199.8 27.3l-32.9 145z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevHoundci;
