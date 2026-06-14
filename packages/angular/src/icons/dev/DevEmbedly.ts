import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-embedly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevEmbedly {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M298.3 0 511 195a162.5 162.5 0 0 1 4.3 235.6L375 568.6a109.4 109.4 0 0 1-154.2-0.7l-137-137.3c-65-65-63.2-170.7 3.9-233.4z"}],["path",{"fill":"currentColor","d":"M440.9 261.6 299.6 124 142.3 273.3c-16.3 16.4-17.7 63.8 2 83.5L299 506.6l0.7-68L191.3 335c-11.1-11.1-10.1-24.2 1-35.4l33.8-33 161.6 156.1 54.9-54.5c30.1-30.3 27.3-77.5-1.7-106.6m-36.5 71.6L383.5 354l-122-118.5 39.9-41.7 101.5 96.7c14.3 14.3 15.8 28.3 1.5 42.6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevEmbedly;
