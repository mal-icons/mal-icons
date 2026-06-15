import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-border-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxBorderRight {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 5 7)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 5 13)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 3 7)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 3 13)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 7 7)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 1 7)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 7 13)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 1 13)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 7 5)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 1 5)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 7 3)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 1 3)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 7 9)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 1 9)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 7 11)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 1 11)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 9 7)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 9 13)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 11 7)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 11 13)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 5 1)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 3 1)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 7 1)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 1 1)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 9 1)","fill":"currentColor"}],["rect",{"width":"1","height":"1","rx":"0.5","transform":"matrix(0 1 1 0 11 1)","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxBorderRight;
