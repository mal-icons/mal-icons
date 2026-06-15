import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-redhat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrRedhat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"fill":"none","fill-rule":"evenodd","transform":"translate(0 3)"}],["path",{"fill":"currentColor","d":"M5.83,3.13 C6.48,0.72 7.36,-0.24 8.49,0.24 C10.18,0.96 10.91,0.72 11.63,0.24 C12.12,-0.08 12.84,-0.08 13.81,0.24 L17.19,1.68 C18.16,2 18.8,3.13 19.13,5.05 C19.45,6.97 19.69,8.25 19.85,8.9 C22.27,9.86 23.64,11.3 23.96,13.22 C24.44,16.11 20.58,18.99 12.6,17.55 C4.62,16.11 -0.45,11.54 0.03,8.9 C0.35,7.13 1.88,6.25 4.62,6.25 L5.83,3.13 Z"}],["path",{"fill":"currentColor","d":"M4.89,5.54 C6.35,8.05 9.03,9.61 12.93,10.24 C16.82,10.87 19.1,10.24 19.75,8.36 C20.03,9.78 20.03,10.72 19.75,11.18 C18.83,12.7 16.34,13.15 13.66,12.82 C9.76,12.35 6.92,11.1 5.13,9.06 C4.64,8.44 4.4,7.89 4.4,7.42 C4.4,6.95 4.56,6.32 4.89,5.54 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrRedhat;
