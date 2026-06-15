import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-flickr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfFlickr {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.3 8.5c0 2.01-1.63 3.65-3.65 3.65-2.01 0-3.65-1.63-3.65-3.65s1.63-3.65 3.65-3.65c2.01 0 3.65 1.63 3.65 3.65zM17 8.5c0 2.01-1.63 3.65-3.65 3.65-2.01 0-3.65-1.63-3.65-3.65s1.63-3.65 3.65-3.65c2.02 0 3.65 1.63 3.65 3.65zM16 8.5c0-1.46-1.19-2.65-2.65-2.65-1.46 0-2.65 1.19-2.65 2.65s1.19 2.65 2.65 2.65c1.46 0 2.65-1.19 2.65-2.65z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfFlickr;
