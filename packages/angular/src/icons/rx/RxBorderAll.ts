import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-border-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxBorderAll {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0.25 1C0.25 0.59 0.59 0.25 1 0.25H14C14.41 0.25 14.75 0.59 14.75 1V14C14.75 14.41 14.41 14.75 14 14.75H1C0.59 14.75 0.25 14.41 0.25 14V1ZM1.75 1.75V13.25H13.25V1.75H1.75Z","fill":"currentColor"}],["rect",{"x":"7","y":"5","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"3","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"5","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"3","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"9","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"11","y":"7","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"9","width":"1","height":"1","rx":"0.5","fill":"currentColor"}],["rect",{"x":"7","y":"11","width":"1","height":"1","rx":"0.5","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxBorderAll;
