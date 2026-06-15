import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-border-bottom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxBorderBottom {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 13.25L14 13.25V14.75L1 14.75V13.25Z","fill":"currentColor"}],["rect",{"x":"7","y":"5","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"13","y":"5","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"3","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"13","y":"3","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"1","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"13","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"13","y":"1","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"5","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"5","y":"1","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"3","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"3","y":"1","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"9","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"9","y":"1","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"11","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"11","y":"1","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"9","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"13","y":"9","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"11","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"13","y":"11","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"1","y":"5","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"1","y":"3","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"1","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"1","y":"1","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"1","y":"9","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"1","y":"11","width":"1","height":"1","rx":"0.5","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxBorderBottom;
