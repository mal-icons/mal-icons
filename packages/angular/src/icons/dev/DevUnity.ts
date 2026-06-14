import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-unity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevUnity {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m389 300 105-181.3L544.7 300 494 481.3zm-51.2 29.5 105 181.2L260 464 127.8 329.5zm105-240.3-105 181.3h-210l132.1-134.4zm149.9 149.1L528.7 0 289.4 63.9 254.1 126l-71.8-0.5L7.3 300l175 174.4 71.8-0.5 35.5 62.2 239 63.9 64-238.3-36.3-61.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevUnity;
