import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-python",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevPython {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M297.8 1.6c-152.3 0-142.8 66-142.8 66l0.2 68.4h145.4v20.6H97.5S0 145.6 0 299.2s85 148.3 85 148.3h50.8v-71.3s-2.7-85.1 83.8-85.1h144.1s81 1.3 81-78.3V81.2S457 1.6 297.8 1.6m-80.1 46a26.1 26.1 0 1 1 0 52.2 26.1 26.1 0 0 1 0-52.2"}],["path",{"fill":"currentColor","d":"M302.2 598.4c152.3 0 142.8-66 142.8-66l-0.2-68.4H299.4v-20.6h203.1s97.5 11 97.5-142.6-85-148.3-85-148.3h-50.8V224s2.7 85-83.8 85H236.3s-81-1.3-81 78.3v131.6s-12.3 79.6 146.9 79.6m80.1-46a26.1 26.1 0 1 1 0-52.2 26.1 26.1 0 0 1 0 52.2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevPython;
