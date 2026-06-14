import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-flowxo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevFlowxo {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M85.7 300.2 14.6 229a49.7 49.7 0 0 1 0-70.4 50 50 0 0 1 70.4 0l71.1 71.2-0.5 3.6-65.5 66.3 65.8 66 0.2 4.9L85.6 441a49.8 49.8 0 1 1-70.4-70.4z"}],["path",{"fill":"currentColor","d":"m299.9 373.5-73.4-73.3 71.9-71.9q3.6-4.5 7.6-8.5c20.6-26.4 17.1-48.2-0.4-65.8a53 53 0 0 0-36-16s-20.4-0.1-36.6 15l-2.6 2.5-74.3 74.3-70.4 70.4 70.4 70.4 73.7 73.6q2 2.1 4.3 3.9c25.3 20.3 54.9 18 73 0 18-18.1 17.1-46.2-3-70q-2.2-2.2-4.2-4.6"}],["path",{"fill":"currentColor","d":"M387.1 87.1a212 212 0 0 0-154 66 49 49 0 0 1 32.4-12.2h0.1a49.6 49.6 0 0 1 40.4 79 115 115 0 0 1 81.1-34c63 0 114.1 51.2 114.1 114.1A114.3 114.3 0 0 1 304 378.1a49.8 49.8 0 0 1-69.9 70q5.4 5.5 11.2 10.7l0.10.1A212.9 212.9 0 1 0 387.1 87.1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevFlowxo;
